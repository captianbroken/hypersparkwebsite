// Sends the contact form via the Resend HTTP API (https://resend.com).
// Cloudflare Workers/Pages can't hold raw SMTP sockets, so we use fetch.
//
// Environment variables (Cloudflare Pages -> Settings -> Variables):
//   RESEND_API_KEY  (Secret)  API key from resend.com
//   CONTACT_TO      where submissions are delivered (e.g. info@hyperspark.in)
//   CONTACT_FROM    verified sender, e.g. "HyperSpark <noreply@hyperspark.in>"
interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !email || !message) {
    return json({ error: "All fields are required." }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: "Email service is not configured." }, 500);
  }

  const to = env.CONTACT_TO || "info@hyperspark.in";
  const from = env.CONTACT_FROM || "HyperSpark Website <noreply@hyperspark.in>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name} — HyperSpark website`,
        text:
          `You received a new contact form submission:\n\n` +
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n`,
        html:
          `<h2>New contact form submission</h2>` +
          `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
          `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` +
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
          `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return json({ error: "Failed to send message.", detail }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    return json({ error: "Failed to send message.", detail }, 502);
  }
};

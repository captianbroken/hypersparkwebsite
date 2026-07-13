// Sends the contact form via the Brevo (Sendinblue) HTTP API.
// Cloudflare Workers/Pages can't hold raw SMTP sockets, so we use fetch.
//
// Environment variables (Cloudflare Pages -> Settings -> Variables):
//   BREVO_API_KEY  (Secret)  API key from brevo.com (starts with xkeysib-)
//   CONTACT_TO      where submissions are delivered (e.g. info@hyperspark.in)
//   CONTACT_FROM    verified sender, e.g. "HyperSpark Website <info@hyperspark.in>"
interface Env {
  BREVO_API_KEY: string;
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

// Parse "Name <email@domain>" or a bare "email@domain" into { name, email }.
function parseSender(input: string): { name: string; email: string } {
  const match = input.match(/^\s*(.*?)\s*<\s*(.+?)\s*>\s*$/);
  if (match) return { name: match[1] || "HyperSpark Website", email: match[2] };
  return { name: "HyperSpark Website", email: input.trim() };
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

  if (!env.BREVO_API_KEY) {
    return json({ error: "Email service is not configured." }, 500);
  }

  const to = env.CONTACT_TO || "info@hyperspark.in";
  const sender = parseSender(
    env.CONTACT_FROM || "HyperSpark Website <info@hyperspark.in>"
  );

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender,
        to: [{ email: to }],
        replyTo: { email, name },
        subject: `New enquiry from ${name} — HyperSpark website`,
        textContent:
          `You received a new contact form submission:\n\n` +
          `Name: ${name}\n` +
          `Phone: ${phone}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n`,
        htmlContent:
          `<h2>New contact form submission</h2>` +
          `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
          `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` +
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
          `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Brevo error:", res.status, detail);
      return json({ error: "Failed to send message.", detail }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    return json({ error: "Failed to send message.", detail }, 502);
  }
};

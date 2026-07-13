import { WorkerMailer } from "worker-mailer";

// Environment variables configured in the Cloudflare Pages dashboard
// (Settings -> Environment variables). These are server-side only and are
// NEVER exposed to the browser. Do NOT prefix them with VITE_.
interface Env {
  SMTP_HOST: string; // e.g. smtp.gmail.com
  SMTP_PORT: string; // e.g. 465
  SMTP_USER: string; // e.g. info@hyperspark.in
  SMTP_PASS: string; // Gmail App Password
  CONTACT_TO?: string; // where the form is delivered (defaults to SMTP_USER)
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

  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
    return json({ error: "Email service is not configured." }, 500);
  }

  const port = Number(env.SMTP_PORT || "465");

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST,
        port,
        // Port 465 = implicit TLS (Gmail). Port 587 uses STARTTLS instead.
        secure: port === 465,
        startTls: port !== 465,
        credentials: {
          username: env.SMTP_USER,
          password: env.SMTP_PASS,
        },
        authType: "login",
      },
      {
        // Gmail requires the From address to match the authenticated account.
        from: { name: "HyperSpark Website", email: env.SMTP_USER },
        to: { email: env.CONTACT_TO || env.SMTP_USER },
        reply: { name, email },
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
      }
    );

    return json({ ok: true });
  } catch (err) {
    console.error("SMTP send failed:", err);
    // TEMP DEBUG: expose the real error so we can diagnose the SMTP failure.
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    return json({ error: "Failed to send message.", detail }, 502);
  }
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

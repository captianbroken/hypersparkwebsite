# HyperSpark – Smart Security, Automation & Connectivity Solutions

HyperSpark is a Hyderabad-based technology solutions company offering CCTV surveillance, gated community infrastructure, home/office automation, high-speed internet services, and enterprise-grade network security.  
This project is the official HyperSpark website built with **React + TypeScript + Vite**, with a light, responsive UI. It also hosts the public product page and legal pages for **Fernocast**, HyperSpark's digital signage platform.

---

## Features

### Security & Automation

- CCTV Surveillance & AMC
- Gated Community Technologies
- Smart Home & Office Automation
- Access Control Systems

### Connectivity

- Business Internet Solutions
- FTTH for Communities
- Enterprise Network Security

### Additional Services

- Software Licensing (Microsoft 365, AutoCAD, Antivirus, etc.)
- Custom Technology Integrations
- **Fernocast** digital signage: product page plus its own Privacy Policy and Terms of Service (used as the app's website and policy URLs on Google Play)

### Site features

- Contact form delivered by email through EmailJS
- Per-page SEO titles and meta descriptions, plus `LocalBusiness` JSON-LD in `index.html`
- Click-to-call / email bar in the header and a floating WhatsApp button

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **shadcn/ui (Custom UI Components)**
- **Lucide Icons**
- **EmailJS** (`@emailjs/browser`) for the contact form

---

## Project Structure

```

src/
│── assets/
│   ├── fernocast-logo.png
│   ├── logo-dsr.png
│   ├── logo-revolutionare.png
│   ├── logo-vasavi.png
│   └── ... (client logos)
│
│── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NavLink.tsx
│   ├── ScrollToTop.tsx
│   ├── Seo.tsx              (per-page <title> and meta description)
│   ├── ServiceCard.tsx
│   ├── FeatureCard.tsx
│   ├── WhatsAppButton.tsx
│   └── ui/...
│
│── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
│── lib/
│   └── utils.ts
│
│── pages/
│   ├── Home.tsx
│   ├── GatedCommunity.tsx
│   ├── CCTV.tsx
│   ├── HomeAutomation.tsx
│   ├── Internet.tsx
│   ├── NetworkSecurity.tsx
│   ├── SoftwareLicensing.tsx
│   ├── Fernocast.tsx
│   ├── FernocastPrivacyPolicy.tsx
│   ├── FernocastTerms.tsx
│   ├── Contact.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── NotFound.tsx
│
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts

```

---

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/gated-community`, `/cctv`, `/home-automation`, `/internet`, `/network-security`, `/software-licensing` | Service pages |
| `/fernocast` | Fernocast product page |
| `/fernocast/privacy-policy` | Fernocast Privacy Policy (app-specific; use this as the Play Console privacy policy URL) |
| `/fernocast/terms` | Fernocast Terms of Service |
| `/contact` | Contact form and details |
| `/privacy-policy`, `/terms-of-service` | Company website legal pages |

The Fernocast policy must stay in sync with the Android app: if the app's permissions or data collection change, update `FernocastPrivacyPolicy.tsx` and the Play Console Data safety form together.

---

## Local Development Setup

Make sure **Node.js 18+** is installed.

### Clone the repository

```sh
git clone https://github.com/captianbroken/hypersparkwebsite.git
cd hypersparkwebsite
```

### Install dependencies

```sh
npm install
```

### Configure environment variables

```sh
cp .env.example .env
```

Then fill in the EmailJS values (see [Environment Variables](#environment-variables)). The contact form will show an error until these are set.

### Start development server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

---

## Deployment

This project can be deployed on:

- **Vercel (Recommended)**
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**
- **Any static hosting provider**

Build the site and publish the **dist/** folder:

```sh
npm run build
```

`public/_redirects` provides the single-page-app fallback (`/* /index.html 200`) on hosts that support it (Cloudflare Pages, Netlify).

> **The environment variables below must be available when `npm run build` runs.** Wherever the site is built, set them there too, or the deployed contact form will fail.

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Email Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key (Account → General) |

**Local development:** copy `.env.example` to `.env` and fill in the values. `.env` is gitignored and must never be committed.

**Important:** Vite inlines `VITE_*` variables into the JavaScript bundle **at build time**, not at runtime. Changing a value means rebuilding and redeploying. The `.env` file is not in the repository, so a CI build cannot see it.

### GitHub Actions

Add the three variables as repository secrets (**Settings → Secrets and variables → Actions → New repository secret**, using the exact names above), then pass them to the build step:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

### Cloudflare Pages / Netlify / Vercel

Add the same three variables in the host's project settings as **build-time** environment variables, then trigger a new deploy.

### Contact form setup notes

- The EmailJS template must use the merge tags `{{name}}`, `{{phone}}`, `{{email}}` and `{{message}}`, which is what `Contact.tsx` sends.
- The email account is connected inside the EmailJS dashboard (Email Services), not in this repo. For Gmail or Google Workspace over SMTP use host `smtp.gmail.com`, port `465` (SSL) and a Google **App Password** (16 characters, requires 2-Step Verification). A normal account password is rejected with `534-5.7.9 Application-specific password required`.
- The EmailJS public key is exposed in the browser bundle by design; do not put the SMTP password or any private key in a `VITE_` variable.

---

## Author

**Vineeth Raja Banala**

---

## 📬 Contact

📧 [info@hyperspark.in](mailto:info@hyperspark.in)
📍 Hyderabad, Telangana, India

---

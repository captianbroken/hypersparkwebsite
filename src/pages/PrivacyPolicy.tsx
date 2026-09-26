import { Seo } from "@/components/Seo";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-[7.25rem]">
      <Seo
        title="Privacy Policy | HyperSpark"
        description="How HyperSpark collects, uses and protects your information when you visit hyperspark.in or contact us."
      />
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: September 26, 2026</p>
        </div>
      </section>

      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy explains how HyperSpark ("HyperSpark", "we",
              "us", or "our") collects, uses, and protects information when you
              visit hyperspark.in or contact us about our security,
              automation, and connectivity services.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Information you provide:</strong>{" "}
                  when you submit our contact form, we collect your name,
                  phone number, email address, and message.
                </li>
                <li>
                  <strong className="text-foreground">Automatically collected information:</strong>{" "}
                  like most websites, our hosting and analytics providers may
                  log standard technical data such as IP address, browser
                  type, device type, and pages visited.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your enquiry and provide quotes or consultations.</li>
                <li>To follow up about our CCTV, gated community, home automation, internet, network security, and software licensing services.</li>
                <li>To maintain the security and proper functioning of our website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Share Your Information
              </h2>
              <p>
                We do not sell your personal information. We only share it
                with service providers who help us operate our website and
                respond to enquiries (for example, email or hosting
                providers), or when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Data Retention &amp; Security
              </h2>
              <p>
                We retain contact form submissions for as long as reasonably
                necessary to respond to your enquiry and maintain our business
                records, and we use reasonable technical and organizational
                measures to protect it. No method of transmission or storage
                is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Your Rights
              </h2>
              <p>
                You may contact us at any time to ask what information we
                hold about you, to request a correction, or to request that
                we delete it, subject to any legal or contractual obligations
                we may have to retain it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Cookies
              </h2>
              <p>
                Our website may use basic cookies or similar technologies
                required for the site to function and, where used, for
                analytics to help us understand site usage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Children's Privacy
              </h2>
              <p>
                Our website and services are intended for businesses and
                adults, and we do not knowingly collect information from
                children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated "Last updated"
                date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, contact us at{" "}
                <a href="mailto:Info@hyperspark.in" className="text-primary font-semibold hover:underline">
                  Info@hyperspark.in
                </a>{" "}
                or{" "}
                <a href="tel:+919603165929" className="text-primary font-semibold hover:underline">
                  +91 96031 65929
                </a>
                , or by post at 1st Floor, Flat No. 101, Rock Homes, Road No.
                2, Rock Town Colony, LB Nagar, Hyderabad, Telangana - 500068.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

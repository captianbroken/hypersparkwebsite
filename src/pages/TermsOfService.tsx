import { Seo } from "@/components/Seo";

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-[7.25rem]">
      <Seo
        title="Terms of Service | HyperSpark"
        description="Terms governing use of the HyperSpark website and engagement with HyperSpark for security, automation and connectivity services."
      />
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: September 26, 2026</p>
        </div>
      </section>

      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your use of the
              hyperspark.in website and your engagement with HyperSpark
              ("HyperSpark", "we", "us", or "our") for CCTV, gated community,
              home automation, internet, network security, and software
              licensing services. By using our website or contacting us for
              services, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Use of This Website
              </h2>
              <p>
                This website is provided to share information about
                HyperSpark's services and to let visitors request quotes or
                consultations. You agree not to misuse the site, attempt to
                gain unauthorized access to it, or use it for any unlawful
                purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Quotes &amp; Services
              </h2>
              <p>
                Information on this website (including service descriptions
                and any figures shown) is for general informational purposes
                and does not itself constitute a binding offer. Actual scope,
                pricing, installation timelines, and any service guarantees
                are agreed separately in a written quote, order, or contract
                between HyperSpark and the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Intellectual Property
              </h2>
              <p>
                The HyperSpark name, logo, and website content are the
                property of HyperSpark or its licensors and may not be
                copied, reproduced, or used without prior written permission,
                except as necessary to view the site normally in your
                browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Third-Party Links
              </h2>
              <p>
                Our website may link to third-party sites (for example,
                partner or client websites). We are not responsible for the
                content or privacy practices of those external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Disclaimer &amp; Limitation of Liability
              </h2>
              <p>
                This website and its content are provided "as is" without
                warranties of any kind. To the extent permitted by law,
                HyperSpark is not liable for any indirect or consequential
                loss arising from your use of this website. This does not
                limit any liability that cannot be excluded by law, and does
                not affect the specific terms of any signed service
                agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India, and any
                disputes will be subject to the courts having jurisdiction in
                Hyderabad, Telangana.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Changes will be
                posted on this page with an updated "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:Info@hyperspark.in" className="text-primary font-semibold hover:underline">
                  Info@hyperspark.in
                </a>{" "}
                or{" "}
                <a href="tel:+919603165929" className="text-primary font-semibold hover:underline">
                  +91 96031 65929
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;

import { Seo } from "@/components/Seo";

const FernocastTerms = () => {
  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="Fernocast Terms of Service | HyperSpark"
        description="Terms governing use of the Fernocast digital signage dashboard and Android player app."
      />
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Fernocast Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: September 26, 2026</p>
        </div>
      </section>

      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your use of Fernocast,
              a digital signage platform operated by HyperSpark ("we", "us",
              or "our"), including the web dashboard and the Android player
              app installed on screens ("the App"). By creating an account,
              installing the App, or otherwise using Fernocast, you agree to
              these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Your Account &amp; Content
              </h2>
              <p>
                You are responsible for the content you upload and display on
                your screens, and for keeping your account credentials
                secure. You must have the rights to any image or video you
                upload and display through Fernocast, and must not upload
                unlawful, infringing, or harmful content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Screens &amp; Devices
              </h2>
              <p>
                Pairing a screen to your account links that Android device to
                your account until you unpair or remove it from the
                dashboard. You are responsible for the physical device the
                App runs on, its power and network connectivity, and for
                removing a screen from your account if it is lost, sold, or
                decommissioned.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Service Availability
              </h2>
              <p>
                We aim to keep Fernocast's dashboard and backend available,
                but do not guarantee uninterrupted service. The App is
                designed to keep playing cached content on a screen even
                during a network or backend outage, but newly uploaded or
                changed content will not sync until connectivity is restored.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Acceptable Use
              </h2>
              <p>
                You agree not to misuse Fernocast, attempt to gain
                unauthorized access to accounts or screens other than your
                own, interfere with the service's operation, or reverse
                engineer the App beyond what is permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Intellectual Property
              </h2>
              <p>
                The Fernocast name, logo, dashboard, and App are the property
                of HyperSpark or its licensors. You retain ownership of the
                content you upload; you grant us the limited right to store
                and deliver that content to your own paired screens as part
                of providing the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Disclaimer &amp; Limitation of Liability
              </h2>
              <p>
                Fernocast is provided "as is" without warranties of any kind.
                To the extent permitted by law, HyperSpark is not liable for
                indirect or consequential loss arising from your use of
                Fernocast, including content that fails to display due to a
                device, network, or power issue outside our control.
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

export default FernocastTerms;

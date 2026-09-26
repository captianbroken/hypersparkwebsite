import { Seo } from "@/components/Seo";

const FernocastPrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="Fernocast Privacy Policy | HyperSpark"
        description="How the Fernocast digital signage app and dashboard collect, use, and protect data."
      />
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Fernocast Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: September 26, 2026</p>
        </div>
      </section>

      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy explains how Fernocast (a digital signage
              platform built and operated by HyperSpark, "we", "us", or "our")
              collects, uses, and protects data through the Fernocast web
              dashboard and the Fernocast Android player app installed on
              screens ("the App"). This policy is specific to Fernocast and
              is separate from the general HyperSpark website privacy policy.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Account information:</strong>{" "}
                  when you sign up for the dashboard, we collect your name,
                  email address, and password (stored hashed).
                </li>
                <li>
                  <strong className="text-foreground">Device information:</strong>{" "}
                  each screen the App runs on is identified by a stable
                  hardware identifier and a device token, so the App can be
                  recognized on reinstall without creating a duplicate screen.
                </li>
                <li>
                  <strong className="text-foreground">Content you upload:</strong>{" "}
                  images and videos you upload to build playlists are stored
                  in our cloud storage (AWS S3) and delivered to your screens.
                </li>
                <li>
                  <strong className="text-foreground">Device status &amp; playback data:</strong>{" "}
                  the App periodically reports whether a screen is online or
                  offline (heartbeat, roughly every 15 seconds) and logs basic
                  playback events (what played, on which screen, and when) so
                  you can see this information on your dashboard.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Use This Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To let you sign in and manage your screens, content, playlists, and schedules.</li>
                <li>To deliver the correct content to the correct screen and keep it in sync.</li>
                <li>To show you which screens are online, and let you send remote commands (reboot, refresh content, screenshot) to your own screens.</li>
                <li>To let the App update itself over the air.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Share Information
              </h2>
              <p>
                We do not sell your data. Uploaded content and account data
                are stored with our infrastructure providers (including AWS,
                for file storage) solely to operate Fernocast. Data belonging
                to your account is not shared with other Fernocast accounts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Data Retention
              </h2>
              <p>
                Uploaded content remains available while your account is
                active. When content is deleted from the dashboard, the
                underlying file is removed from storage within 24 hours.
                Device status and playback logs are retained to provide the
                dashboard's history and analytics features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                App Permissions
              </h2>
              <p className="mb-4">
                Fernocast screens run unattended, with no one available to
                tap the screen or grant prompts, which is why the player app
                requests the following permissions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Internet &amp; network state:</strong>{" "}
                  to sync content and report screen status to the dashboard.
                </li>
                <li>
                  <strong className="text-foreground">Storage:</strong>{" "}
                  to cache downloaded images and videos so playback keeps
                  working even if the internet drops.
                </li>
                <li>
                  <strong className="text-foreground">Run at startup (boot completed):</strong>{" "}
                  so the screen resumes playing automatically after a power
                  cycle, without anyone present to relaunch it.
                </li>
                <li>
                  <strong className="text-foreground">Foreground service:</strong>{" "}
                  a persistent background service (with a visible
                  notification, as Android requires) sends a status heartbeat
                  roughly every 15 seconds.
                </li>
                <li>
                  <strong className="text-foreground">Install unknown apps (REQUEST_INSTALL_PACKAGES):</strong>{" "}
                  used only to install the app's own over-the-air updates
                  automatically, without needing physical access to the
                  screen. It is not used to install any other software.
                </li>
                <li>
                  <strong className="text-foreground">Display over other apps (SYSTEM_ALERT_WINDOW):</strong>{" "}
                  used only to bring the player back to the foreground
                  automatically after an app update or restart, since an
                  unattended screen has no one to tap it back open.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Your Rights
              </h2>
              <p>
                Account holders can access, correct, or delete their account
                data, and remove or unpair a screen at any time from the
                dashboard. You may also contact us to request deletion of
                your account and associated data.
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
                Questions about this Privacy Policy or the Fernocast app can
                be sent to{" "}
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

export default FernocastPrivacyPolicy;

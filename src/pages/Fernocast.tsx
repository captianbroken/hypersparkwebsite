import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Seo } from "@/components/Seo";
import fernocastLogo from "@/assets/fernocast-logo.png";
import {
  UploadCloud,
  MonitorSmartphone,
  Wifi,
  RadioTower,
  RotateCw,
  Layers,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: UploadCloud,
    title: "Upload & Schedule",
    description:
      "Upload images and videos from the web dashboard, build playlists, and schedule what plays and when on each screen.",
  },
  {
    icon: MonitorSmartphone,
    title: "Pair Any Android Screen",
    description:
      "Install the player on an Android TV or box, enter the 8-character code it shows on the dashboard, and it's connected.",
  },
  {
    icon: RadioTower,
    title: "Real-Time Screen Status",
    description:
      "See every screen online or offline the moment it changes, with heartbeat monitoring as a backup safety net.",
  },
  {
    icon: Wifi,
    title: "Keeps Playing Offline",
    description:
      "Content is cached on the device itself, so a screen keeps looping its playlist even if the internet drops.",
  },
  {
    icon: RotateCw,
    title: "Remote Control & Updates",
    description:
      "Reboot, refresh content, or take a screenshot of any screen remotely — and the player app can update itself over the air.",
  },
  {
    icon: Layers,
    title: "Zero-Setup Fallback",
    description:
      "A screen with no schedule or playlist assigned just loops all of your ready content automatically — nothing goes blank.",
  },
  {
    icon: Users,
    title: "Multi-Location, Team Access",
    description:
      "Manage multiple screens and locations under one account, with team roles for admins, managers, and viewers.",
  },
  {
    icon: BarChart3,
    title: "Playback Analytics",
    description:
      "Track what played, on which screen, and when — so you know your content actually reached the screen.",
  },
];

const steps = [
  {
    step: "01",
    title: "Upload your content",
    description: "Add images and videos to the dashboard and group them into playlists.",
  },
  {
    step: "02",
    title: "Pair a screen",
    description: "Install the player on an Android TV/box and enter the pairing code it shows.",
  },
  {
    step: "03",
    title: "Assign a schedule",
    description: "Choose what plays and when — or leave it unset and it loops everything.",
  },
  {
    step: "04",
    title: "It just plays",
    description: "The screen syncs, caches content locally, and keeps playing — online or offline.",
  },
];

const Fernocast = () => {
  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="Fernocast — Digital Signage Platform | HyperSpark"
        description="Fernocast is HyperSpark's digital signage platform: upload content from a web dashboard and play it on Android TV screens, with real-time status, scheduling, and offline playback."
      />

      {/* Hero */}
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <img
            src={fernocastLogo}
            alt="Fernocast"
            className="h-10 md:h-12 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Digital Signage for Any Screen
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground mb-8">
            Upload content from a web dashboard and play it on Android TV
            screens — with real-time status, scheduling, and offline
            playback. Built by HyperSpark.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title mb-12">What Fernocast Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-container bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                  style={{ background: "var(--gradient-button)" }}
                >
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want Fernocast for Your Screens?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch to see a live demo of the dashboard and player app.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Request a Demo
            </Button>
          </Link>
          <div className="mt-6 flex justify-center gap-6 text-sm text-white/70">
            <Link to="/fernocast/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/fernocast/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fernocast;

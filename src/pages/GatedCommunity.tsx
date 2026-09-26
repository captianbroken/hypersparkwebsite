import { Camera, Phone, Wifi, Fingerprint, Fence } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation & AMC",
    description:
      "Zero-blind-spot design with PTZ, Night Vision, and IP Cameras. 24/7 surveillance monitoring with annual maintenance contracts ensuring continuous protection.",
  },
  {
    icon: Phone,
    title: "Intercom Installation & AMC",
    description:
      "Video and audio intercoms with mobile app integration. Advanced visitor management system with comprehensive AMC support.",
  },
  {
    icon: Wifi,
    title: "Broadband Connectivity",
    description:
      "High-speed fiber distribution across the community. Fiber-to-the-home (FTTH) solutions for all flats and villas with reliable connectivity.",
  },
  {
    icon: Fingerprint,
    title: "Lift Access Control",
    description:
      "RFID, Biometric, and Face Recognition lift access systems. Floor-restriction options with visitor OTP access for enhanced security.",
  },
  {
    icon: Fence,
    title: "Boom Barriers with ANPR",
    description:
      "Automated entry and exit systems with vehicle tracking. Automatic Number Plate Recognition for seamless access management.",
  },
];

const GatedCommunity = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-[7.25rem]">
      <Seo
        title="Gated Community Technology Solutions in Hyderabad | HyperSpark"
        description="CCTV, intercom, access control, boom barriers and broadband for gated communities and residential complexes in Hyderabad."
      />
      {/* Hero Section */}
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 animate-fade-in">
            Gated Community Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground animate-slide-up">
            Perimeter CCTV, video intercoms, boom barriers with ANPR, lift
            access control and FTTH broadband for gated communities,
            apartment complexes and residential townships.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title mb-12">Comprehensive Community Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Complete Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Security Features
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>360-degree perimeter surveillance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Centralized monitoring station</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Emergency alert systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Visitor pre-registration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Connectivity & Automation
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Gigabit fiber connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Smart common area lighting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Automated gate operations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Mobile app for residents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upgrading Your Community's Security?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Request a site visit and we'll assess your community's entry
            points, common areas, and connectivity needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Request a Site Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GatedCommunity;

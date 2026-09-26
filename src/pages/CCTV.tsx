import { Camera, Building, Car } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Gated Community Surveillance",
    description: "360-degree coverage with zero blind spots. AI analytics for intelligent threat detection, facial recognition, and behavioral analysis.",
  },
  {
    icon: Building,
    title: "IT Offices & Warehouse Monitoring",
    description: "Centralized monitoring systems with industrial-grade cameras. Safety hazard detection and real-time alerts for secure operations.",
  },
  {
    icon: Car,
    title: "ANPR Systems",
    description: "Automatic Number Plate Recognition integrated with boom barriers. Complete vehicle tracking and access control automation.",
  },
];

const CCTV = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-[7.25rem]">
      <Seo
        title="CCTV Installation in Hyderabad | HyperSpark"
        description="Professional CCTV camera installation, AMC, ANPR and NVR setup and surveillance systems for homes, apartments, offices and warehouses in Hyderabad."
      />
      {/* Hero Section */}
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 animate-fade-in">
            CCTV Surveillance Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground animate-slide-up">
            IP cameras, PTZ cameras, NVRs and structured cabling for
            apartments, villas, gated communities, offices, warehouses and
            construction sites — with AI-powered analytics and 24/7 monitoring.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title mb-12">Advanced Surveillance Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Camera Technologies</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">PTZ Cameras:</strong> Pan-Tilt-Zoom with 360° rotation and 20x optical zoom</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Night Vision:</strong> Advanced infrared technology for 24/7 surveillance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">IP Cameras:</strong> Network-based high-resolution recording up to 4K</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Dome Cameras:</strong> Vandal-resistant design for high-security areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Smart Features</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">AI Analytics:</strong> Motion detection, facial recognition, and behavior analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Cloud Storage:</strong> Secure cloud backup with instant remote access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Mobile Monitoring:</strong> Real-time viewing from anywhere via smartphone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Alert System:</strong> Instant notifications for suspicious activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AMC Section */}
          <div className="mt-12 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-6 text-center">Annual Maintenance Contracts</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive maintenance packages ensuring your surveillance system operates at peak performance year-round
            </p>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need CCTV for Your Property?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a site visit and a clear installation estimate for your home,
            office, or community.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Get CCTV Estimate
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CCTV;
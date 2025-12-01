import { Camera, Building, Car } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            CCTV Surveillance Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-slide-up">
            Advanced security camera systems with AI-powered analytics, 24/7 monitoring, and comprehensive coverage for complete peace of mind.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Advanced Surveillance Systems</h2>
          <p className="section-subtitle">
            Cutting-edge CCTV solutions designed for residential, commercial, and industrial applications
          </p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Technical Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4hrs</div>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTV;
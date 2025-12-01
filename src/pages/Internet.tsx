import { Cable, Building2, Wifi } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Cable,
    title: "Leased Line",
    description: "Dedicated bandwidth with guaranteed uptime SLA. Static IP addresses for reliable business connectivity and enterprise-grade performance.",
  },
  {
    icon: Building2,
    title: "SME Internet",
    description: "Business-grade internet plans designed for small and medium enterprises. Secure, reliable connectivity with priority support.",
  },
  {
    icon: Wifi,
    title: "Broadband",
    description: "Fiber-to-the-home (FTTH) with unlimited data. WiFi 6 router support for high-speed residential connectivity.",
  },
];

const Internet = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            High-Speed Internet Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-slide-up">
            Lightning-fast, reliable internet connectivity for homes and businesses. From dedicated leased lines to fiber broadband, we deliver the speed you need.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Internet Connectivity Options</h2>
          <p className="section-subtitle">
            Tailored internet solutions for residential, commercial, and enterprise needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-lg">
              <div className="text-center mb-6">
                <Cable className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Leased Line</h3>
                <p className="text-sm text-muted-foreground">Enterprise Grade</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Dedicated bandwidth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">99.9% uptime SLA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Static IP included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Symmetrical speeds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-center mb-6">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">SME Internet</h3>
                <p className="text-sm text-muted-foreground">Business Grade</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Business-grade reliability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">High-speed connectivity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Optional static IP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Flexible bandwidth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Cost-effective plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-center mb-6">
                <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Broadband</h3>
                <p className="text-sm text-muted-foreground">Residential Grade</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">FTTH fiber connection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Unlimited data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">WiFi 6 router support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Multiple device support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Affordable pricing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Speed Plans */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Speed Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100</div>
                <p className="text-sm text-muted-foreground">Mbps</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">300</div>
                <p className="text-sm text-muted-foreground">Mbps</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500</div>
                <p className="text-sm text-muted-foreground">Mbps</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <p className="text-sm text-muted-foreground">Gbps+</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Custom bandwidth options available for enterprise requirements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internet;
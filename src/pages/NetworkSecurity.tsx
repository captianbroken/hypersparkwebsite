import { Shield, Lock, Network } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Shield,
    title: "Firewall & Cybersecurity",
    description: "Enterprise-grade firewall protection with malware and ransomware defense. Advanced content filtering and threat prevention.",
  },
  {
    icon: Lock,
    title: "VPN & Secure Connectivity",
    description: "Secure remote access for employees and branch-to-branch encrypted networking. Complete data protection during transmission.",
  },
  {
    icon: Network,
    title: "Internet Usage & Access Control",
    description: "Bandwidth management and user monitoring. Secure WiFi policies with comprehensive access control systems.",
  },
];

const NetworkSecurity = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Network Security Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-slide-up">
            Comprehensive cybersecurity infrastructure to protect your business from digital threats. Enterprise-grade security for peace of mind.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Complete Security Infrastructure</h2>
          <p className="section-subtitle">
            Multi-layered security solutions designed to protect your network, data, and operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Firewall Protection</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Next-Gen Firewall:</strong> Advanced threat detection and prevention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Intrusion Prevention:</strong> Real-time blocking of malicious traffic</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Content Filtering:</strong> Web filtering and application control</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">DDoS Protection:</strong> Defense against distributed denial-of-service attacks</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">VPN & Remote Access</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Secure Remote Access:</strong> Encrypted connections for remote employees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Site-to-Site VPN:</strong> Secure branch-to-branch connectivity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Multi-Factor Authentication:</strong> Enhanced security with 2FA/MFA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Access Logging:</strong> Complete audit trail of all connections</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Access Control */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Access Control & Monitoring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Bandwidth Management</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Traffic prioritization for critical applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>User-wise bandwidth allocation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Real-time usage monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Automated throttling controls</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">WiFi Security</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>WPA3 encryption standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Guest network isolation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Device authentication policies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Automatic threat blocking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Threat Prevention</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">256-bit</div>
              <p className="text-sm text-muted-foreground">Encryption</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">ISO</div>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;
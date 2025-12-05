import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Shield, FileCheck, Server, MonitorSmartphone } from "lucide-react";

const licenses = [
  {
    icon: MonitorSmartphone,
    title: "Microsoft 365 (M365)",
    description: "Complete productivity suite with Word, Excel, PowerPoint, Teams, and cloud services for businesses of all sizes.",
    features: ["Business Basic", "Business Standard", "Business Premium", "Enterprise Plans"],
  },
  {
    icon: FileCheck,
    title: "AutoCAD & Design Software",
    description: "Professional CAD software licensing for architects, engineers, and designers with full support.",
    features: ["AutoCAD", "AutoCAD LT", "Revit", "3ds Max", "Maya"],
  },
  {
    icon: Shield,
    title: "Antivirus Solutions",
    description: "Enterprise-grade antivirus and endpoint protection for comprehensive security.",
    features: ["Norton", "McAfee", "Kaspersky", "Bitdefender", "ESET"],
  },
  {
    icon: Server,
    title: "Server OS Licenses",
    description: "Windows Server and other server operating system licenses with proper CALs.",
    features: ["Windows Server", "SQL Server", "Exchange Server", "SharePoint"],
  },
  {
    icon: Award,
    title: "Enterprise Software",
    description: "All enterprise software licenses including Adobe Creative Cloud, VMware, and more.",
    features: ["Adobe Creative Cloud", "VMware", "SAP", "Oracle", "Custom Solutions"],
  },
];

const benefits = [
  "100% Genuine & Authorized Licenses",
  "Volume Licensing Discounts",
  "License Management Support",
  "Compliance Assistance",
  "Renewal Reminders",
  "Technical Support Included",
];

const SoftwareLicensing = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Software Licensing Solutions
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Authorized and genuine software licensing for enterprises. Get the right licenses at the best prices with full compliance support.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Our Licensing Portfolio</h2>
          <p className="section-subtitle">
            Comprehensive software licensing solutions for all your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div
                key={index}
                className="service-card p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--gradient-button)' }}>
                  <license.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{license.title}</h3>
                <p className="text-muted-foreground mb-4">{license.description}</p>
                <ul className="space-y-2">
                  {license.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Why Choose Us for Licensing</h2>
          <p className="section-subtitle">
            Your trusted partner for all software licensing needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="feature-card flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-secondary to-secondary/90">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Software Licenses?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us for the best prices on genuine software licenses with full support and compliance assistance.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareLicensing;

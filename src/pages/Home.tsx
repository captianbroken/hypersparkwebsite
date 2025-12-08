import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import {
  Camera,
  Home as HomeIcon,
  Wifi,
  Shield,
  Building2,
  Lock,
  Eye,
  Zap,
  Users,
  Award,
  HeadphonesIcon,
} from "lucide-react";

import logoDsr from "@/assets/logo-dsr.png";
import logoRev from "@/assets/logo-revolutionare.png";
import logoVasavi from "@/assets/logo-vasavi.png";

const services = [
  {
    icon: Camera,
    title: "CCTV Surveillance & AMC",
    description:
      "Advanced security camera systems with 24/7 monitoring, AI analytics, and comprehensive annual maintenance contracts.",
    href: "/cctv",
  },
  {
    icon: Building2,
    title: "Gated Community Technologies",
    description:
      "Complete solutions including intercom, access control, boom barriers, and broadband for residential complexes.",
    href: "/gated-community",
  },
  {
    icon: HomeIcon,
    title: "Home & Office Automation",
    description:
      "Smart automation systems for lighting, climate control, security, and energy management with voice control.",
    href: "/home-automation",
  },
  {
    icon: Wifi,
    title: "Internet Services",
    description:
      "High-speed leased lines, business broadband, and FTTH solutions with dedicated bandwidth and reliable connectivity.",
    href: "/internet",
  },
  {
    icon: Shield,
    title: "Network Security",
    description:
      "Enterprise-grade firewalls, VPN solutions, and comprehensive cybersecurity protection for your business.",
    href: "/network-security",
  },
  {
    icon: Lock,
    title: "Access Control Solutions",
    description:
      "Biometric, RFID, and smart locking systems for secure entry management and visitor tracking.",
    href: "/gated-community",
  },
  {
    icon: Award,
    title: "Software Licensing",
    description:
      "Authorized & genuine licensing solutions including Microsoft 365, AutoCAD, Antivirus, Server OS, and all enterprise software licenses.",
    href: "/software-licensing",
  },
];

const features = [
  {
    icon: Eye,
    title: "Zero-blind-spot security design",
    description: "Strategic camera placement ensuring complete coverage",
  },
  {
    icon: Award,
    title: "Premium hardware",
    description: "Professional installation with industry-leading equipment",
  },
  {
    icon: Zap,
    title: "AI-driven automation",
    description: "Intelligent monitoring and predictive systems",
  },
  {
    icon: Wifi,
    title: "High-speed connectivity",
    description: "Reliable internet with dedicated bandwidth",
  },
  {
    icon: Users,
    title: "Complete ecosystem",
    description: "All technology solutions under one roof",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 assistance",
    description: "Round-the-clock customer support & AMC services",
  },
];

const clients = [
  {
    name: "DSR Builders",
    url: "https://dsrbuilders.in/the-first-by-dsr.php",
    logo: logoDsr,
  },
  {
    name: "Revolutionare",
    url: "https://revolutionare.com/",
    logo: logoRev,
  },
  {
    name: "The Vasavi Group",
    url: "https://thevasavigroup.com/",
    logo: logoVasavi,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="hero-section relative overflow-hidden pt-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040517]/70 via-[#0A1A3A]/60 to-[#2B6CFF]/20"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="hero-title animate-fade-in">
            Smart. Secure. Connected.
          </h1>
          <p className="hero-subtitle animate-slide-up">
            Empowering homes, gated communities, and businesses with advanced
            security, automation, and high-speed connectivity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a href="#services">
              <Button size="lg" className="btn-hero">
                Explore Our Services
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-gradient-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">About HyperSpark</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              HyperSpark is a next-generation technology solutions company
              delivering advanced security, automation, and high-performance
              internet services for communities and enterprises. We specialize
              in creating intelligent, safe, and seamlessly connected
              environments using cutting-edge surveillance, smart automation,
              and enterprise-grade network infrastructure.
            </p>
            <p>
              Our team brings together expert engineering, premium-quality
              hardware, and AI-driven solutions to ensure unmatched reliability
              and performance. Whether it's gated communities, modern homes, IT
              parks, warehouses, or small businesses, we provide customized
              technology ecosystems that enhance comfort, strengthen security,
              and improve productivity.
            </p>
            <p className="font-semibold text-foreground">
              At HyperSpark, we go beyond installations — we design experiences,
              build intelligent systems, and power the future of smart living
              and secure environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your security,
            automation, and connectivity needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="animate-fade-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Why Choose HyperSpark</h2>
          <p className="section-subtitle">
            Industry-leading technology solutions with unmatched reliability and
            support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Clients Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Trusted By Leading Brands</h2>
          <p className="section-subtitle mb-12">
            Partnering with industry leaders to deliver exceptional technology
            solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="bg-gradient-to-br from-[#0A1A3A]/40 via-[#1a237e]/40 to-[#2B6CFF]/40
  rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300
  border border-primary/20 hover:border-primary flex items-center justify-center h-32 group-hover:scale-105"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-gray-700 group-hover:text-primary transition-colors">
                  {client.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get in touch with our experts to discuss your security, automation,
            and connectivity needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-hero">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

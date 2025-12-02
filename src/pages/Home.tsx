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
  Clock,
  Users,
  Award,
  HeadphonesIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const services = [
  {
    icon: Camera,
    title: "CCTV Surveillance & AMC",
    description: "Advanced security camera systems with 24/7 monitoring, AI analytics, and comprehensive annual maintenance contracts.",
  },
  {
    icon: Building2,
    title: "Gated Community Technologies",
    description: "Complete solutions including intercom, access control, boom barriers, and broadband for residential complexes.",
  },
  {
    icon: HomeIcon,
    title: "Home & Office Automation",
    description: "Smart automation systems for lighting, climate control, security, and energy management with voice control.",
  },
  {
    icon: Wifi,
    title: "Internet Services",
    description: "High-speed leased lines, business broadband, and FTTH solutions with dedicated bandwidth and reliable connectivity.",
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Enterprise-grade firewalls, VPN solutions, and comprehensive cybersecurity protection for your business.",
  },
  {
    icon: Lock,
    title: "Access Control Solutions",
    description: "Biometric, RFID, and smart locking systems for secure entry management and visitor tracking.",
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
    logo: "DSR",
  },
  {
    name: "Revolutionare",
    url: "https://revolutionare.com/",
    logo: "REV",
  },
  {
    name: "The Vasavi Group",
    url: "https://thevasavigroup.com/",
    logo: "TVG",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/30"></div>
        {/* Animated overlay */}
        <div className="absolute inset-0 animated-bg opacity-50"></div>
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="hero-title animate-fade-in">
            Smart. Secure. Connected.
          </h1>
          <p className="hero-subtitle animate-slide-up">
            Empowering homes, gated communities, and businesses with advanced security, automation, and high-speed connectivity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a href="#services">
              <Button size="lg" className="btn-hero">
                Explore Our Services
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="btn-hero-outline">
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
              HyperSpark is a next-generation technology solutions company delivering advanced security, automation, and high-performance internet services for communities and enterprises. We specialize in creating intelligent, safe, and seamlessly connected environments using cutting-edge surveillance, smart automation, and enterprise-grade network infrastructure.
            </p>
            <p>
              Our team brings together expert engineering, premium-quality hardware, and AI-driven solutions to ensure unmatched reliability and performance. Whether it's gated communities, modern homes, IT parks, warehouses, or small businesses, we provide customized technology ecosystems that enhance comfort, strengthen security, and improve productivity.
            </p>
            <p className="font-semibold text-foreground">
              At HyperSpark, we go beyond installations — we design experiences, build intelligent systems, and power the future of smart living and secure environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your security, automation, and connectivity needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Why Choose HyperSpark</h2>
          <p className="section-subtitle">
            Industry-leading technology solutions with unmatched reliability and support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
            Partnering with industry leaders to deliver exceptional technology solutions
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
                <div className="bg-white rounded-2xl p-12 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary flex items-center justify-center h-32 group-hover:scale-105">
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors">
                    {client.logo}
                  </span>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
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
            Get in touch with our experts to discuss your security, automation, and connectivity needs.
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
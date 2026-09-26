import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Seo } from "@/components/Seo";
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
  MonitorSmartphone,
} from "lucide-react";


import logoDsr from "@/assets/logo-dsr.png";
import logoRev from "@/assets/logo-revolutionare.png";
import logoVasavi from "@/assets/logo-vasavi.png";
import logoHomelink from "@/assets/logo-homelink.png";
import logoInfinityline from "@/assets/logo-infinityline.png";
import logoListenlights from "@/assets/logo-listenlights.svg";
import logoOptus from "@/assets/logo-optus.png";
import logoEquinix from "@/assets/logo-equinix.svg";
import logoSanofi from "@/assets/logo-sanofi.svg";
import logoAdaniConnex from "@/assets/logo-adaniconnex.svg";

import logoDSRInfra from "@/assets/logo-dsrinfra.png";


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
  {
    icon: MonitorSmartphone,
    title: "Fernocast Digital Signage",
    description:
      "Our own digital signage platform — upload content from a dashboard and play it on Android TV screens, with real-time status and offline playback.",
    href: "/fernocast",
  },
];

const features = [
  {
    icon: Eye,
    title: "Site survey before installation",
    description: "We assess the site first and design the system around it",
  },
  {
    icon: Award,
    title: "Structured cabling & clean execution",
    description: "Organized cable runs, racks and labeling, not shortcuts",
  },
  {
    icon: Zap,
    title: "Genuine hardware & licensed software",
    description: "Authorized equipment and software, not grey-market parts",
  },
  {
    icon: HeadphonesIcon,
    title: "AMC support after installation",
    description: "Maintenance contracts so systems keep working after setup",
  },
  {
    icon: Users,
    title: "Single vendor, one point of contact",
    description: "Security, automation and connectivity under one team",
  },
  {
    icon: Wifi,
    title: "Hyderabad-based local support",
    description: "A local team that can be on-site when you need us",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Survey",
    description: "We visit the site to understand layout, entry points, and requirements.",
  },
  {
    step: "02",
    title: "System Design",
    description: "We plan camera positions, cabling routes, and equipment based on the survey.",
  },
  {
    step: "03",
    title: "Installation",
    description: "Structured cabling, mounting, and configuration by our own technicians.",
  },
  {
    step: "04",
    title: "AMC & Support",
    description: "Ongoing maintenance, monitoring support, and repairs after installation.",
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
    style: { filter: "brightness(0.55) contrast(1.3)" },
  },
  {
    name: "The Vasavi Group",
    url: "https://thevasavigroup.com/",
    logo: logoVasavi,
  },
  {
    name: "Optus Cloud Communications",
    url: "https://optuscloudcommunications.com/",
    logo: logoOptus,
    
  },
  {
    name: "Homelink Broadband",
    url: "https://hlinknet.com/",
    logo: logoHomelink,
  },
  {
    name: "Infinity Line Solutions",
    url: "https://infinitylinesolutions.com/",
    logo: logoInfinityline,
  },
  {
    name: "Listen Lights",
    url: "https://listenlights.com/",
    logo: logoListenlights,
  },
  {
    name: "DSR Infra – Fortune Prime",
    url: "https://www.dsrinfra.com/property/fortune-prime/",
    logo: logoDSRInfra,
  },
  {
    name: "Equinix",
    url: "https://www.equinix.com/",
    logo: logoEquinix,
  },
  {
    name: "Sanofi",
    url: "https://www.sanofi.com/en",
    logo: logoSanofi,
  },
  {
    name: "Adani Connex",
    url: "https://www.adaniconnex.com/",
    logo: logoAdaniConnex,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="HyperSpark | Security, Automation & Network Infrastructure in Hyderabad"
        description="CCTV, access control, home automation, broadband, leased lines and network security installation and AMC support for homes, communities and businesses in Hyderabad."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        {/* Soft gradient accents instead of a photo/video — fades to transparent well before the clip edge so overflow-hidden never cuts a hard line */}
        <div
          className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.20) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-56 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--tertiary) / 0.14) 0%, transparent 65%)" }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Copy */}
            <div className="max-w-xl animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-sm font-semibold text-primary mb-6">
                Trusted by residential and business clients
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground mb-6">
                Security, Automation &amp; Network Infrastructure for Homes,
                Communities and Businesses in{" "}
                <span className="gradient-text">Hyderabad</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                HyperSpark designs, installs and maintains CCTV, access
                control, smart automation, broadband, leased lines and
                network security systems with reliable local support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#services">
                  <Button size="lg" className="btn-hero w-full sm:w-auto">
                    Explore Our Services
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-border text-foreground font-semibold hover:border-primary hover:text-primary rounded-xl px-8 py-6 text-lg"
                  >
                    Schedule Free Consultation
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    24/7 Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    AI Surveillance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Gigabit Connectivity
                  </span>
                </div>
              </div>
            </div>

            {/* What we bring together — real capabilities, no invented stats */}
            <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0 animate-scale-in">
              <div className="relative bg-card border border-border rounded-3xl shadow-2xl p-8">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                  What we bring under one roof
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Camera, label: "CCTV & Surveillance" },
                    { icon: HomeIcon, label: "Home Automation" },
                    { icon: Shield, label: "Network Security" },
                    { icon: Wifi, label: "High-Speed Internet" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-primary/5 rounded-2xl p-5 flex flex-col items-center text-center gap-3"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: "var(--gradient-button)" }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-gradient-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">About HyperSpark</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              HyperSpark is a Hyderabad-based technology solutions company. We
              install CCTV cameras, boom barriers, intercoms, home and office
              automation, leased lines, broadband and network security
              systems for apartments, gated communities, villas, offices, and
              warehouses.
            </p>
            <p>
              Our team handles the full process — site survey, system design,
              structured cabling and installation, and ongoing AMC support —
              so clients deal with one team instead of separate vendors for
              security, automation, and connectivity.
            </p>
            <p className="font-semibold text-foreground">
              Whether it's a single villa or a multi-tower gated community, we
              plan the system around the site first, then install and support
              it.
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
          <h2 className="section-title">Why Clients Choose HyperSpark</h2>
          <p className="section-subtitle">
            What we do differently on every installation
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

      {/* Process Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            From first site visit to ongoing support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg" style={{ background: "var(--gradient-button)" }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-container overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title pb-2">Trusted By Leading Brands</h2>
          <p className="section-subtitle mb-12 text-muted-foreground">
            Partnering with industry leaders to deliver exceptional technology
            solutions
          </p>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden marquee-mask">
            <div className="marquee-track animate-marquee-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="marquee-item flex-shrink-0">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="marquee-logo"
                      style={client.style}
                    />
                  </a>
                </div>
              ))}
            </div>
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
              Request a Site Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

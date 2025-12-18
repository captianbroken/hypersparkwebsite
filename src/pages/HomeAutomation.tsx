import { Fingerprint, Lightbulb, DoorOpen, Brain } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Fingerprint,
    title: "Smart Locking Systems",
    description: "Multi-mode access with fingerprint, PIN, RFID, and mobile app. Remote unlock capabilities with detailed guest access logs.",
  },
  {
    icon: Lightbulb,
    title: "Automation Systems",
    description: "Complete home automation for lighting, climate control, and energy management. Voice assistant integration with Google Home and Alexa.",
  },
  {
    icon: DoorOpen,
    title: "Automatic Gates",
    description: "Motorized sliding and swing gates with remote control. Motion sensors and safety features for seamless operation.",
  },
  {
    icon: Brain,
    title: "AI Automation Applications",
    description: "Predictive automation based on behavior patterns. Smart notifications and intelligent routine scheduling.",
  },
];

const HomeAutomation = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Smart Home Automation
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-slide-up">
            Transform your home into an intelligent living space with cutting-edge automation technology. Control, monitor, and optimize every aspect of your environment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title">Intelligent Automation Solutions</h2>
          <p className="section-subtitle">
            Comprehensive smart home systems designed for comfort, security, and energy efficiency
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Smart Lock Features</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Multiple Access Methods:</strong> Fingerprint, PIN code, RFID card, mobile app</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Remote Access:</strong> Unlock doors from anywhere using smartphone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Guest Access:</strong> Temporary codes and detailed access logs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Auto-Lock:</strong> Automatically secure doors after entry</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary">Home Automation Capabilities</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Lighting Control:</strong> Automated scheduling and dimming based on time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Climate Management:</strong> Smart thermostats with energy optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Voice Control:</strong> Integration with Alexa, Google Assistant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span><strong className="text-foreground">Energy Monitoring:</strong> Real-time consumption tracking and analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Features */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">AI-Powered Intelligence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A1A3A] to-[#2B6CFF] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Predictive Automation</h4>
                <p className="text-sm text-muted-foreground">
                  Learn your patterns and automate actions before you need them
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A1A3A] to-[#2B6CFF] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Behavioral Routines</h4>
                <p className="text-sm text-muted-foreground">
                  Smart scenes that adapt to your daily activities and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A1A3A] to-[#2B6CFF] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DoorOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Smart Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Intelligent alerts for security, energy usage, and system status
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAutomation;
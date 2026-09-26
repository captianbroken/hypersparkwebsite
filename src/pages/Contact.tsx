import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS is not configured.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We will get back to you soon.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 md:pt-[7.25rem]">
      <Seo
        title="Contact HyperSpark | Hyderabad"
        description="Get in touch with HyperSpark for a site visit, quote or consultation on CCTV, automation, and network connectivity in Hyderabad."
      />
      {/* Hero Section */}
      <section className="bg-muted/40 border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground animate-slide-up">
            Have questions about our services? We're here to help. Contact us
            today for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  We usually respond within 24 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  Your details are kept confidential
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Find Us</h3>
                        <p className="text-sm text-muted-foreground">
                          LB Nagar, Hyderabad, Telangana - 500068
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border h-48">
                      <iframe
                        title="HyperSpark location"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Rock+Homes+Road+No+2+Rock+Town+Colony+LB+Nagar+Hyderabad+Telangana+500068&output=embed"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:Info@hyperspark.in"
                        className="text-primary hover:underline"
                      >
                        Info@hyperspark.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a
                        href="tel:+919603165929"
                        className="text-primary hover:underline"
                      >
                        +91 96031 65929
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between gap-6">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-semibold text-foreground">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-semibold text-foreground">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-semibold text-foreground">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

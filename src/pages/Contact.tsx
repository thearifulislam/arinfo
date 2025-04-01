import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ExternalLink,
  Facebook,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import GoToTop from "../components/home/GoToTop"; // Import the GoToTop component

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real implementation, you would send the data to a backend or email service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-dark-card">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
              Contact Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk About Your Project
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Get in touch and let's create something amazing
              together.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name{" "}
                      <span className="text-[rgb(56,132,255)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-dark p-3 rounded-lg border border-white/10 focus:border-[rgb(56,132,255)] focus:outline-none focus:ring-1 focus:ring-[rgb(56,132,255)] text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address{" "}
                      <span className="text-[rgb(56,132,255)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark p-3 rounded-lg border border-white/10 focus:border-[rgb(56,132,255)] focus:outline-none focus:ring-1 focus:ring-[rgb(56,132,255)] text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject <span className="text-[rgb(56,132,255)]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-dark p-3 rounded-lg border border-white/10 focus:border-[rgb(56,132,255)] focus:outline-none focus:ring-1 focus:ring-[rgb(56,132,255)] text-white"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Brand Identity Design">
                        Brand Identity Design
                      </option>
                      <option value="Logo Design">Logo Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Image Editing">Image Editing</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message <span className="text-[rgb(56,132,255)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-dark p-3 rounded-lg border border-white/10 focus:border-[rgb(56,132,255)] focus:outline-none focus:ring-1 focus:ring-[rgb(56,132,255)] text-white resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="primary-button w-full justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgb(56,132,255)]/10 text-[rgb(56,132,255)] mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:acs.arifulislam@gmail.com"
                        className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                      >
                        acs.arifulislam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgb(56,132,255)]/10 text-[rgb(56,132,255)] mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+8801938434733"
                        className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                      >
                        +88 01938-434733
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgb(56,132,255)]/10 text-[rgb(56,132,255)] mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <address className="text-white/70 not-italic">
                        Khulna, Bangladesh
                      </address>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://linkedin.com/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-[rgb(56,132,255)]/5 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-[rgb(56,132,255)]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://behance.net/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-[rgb(56,132,255)]/5 transition-colors"
                      aria-label="Behance"
                    >
                      <ExternalLink className="h-5 w-5 text-[rgb(56,132,255)]" />
                      <span>Behance</span>
                    </a>
                    <a
                      href="https://instagram.com/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-[rgb(56,132,255)]/5 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-[rgb(56,132,255)]" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/arifulislamofficialprofile/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-[rgb(56,132,255)]/5 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-[rgb(56,132,255)]" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Working Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-white/70">
                        Saturday - Wednesday:
                      </span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Thursday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Friday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How quickly will you respond?",
                    answer:
                      "I typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate so in your message.",
                  },
                  {
                    question: "What information should I include?",
                    answer:
                      "For project inquiries, please include your project timeline, scope, and any specific requirements or examples that might help me understand your needs better.",
                  },
                  {
                    question: "Do you work with international clients?",
                    answer:
                      "Yes, I work with clients globally and can accommodate different time zones for meetings and communications.",
                  },
                  {
                    question: "What are your payment terms?",
                    answer:
                      "I typically require a 50% deposit to secure your project in my schedule, with the remaining balance due upon completion. Detailed payment terms will be outlined in the project proposal.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-xl p-6 border border-white/10 hover:border-[rgb(56,132,255)] hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -10 }} // Moves the card upward by 10px on hover
                    transition={{ duration: 0 }} // Instant animation (no delay)
                  >
                    <h3 className="text-xl font-bold mb-3 hover:text-[rgb(56,132,255)] transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-white/80">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Add the GoToTop button */}
      <GoToTop />
    </div>
  );
};

export default Contact;

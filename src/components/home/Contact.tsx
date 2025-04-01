import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "acs.arifulislam@gmail.com",
      link: "mailto:acs.arifulislam@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+880 1938-434733",
      link: "tel:+8801938434733",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Khulna, Bangladesh",
      link: "https://maps.google.com/?q=Khulna,Bangladesh",
    },
  ];

  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch to Discuss Your Next Project.
          </h2>
          <p className="text-white/70 md:text-lg">
            Ready to bring your vision to life? Let's start a conversation about
            your design needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
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
                  Email Address
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
                  Subject
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
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark p-3 rounded-lg border border-white/10 focus:border-[rgb(56,132,255)] focus:outline-none focus:ring-1 focus:ring-[rgb(56,132,255)] text-white resize-none"
                  placeholder="Tell me about your project..."
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
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgb(56,132,255)]/10 text-[rgb(56,132,255)] mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                      target={info.title === "Location" ? "_blank" : "_self"}
                      rel={
                        info.title === "Location" ? "noopener noreferrer" : ""
                      }
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
                  aria-label="Behance"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.803 5.296c.322 0 .615.025.901.076.285.051.533.14.744.267.21.127.376.301.497.523.121.222.182.494.182.816 0 .348-.071.644-.216.886-.142.242-.353.44-.632.591.381.114.67.31.863.591.19.279.288.619.288 1.017 0 .325-.069.61-.208.856-.139.245-.329.447-.572.607-.24.16-.522.278-.839.357-.318.079-.656.118-1.013.118H3V5.296h4.803zm-.233 3.574c.266 0 .487-.055.661-.166.172-.111.259-.304.259-.574 0-.152-.029-.276-.089-.374-.061-.098-.14-.175-.235-.23-.095-.055-.203-.094-.324-.113-.123-.02-.248-.028-.376-.028H4.505v1.485h3.065zm.147 3.574c.143 0 .28-.014.41-.042.132-.028.248-.073.351-.134.101-.061.182-.15.243-.268.063-.117.092-.266.092-.449 0-.357-.096-.611-.287-.764-.192-.152-.453-.228-.782-.228H4.505v1.885h3.212zM16.14 12.296c.303.234.661.36 1.072.36.334 0 .623-.082.866-.248.241-.166.411-.343.508-.531h1.669c-.268.845-.671 1.449-1.209 1.813-.537.364-1.188.546-1.948.546-.529 0-1.005-.086-1.428-.256-.425-.17-.784-.411-1.079-.719-.293-.309-.518-.677-.672-1.104-.153-.428-.23-.903-.23-1.426 0-.508.077-.977.23-1.4.153-.424.375-.791.665-1.104.291-.312.65-.557 1.072-.732.421-.175.9-.263 1.434-.263.585 0 1.091.108 1.52.324.429.215.784.5 1.065.853.281.354.487.748.621 1.183.133.436.178.877.134 1.324h-4.982c.039.504.193.888.463 1.13zm1.865-3.47c-.241-.204-.572-.307-.989-.307-.283 0-.524.055-.723.164-.198.11-.36.245-.487.41-.125.164-.215.328-.269.493-.054.16-.083.33-.083.432h3.044c-.118-.498-.332-.845-.493-1.05-.192-.247-.481-.381-.757-.486.276.104.517.245.757.344zM13.74 5h4.979v1.239H13.74V5zM21 .5H3C1.6.5.5 1.6.5 3v18c0 1.4 1.1 2.5 2.5 2.5h18c1.4 0 2.5-1.1 2.5-2.5V3c0-1.4-1.1-2.5-2.5-2.5z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

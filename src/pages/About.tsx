import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Clock,
  Users,
  Globe,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import me from "../assets/profile/me.png";
import GoToTop from "../components/home/GoToTop";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  // Skills with progress percentage
  const skills = [
    { name: "Brand Design", percentage: 95 },
    { name: "Logo Design", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Web Design", percentage: 80 },
    { name: "Print Design", percentage: 92 },
    { name: "Typography", percentage: 88 },
  ];

  // Counter stats
  const stats = [
    { icon: <Award />, value: "98+", label: "Awards Won" },
    { icon: <Clock />, value: "3+", label: "Years of Experience" },
    { icon: <Users />, value: "100+", label: "Happy Clients" },
    { icon: <Globe />, value: "200+", label: "Projects Completed" },
    { icon: <Coffee />, value: "200+", label: "Coffee Cups" },
  ];

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={fadeIn}
          >
            <div className="glass-card rounded-2xl p-4 border border-white/10 shadow-xl overflow-hidden">
              <img
                src={me}
                alt="Ariful Islam - Graphic Designer"
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-text-[rgb(56,132,255)]/30 via-transparent to-purple-500/30 rounded-2xl blur-3xl opacity-50 -z-10"></div>
          </motion.div>

          {/* About Me Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={fadeIn}
          >
            <div className="inline-flex items-center mb-6 px-3 py-1 rounded-[5px] bg-[rgb(56,132,255)]/10 border border-[rgb(56,132,255)]/20 text-white text-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-[rgb(56,132,255)] mr-2"></span>
              <span>ABOUT ME</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I'm Ariful Islam,<br />A Creative Designer.
            </h1>

            <p className="text-white/80 text-lg mb-8">
              I help brands thrive in the digital world by creating impactful
              designs that communicate their unique vision and connect with
              their audience. With over 3 years of experience, I've developed a
              deep understanding of design principles and how they intersect
              with business goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Ariful Islam</li>
                  <li>Khulna, Bangladesh</li>
                  <li>acs.arifulislam@gmail.com</li>
                  <li>+880 1938-434733</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Services Offered</h3>
                <ul className="space-y-2">
                  {[
                    {
                      name: "Brand Identity",
                      link: "/services/brand-identity",
                    },
                    { name: "Logo Design", link: "/services/logo-design" },
                    { name: "Business Card Design", link: "/services/ui-ux-design" },
                    { name: "Flyer Design", link: "/services/flyer-design" },
                    { name: "Brochure Design", link: "/services/brochure-design" },

                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[rgb(56,132,255)] mr-2 mt-0.5 flex-shrink-0" />
                      <Link
                        to={item.link}
                        className="text-white/80 hover:text-[rgb(56,132,255)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/contact" className="primary-button">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6 px-3 py-1 rounded-[5px] bg-[rgb(56,132,255)]/10 border border-[rgb(56,132,255)]/20 text-white text-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-[rgb(56,132,255)] mr-2"></span>
              <span>MY SKILLS</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Design Expertise & Technical Skills
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              With years of professional experience, I've honed my skills across
              various design disciplines, continuously evolving with industry
              trends and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold">{skill.name}</h3>
                  <span className="text-text-[rgb(56,132,255)] font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[rgb(56,132,255)] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Stats Counter Section */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="glass-card rounded-2xl p-10 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center text-text-[rgb(56,132,255)] mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education & Experience */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6 px-3 py-1 rounded-[5px] bg-[rgb(56,132,255)]/10 border border-[rgb(56,132,255)]/20 text-white text-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-[rgb(56,132,255)] mr-2"></span>
              <span>MY JOURNEY</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Education & Experience</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              My professional journey has equipped me with diverse experiences and skills that I bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="text-[rgb(56,132,255)] mr-3">
                  <Briefcase className="w-6 h-6" />
                </span>
                Work Experience
              </h3>

              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-10 before:w-[2px] before:bg-[rgb(56,132,255)]/30">
                {[
                  {
                    period: "2020 - 2021",
                    title: "Graphic Designer",
                    company: "Learning & Earning Development Project - LEDP",
                    description: "Worked on various design projects including branding, marketing materials, and digital content. Collaborated with cross-functional teams to deliver high-quality designs."
                  },

                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[rgb(56,132,255)] z-10"></div>
                    <span className="text-[rgb(56,132,255)] text-sm">{item.period}</span>
                    <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                    <p className="text-white/60 text-sm mb-2">{item.company}</p>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="text-[rgb(56,132,255)] mr-3">
                  <GraduationCap className="w-6 h-6" />
                </span>
                Education
              </h3>

              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-10 before:w-[2px] before:bg-[rgb(56,132,255)]/30">
                {[
                  {
                    period: "2024 - Running",
                    title: "BSC In CSE",
                    institution: "Northarn University Of Business And Technology",
                    description: "Specialized in web and mobile application design. Completed projects in user experience and interface design."
                  },

                  {
                    period: "2019 - 2023",
                    title: "Diploma In Computer Engineering",
                    institution: "BCMC College of Engineering & Technology, Jashore",
                    description: "Focused on software development and design principles. Completed projects in web development and graphic design."
                  },
                  {
                    period: "2002 - 2004",
                    title: "Secondary School Certificate (SSC)",
                    institution: "Kazir Pagla A.T. Institution, Kazir Pagla, Munshigang, Dhaka",
                    description: "Completed secondary education with a focus on science and mathematics."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[rgb(56,132,255)] z-10"></div>
                    <span className="text-[rgb(56,132,255)] text-sm">{item.period}</span>
                    <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                    <p className="text-white/60 text-sm mb-2">{item.institution}</p>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center glass-card rounded-2xl p-10 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-text-[rgb(56,132,255)]/10 via-purple-500/10 to-blue-500/10 z-0"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
              Let's Collaborate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions. Let's create something
              amazing together!
            </p>

            <Link to="/contact" className="primary-button text-lg px-8 py-4">
              Start a Project
            </Link>
          </div>
        </motion.section>
      </div>

      <Footer />

      {/* Back to Top Button */}
      <GoToTop />
    </div>
  );
};

// We need to create this icon since it's not in the standard lucide-react package
const GraduationCap = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const Briefcase = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default About;

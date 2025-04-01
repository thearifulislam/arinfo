
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  Code, 
  FileText, 
  Layers, 
  MousePointer, 
  Palette,
  Grid3X3,
  Printer,
  Mail
} from 'lucide-react';

// Component for animated circle backgrounds
const AnimatedCircle = ({ size, color, top, left, delay }) => (
  <motion.div 
    className={`absolute rounded-full ${size} ${color} bg-opacity-50 z-0`}
    style={{ top, left }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.7 }}
    transition={{ 
      duration: 1.5, 
      delay, 
      repeat: Infinity, 
      repeatType: "reverse" 
    }}
  />
);

// Project card component
const ProjectCard = ({ image, title, categories, delay }) => (
  <motion.div 
    className="glass-card rounded-xl overflow-hidden h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((category, idx) => (
          <span 
            key={idx} 
            className="text-xs bg-dark-lighter px-2 py-1 rounded-full text-white/70"
          >
            {category}
          </span>
        ))}
      </div>
      <Link to="#" className="text-button flex items-center text-sm">
        View details <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  </motion.div>
);

// Service card component with icon
const ServiceCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div 
    className="service-card"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      y: -5, 
      boxShadow: "0 15px 30px -10px rgba(57,255,20,0.2)",
      transition: { duration: 0.2 } 
    }}
  >
    <div className="text-neon mb-4">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </motion.div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Real Estate Logo",
      image: "https://placehold.co/600x450/1a1a1a/39FF14?text=Real+Estate",
      categories: ["Branding", "Logo", "Graphic Design"],
    },
    {
      id: 2,
      title: "Business Card Design",
      image: "https://placehold.co/600x450/1a1a1a/39FF14?text=Business+Card",
      categories: ["Business Card", "Brand", "Graphic Design"],
    },
    {
      id: 3,
      title: "Digital Brand Logo",
      image: "https://placehold.co/600x450/1a1a1a/39FF14?text=Digital+Brand",
      categories: ["Branding", "Logo", "Graphic Design"],
    },
    {
      id: 4,
      title: "Letterhead Design",
      image: "https://placehold.co/600x450/1a1a1a/39FF14?text=Letterhead",
      categories: ["Letterhead", "Graphic Design"],
    }
  ];

  const services = [
    {
      title: "Branding & Identity",
      description: "Create distinctive brand identities that resonate with your target audience and stand out in the market.",
      icon: Briefcase
    },
    {
      title: "Logo Design",
      description: "Craft memorable and impactful logos that visually communicate your brand's essence and values.",
      icon: Palette
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive and engaging user interfaces that enhance the user experience across digital platforms.",
      icon: MousePointer
    },
    {
      title: "Web Design",
      description: "Develop responsive and visually stunning websites that effectively showcase your brand online.",
      icon: Code
    },
    {
      title: "Print Design",
      description: "Create high-quality print materials from business cards to brochures that make a lasting impression.",
      icon: Printer
    },
    {
      title: "Email Templates",
      description: "Design custom email templates that boost engagement and conversion rates for your campaigns.",
      icon: Mail
    }
  ];

  const categories = [
    { value: 'all', label: 'All Works' },
    { value: 'branding', label: 'Branding' },
    { value: 'logo', label: 'Logo Design' },
    { value: 'business-card', label: 'Business Card' },
    { value: 'letterhead', label: 'Letterhead' }
  ];

  return (
    <div className="bg-dark min-h-screen relative overflow-hidden">
      {/* Animated background circles */}
      <AnimatedCircle size="w-64 h-64" color="bg-purple-500" top="5%" left="80%" delay={0.2} />
      <AnimatedCircle size="w-32 h-32" color="bg-neon" top="20%" left="10%" delay={0.5} />
      <AnimatedCircle size="w-48 h-48" color="bg-blue-500" top="70%" left="85%" delay={0.8} />
      <AnimatedCircle size="w-40 h-40" color="bg-pink-500" top="80%" left="15%" delay={1.1} />
      <AnimatedCircle size="w-24 h-24" color="bg-yellow-500" top="40%" left="90%" delay={1.4} />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-neon text-sm font-medium uppercase tracking-wider mb-2 inline-block">Dashboard</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to Your <span className="text-neon">Creative Portfolio</span> Dashboard
          </motion.h1>
          <motion.p 
            className="text-white/70 text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Manage your projects, explore your creative services, and connect with clients all in one place.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio" className="primary-button">
              View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="outline-button">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Projects Section */}
        <section className="mb-24">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-white/70 mt-2">Explore some of my best works</p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-2 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category, index) => (
                <button
                  key={category.value}
                  onClick={() => setActiveTab(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category.value
                      ? 'bg-neon text-dark shadow-lg shadow-neon/20'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                {...project}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/portfolio" className="outline-button">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <motion.div 
            className="text-center mb-14 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-neon text-sm font-medium uppercase tracking-wider mb-2 inline-block">Services</span>
            <h2 className="text-4xl font-bold mb-6">Creative Services I Offer</h2>
            <p className="text-white/70 md:text-lg">
              From brand identity to web design, I provide comprehensive creative solutions tailored to your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.section 
          className="glass-card rounded-2xl p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-purple-500/10 to-blue-500/10 z-0"></div>
          <div className="relative z-10">
            <span className="text-neon text-sm font-medium uppercase tracking-wider mb-2 inline-block">Let's Work Together</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, get in touch.
            </p>
            <Link to="/contact" className="primary-button text-lg px-8 py-4">
              Get in Touch
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;

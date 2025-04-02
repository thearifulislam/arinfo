import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brush, Layers, Edit3, Palette, Framer, Users, LineChart, Globe, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import GoToTop from "../components/home/GoToTop";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  link: string;
}

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const mainServices: Service[] = [
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      description: 'Create a cohesive visual identity that reflects your brand values and resonates with your target audience.',
      icon: <Layers className="h-8 w-8" />,
      features: [
        'Logo Design',
        'Visual Identity System',
        'Brand Guidelines',
        'Brand Collateral'
      ],
      link: '/services/brand-identity'
    },
    {
      id: 'logo-design',
      title: 'Logo Design',
      description: 'Get a distinctive, memorable logo that captures the essence of your brand and stands out from competitors.',
      icon: <Brush className="h-8 w-8" />,
      features: [
        'Custom Logo Creation',
        'Logo Variations',
        'Typography Selection',
        'Color Palette Development'
      ],
      link: '/services/logo-design'
    },
    {
      id: 'image-editing',
      title: 'Image Editing',
      description: 'Transform ordinary images into stunning visuals with professional retouching and manipulation services.',
      icon: <Edit3 className="h-8 w-8" />,
      features: [
        'Photo Retouching',
        'Background Removal',
        'Color Correction',
        'Composition Enhancement'
      ],
      link: '/services/image-editing'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Create intuitive, engaging user interfaces and experiences that delight users and drive conversion.',
      icon: <Palette className="h-8 w-8" />,
      features: [
        'User Interface Design',
        'User Experience Strategy',
        'Wireframing & Prototyping',
        'Usability Testing'
      ],
      link: '/services/ui-ux-design'
    }
  ];

  const additionalServices: Service[] = [
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      description: 'Bring your brand to life with dynamic animations and motion graphics for digital platforms.',
      icon: <Framer className="h-8 w-8" />,
      features: [
        'Logo Animation',
        'Social Media Animations',
        'Promotional Videos',
        'UI Animations'
      ],
      link: '/services/motion-graphics'
    },
    {
      id: 'social-media-design',
      title: 'Social Media Design',
      description: 'Stand out on social platforms with eye-catching, branded content that engages your audience.',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Post Templates',
        'Story Designs',
        'Profile Optimization',
        'Content Strategy'
      ],
      link: '/services/social-media-design'
    },
    {
      id: 'print-design',
      title: 'Print Design',
      description: 'Create impactful physical materials that communicate your brand message effectively.',
      icon: <LineChart className="h-8 w-8" />,
      features: [
        'Business Cards',
        'Brochures & Flyers',
        'Packaging Design',
        'Promotional Materials'
      ],
      link: '/services/print-design'
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Create visually stunning and functional websites that represent your brand in the digital space.',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Website UI Design',
        'Responsive Layouts',
        'Interactive Elements',
        'Design Systems'
      ],
      link: '/services/web-design'
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4 text-center">
            <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Design Services That<br />Drive Business Growth</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Comprehensive design solutions tailored to meet your unique business needs and help you stand out in today's competitive market.
            </p>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Design Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainServices.map((service) => (
                <div 
                  key={service.id}
                  className="service-card"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`text-[rgb(56,132,255)] mb-6 transition-all duration-300 ${hoveredService === service.id ? 'scale-110' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6 text-sm">{service.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start">
                        <span className="text-[rgb(56,132,255)] mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="text-button"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Additional Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service) => (
                <div 
                  key={service.id}
                  className="service-card"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`text-[rgb(56,132,255)] mb-6 transition-all duration-300 ${hoveredService === service.id ? 'scale-110' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6 text-sm">{service.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start">
                        <span className="text-[rgb(56,132,255)] mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="text-button"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">My Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We'll Work Together</h2>
              <p className="text-white/70 text-lg">
                A streamlined, collaborative approach designed to deliver exceptional results efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(56,132,255)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(56,132,255)]">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-white/70 text-sm">
                  We begin by understanding your business, goals, and vision through in-depth consultation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(56,132,255)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(56,132,255)]">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-white/70 text-sm">
                  I develop a creative strategy based on research and insights to guide the design process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(56,132,255)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(56,132,255)]">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-white/70 text-sm">
                  I create and refine design concepts, incorporating your feedback throughout the process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(56,132,255)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(56,132,255)]">04</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-white/70 text-sm">
                  I provide final assets in all required formats, with support for successful implementation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create designs that elevate your brand and connect with your audience.
            </p>
            <Link to="/contact" className="primary-button">
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Services;

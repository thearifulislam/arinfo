
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brush, Layers, Edit3, Palette, ArrowRight, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    {
      id: 1,
      title: 'Brand Identity Design',
      description: 'Create a cohesive visual identity that reflects your brand values and resonates with your target audience.',
      icon: <Layers className="h-8 w-8" />,
      link: '/services/brand-identity'
    },
    {
      id: 2,
      title: 'Marketing & Advertising Design',
      description: 'Get a distinctive, memorable logo that captures the essence of your brand and stands out from competitors.',
      icon: <Brush className="h-8 w-8" />,
      link: '/services/logo-design'
    },
    {
      id: 3,
      title: 'Packaging Design',
      description: 'Transform ordinary images into stunning visuals with professional retouching and manipulation services.',
      icon: <Edit3 className="h-8 w-8" />,
      link: '/services/image-editing'
    },
    {
      id: 4,
      title: 'Print & Publication Design',
      description: 'Create intuitive, engaging user interfaces and experiences that delight users and drive conversion.',
      icon: <Palette className="h-8 w-8" />,
      link: '/services/ui-ux-design'
    },
    {
      id: 5,
      title: 'Data Visualization & Infographic Design',
      description: 'Create intuitive, engaging user interfaces and experiences that delight users and drive conversion.',
      icon: <Palette className="h-8 w-8" />,
      link: '/services/ui-ux-design'
    },
    {
      id: 6,
      title: 'Merchandise & Apparel',
      description: 'Create intuitive, engaging user interfaces and experiences that delight users and drive conversion.',
      icon: <Palette className="h-8 w-8" />,
      link: '/services/ui-ux-design'
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">My Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovative Best Design <br/> and Development Services.</h2>
          <p className="text-white/70 md:text-lg">
            Expertly crafted design solutions to help your business stand out in today's competitive landscape.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              <Link 
                to={service.link}
                className="text-button text-white/70 hover:text-blue-400"
                aria-label={`Learn more about ${service.title}`}
              >
                <span className="flex items-center">
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link to="/services" className="outline-button transition-all duration-300 hover:bg-[rgb(41,119,244)] hover:text-white">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

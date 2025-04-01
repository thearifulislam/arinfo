import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  introduction: string;
  benefits: { title: string; description: string }[];
  subServices: { title: string; description: string }[];
  whyChooseMe: string[];
  faq: { question: string; answer: string }[];
  image: string;
}

const services: ServiceDetail[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Create a cohesive visual identity that reflects your brand values and resonates with your target audience.',
    introduction: 'A strong brand identity is the foundation of successful business communication. It goes beyond just a logo to encompass the entire visual language that represents your brand across all touchpoints. My comprehensive brand identity design service focuses on creating distinctive, strategic visual systems that capture your brand\'s essence and connect with your audience on an emotional level.',
    benefits: [
      {
        title: 'Brand Recognition',
        description: 'A cohesive brand identity helps your business stand out and become easily recognizable in a crowded marketplace.'
      },
      {
        title: 'Customer Trust',
        description: 'Professional branding builds credibility and trust with your audience, leading to stronger customer relationships.'
      },
      {
        title: 'Consistent Communication',
        description: 'A well-defined brand system ensures consistent messaging across all platforms and touchpoints.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Strategic branding positions your business effectively against competitors, highlighting your unique strengths.'
      }
    ],
    subServices: [
      {
        title: 'Brand Strategy',
        description: 'In-depth analysis of your business, audience, and market to develop a strategic foundation for your brand identity.'
      },
      {
        title: 'Logo Design & Visual Identity',
        description: 'Creation of a distinctive logo and complementary visual elements that form a cohesive brand system.'
      },
      {
        title: 'Color Palette & Typography',
        description: 'Selection of color schemes and typefaces that align with your brand personality and communication goals.'
      },
      {
        title: 'Brand Guidelines',
        description: 'Comprehensive documentation that ensures consistent application of your brand across all materials and platforms.'
      },
      {
        title: 'Brand Collateral',
        description: 'Design of business cards, letterheads, envelopes, and other essential brand applications.'
      }
    ],
    whyChooseMe: [
      'Strategic approach that aligns design with business objectives',
      'Focus on creating distinctive, memorable brand identities',
      'Comprehensive brand systems that work across all applications',
      'Collaborative process that ensures your brand vision is realized',
      'Attention to detail in every aspect of the design process'
    ],
    faq: [
      {
        question: 'What\'s included in a brand identity package?',
        answer: 'A standard brand identity package includes logo design (with variations), color palette, typography selection, and basic brand guidelines. Premium packages may include extended brand guidelines, multiple brand applications, social media templates, and more comprehensive strategic guidance.'
      },
      {
        question: 'How long does the brand identity process take?',
        answer: 'A comprehensive brand identity project typically takes 4-6 weeks, depending on the project scope and complexity. This timeframe includes the discovery phase, concept development, refinement, and finalization of all deliverables.'
      },
      {
        question: 'Do you work with established brands or just startups?',
        answer: 'I work with both new businesses creating their first brand identity and established companies looking to refresh or completely rebrand their visual identity. My approach is tailored to the specific needs and challenges of each client.'
      }
    ],
    image: 'https://placehold.co/800x600/1a1a1a/39FF14?text=Brand+Identity'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Get a distinctive, memorable logo that captures the essence of your brand and stands out from competitors.',
    introduction: 'Your logo is the cornerstone of your brand identity—a visual representation of your business that often forms the first impression for potential customers. I create thoughtfully crafted logos that convey your brand\'s personality, values, and positioning in a single, memorable mark. My design process blends aesthetic appeal with strategic thinking to ensure your logo performs effectively across all applications.',
    benefits: [
      {
        title: 'Brand Recognition',
        description: 'A distinctive logo helps your business become instantly recognizable to customers.'
      },
      {
        title: 'Professional Image',
        description: 'A well-designed logo communicates professionalism and attention to detail.'
      },
      {
        title: 'Brand Equity',
        description: 'A strong logo builds valuable brand equity over time as customers associate it with positive experiences.'
      },
      {
        title: 'Visual Consistency',
        description: 'Your logo forms the foundation for consistent visual branding across all channels.'
      }
    ],
    subServices: [
      {
        title: 'Professional Logo Design',
        description: 'Creation of a distinctive, versatile logo that effectively represents your brand.'
      },
      {
        title: 'Logo Variations',
        description: 'Development of alternative logo versions for different applications and contexts.'
      },
      {
        title: 'Custom Typography',
        description: 'Creation of unique letterforms or selection of appropriate typefaces for your logo.'
      },
      {
        title: 'Icon/Symbol Design',
        description: 'Design of a distinctive mark or icon that complements or stands alone from your wordmark.'
      },
      {
        title: 'Logo Guidelines',
        description: 'Documentation on proper logo usage, including spacing, sizing, and placement rules.'
      }
    ],
    whyChooseMe: [
      'Focus on creating unique, ownable logo designs',
      'Versatile designs that work across all applications',
      'Attention to detail in typography and execution',
      'Strategic approach that considers business objectives',
      'Multiple concepts and refinement rounds included'
    ],
    faq: [
      {
        question: 'How many logo concepts will I receive?',
        answer: 'Depending on your package, you\'ll receive 3-5 distinct logo concepts to choose from. We\'ll then refine your preferred concept through revision rounds until we achieve the perfect design.'
      },
      {
        question: 'Will my logo be unique and original?',
        answer: 'Yes, all logo designs are created custom for each client. I conduct thorough research to ensure your logo is original and doesn\'t infringe on existing designs. Each concept is crafted specifically for your brand.'
      },
      {
        question: 'What file formats will I receive for my final logo?',
        answer: 'You\'ll receive your logo in multiple file formats suitable for both print and digital use, including vector files (AI, EPS, SVG) and raster files (PNG, JPG, PDF) in various color formats (CMYK, RGB, and monotone versions).'
      }
    ],
    image: 'https://placehold.co/800x600/1a1a1a/39FF14?text=Logo+Design'
  },
  {
    id: 'image-editing',
    title: 'Image Editing',
    description: 'Transform ordinary images into stunning visuals with professional retouching and manipulation services.',
    introduction: 'Professional image editing can transform ordinary photos into compelling visual assets that enhance your brand and marketing materials. I provide expert retouching, manipulation, and enhancement services that elevate the quality and impact of your images while maintaining a natural, authentic look. From product photography to portraits, my image editing services help you present your brand in the best possible light.',
    benefits: [
      {
        title: 'Enhanced Visual Appeal',
        description: 'Professional editing dramatically improves the quality and impact of your images.'
      },
      {
        title: 'Brand Consistency',
        description: 'Consistent editing style across all images creates a cohesive brand aesthetic.'
      },
      {
        title: 'Attention to Detail',
        description: 'Expert retouching ensures even the smallest details present your products or services at their best.'
      },
      {
        title: 'Versatile Applications',
        description: 'Properly edited images can be used effectively across various marketing channels and materials.'
      }
    ],
    subServices: [
      {
        title: 'Product Retouching',
        description: 'Enhancement of product photos for e-commerce, catalogs, and marketing materials.'
      },
      {
        title: 'Portrait Retouching',
        description: 'Natural enhancement of portraits for professional headshots, team photos, and promotional materials.'
      },
      {
        title: 'Background Removal/Replacement',
        description: 'Clean extraction of subjects and placement on new backgrounds for versatile usage.'
      },
      {
        title: 'Color Correction & Enhancement',
        description: 'Adjustment of colors, contrast, and tone to achieve optimal visual impact.'
      },
      {
        title: 'Photo Manipulation & Compositing',
        description: 'Creation of composite images that blend multiple elements into seamless, realistic scenes.'
      }
    ],
    whyChooseMe: [
      'Natural, high-quality editing that enhances without looking artificial',
      'Attention to detail that ensures perfect results',
      'Understanding of brand aesthetics and consistent application',
      'Quick turnaround times for time-sensitive projects',
      'Experience across various industries and image types'
    ],
    faq: [
      {
        question: 'What types of images do you edit?',
        answer: 'I edit a wide range of images including product photography, portraits, real estate photography, food images, fashion photography, and marketing/promotional images. Each category receives specialized editing techniques appropriate for its purpose.'
      },
      {
        question: 'How quickly can you turn around edited images?',
        answer: 'Turnaround time depends on the quantity and complexity of images. Simple retouching for a small batch can be completed within 24-48 hours, while larger projects or complex manipulations may take 3-5 business days. Rush services are available for tight deadlines.'
      },
      {
        question: 'Do you offer batch editing for multiple images?',
        answer: 'Yes, I offer batch editing services with consistent styling applied across all images. This is particularly useful for e-commerce product photography, event photography, or creating a cohesive set of images for marketing campaigns.'
      }
    ],
    image: 'https://placehold.co/800x600/1a1a1a/39FF14?text=Image+Editing'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user interfaces and experiences that delight users and drive conversion.',
    introduction: 'Effective UI/UX design is the key to creating digital products that users love to interact with. My UI/UX design services focus on creating intuitive, accessible interfaces that not only look beautiful but also function seamlessly. I combine aesthetic design with user-centered thinking to create digital experiences that delight users while achieving your business objectives.',
    benefits: [
      {
        title: 'Improved User Satisfaction',
        description: 'Intuitive interfaces and streamlined experiences lead to happier, more engaged users.'
      },
      {
        title: 'Increased Conversion Rates',
        description: 'Strategic UX design removes friction from user journeys, improving conversion rates.'
      },
      {
        title: 'Reduced Development Costs',
        description: 'Well-planned designs minimize costly changes during development phases.'
      },
      {
        title: 'Brand Differentiation',
        description: 'Distinctive UI design helps your digital products stand out from competitors.'
      }
    ],
    subServices: [
      {
        title: 'User Interface Design',
        description: 'Creation of visually appealing, on-brand interfaces for websites, applications, and digital products.'
      },
      {
        title: 'User Experience Design',
        description: 'Design of intuitive user journeys and interaction patterns based on user research and best practices.'
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'Development of structural layouts and interactive prototypes to visualize and test concepts.'
      },
      {
        title: 'Responsive Design',
        description: 'Creation of interfaces that adapt seamlessly to different screen sizes and devices.'
      },
      {
        title: 'Design Systems',
        description: 'Development of comprehensive design systems that ensure consistency across digital products.'
      }
    ],
    whyChooseMe: [
      'Balance of aesthetic design and functional usability',
      'User-centered approach based on research and best practices',
      'Collaborative process that involves stakeholders throughout',
      'Knowledge of current design trends and standards',
      'Consideration of technical feasibility in all designs'
    ],
    faq: [
      {
        question: 'What\'s your UI/UX design process?',
        answer: 'My process includes: 1) Research & discovery to understand users and business goals, 2) Information architecture & user flows, 3) Wireframing to establish layout and structure, 4) UI design creating the visual interface, 5) Prototyping to demonstrate interactions, and 6) Handoff to developers with proper documentation.'
      },
      {
        question: 'Do you work with development teams?',
        answer: 'Yes, I collaborate closely with development teams to ensure designs are implemented accurately. I provide detailed specifications, style guides, and assets, and can work directly with developers to address questions during implementation.'
      },
      {
        question: 'Can you redesign an existing website or application?',
        answer: 'Absolutely. I handle redesign projects by first analyzing the current design, identifying pain points and opportunities for improvement, and then creating an enhanced design that addresses issues while maintaining familiarity for existing users.'
      }
    ],
    image: 'https://placehold.co/800x600/1a1a1a/39FF14?text=UI/UX+Design'
  }
];

const subServices = {
  'brand-identity-design': [
    {
      id: 'logo-design',
      title: 'Logo Design',
      description: 'Create a unique and memorable logo for your brand.',
      link: '/services/brand-identity-design/logo-design',
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'Develop comprehensive guidelines for consistent branding.',
      link: '/services/brand-identity-design/brand-guidelines',
    },
  ],
  'logo-design': [
    {
      id: 'custom-logo',
      title: 'Custom Logo Design',
      description: 'Get a custom logo tailored to your brand.',
      link: '/services/logo-design/custom-logo',
    },
    {
      id: 'logo-variations',
      title: 'Logo Variations',
      description: 'Create variations of your logo for different use cases.',
      link: '/services/logo-design/logo-variations',
    },
  ],
};

const ServiceDetails = () => {
  const { id, serviceId } = useParams<{ id: string, serviceId: string }>();
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call to fetch the service details
    const foundService = services.find(s => s.id === id);
    
    // Simulate API call delay
    setTimeout(() => {
      setService(foundService || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 rounded-full border-2 border-neon border-t-transparent animate-spin"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!service) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
            <p className="text-white/70 mb-8">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/services" className="outline-button">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subServiceList = subServices[serviceId || ''];

  if (!subServiceList) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold text-white">Service Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-dark-card">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center text-white/70 hover:text-neon transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-neon text-sm font-medium uppercase tracking-wider mb-2 inline-block">
                  Service
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                
                <p className="text-white/80 mb-8 text-lg">
                  {service.description}
                </p>
                
                <Link to="/contact" className="primary-button">
                  Get Started
                </Link>
              </div>
              
              <div>
                <div className="rounded-xl overflow-hidden glass-card border border-white/10">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-white/80 leading-relaxed text-lg mb-8">
                {service.introduction}
              </p>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-neon">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Sub-Services */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
              
              <div className="space-y-6">
                {service.subServices.map((subService, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{subService.title}</h3>
                    <p className="text-white/80">{subService.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Me */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Me</h2>
              
              <div className="glass-card rounded-xl p-8">
                <ul className="space-y-4">
                  {service.whyChooseMe.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-neon mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-white/80">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how my {service.title.toLowerCase()} services can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="primary-button">
                Contact Me
              </Link>
              <Link to="/portfolio" className="outline-button">
                View My Work
              </Link>
            </div>
          </div>
        </section>

        {/* Sub-Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-white">Sub-Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subServiceList.map((subService) => (
                <div key={subService.id} className="service-card">
                  <h3 className="text-xl font-bold mb-4 text-white">{subService.title}</h3>
                  <p className="text-white/70 mb-6">{subService.description}</p>
                  <Link to={subService.link} className="text-button">
                    <span className="flex items-center">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;

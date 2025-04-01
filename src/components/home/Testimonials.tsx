
import { StarIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'EcoTech Solutions',
      content: "Working with Ariful was a game-changer for our brand. His expertise in design and branding helped us completely revamp our visual identity. The feedback from our customers has been overwhelmingly positive, and we've seen a significant increase in brand recognition.",
      rating: 5,
      image: 'https://placehold.co/100x100/1a1a1a/39FF14?text=SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder & CEO',
      company: 'Spectrum Studios',
      content: "Ariful's attention to detail is unmatched. He took the time to understand our business goals and created a brand identity that perfectly captures our vision. His design work has helped us stand out in a competitive market and attract high-quality clients.",
      rating: 5,
      image: 'https://placehold.co/100x100/1a1a1a/39FF14?text=MC'
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      role: 'Product Owner',
      company: 'Innovate Labs',
      content: "I was amazed by Ariful's ability to transform our vague ideas into a compelling visual identity. He's not just a designer but a strategic partner who adds value beyond aesthetics. Our team and customers love the new design system he created.",
      rating: 5,
      image: 'https://placehold.co/100x100/1a1a1a/39FF14?text=AR'
    }
  ];

  return (
    <section className="section-padding" id="testimonials">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See What People Are Saying About My Work.</h2>
          <p className="text-white/70 md:text-lg">
            Don't just take my word for it – hear what my clients have to say about my design services and collaborative approach.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card p-8 rounded-xl">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-[rgb(56,132,255)] fill-[rgb(56,132,255)]' : 'text-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="mb-6">
                <p className="text-white/90 italic">"{testimonial.content}"</p>
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

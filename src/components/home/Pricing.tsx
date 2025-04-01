
import { CheckIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  isPopular?: boolean;
  features: PlanFeature[];
  buttonText: string;
  buttonLink: string;
}

const Pricing = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter Package',
      price: 275,
      period: 'per project',
      description: 'Perfect for startups and small businesses looking for basic branding.',
      features: [
        { feature: 'Basic Brand Identity', included: true },
        { feature: '3 Logo Concepts', included: true },
        { feature: '3 Rounds of Revisions', included: true },
        { feature: 'Source Files', included: true },
        { feature: 'Social Media Kit', included: false },
        { feature: 'Brand Guidelines', included: false },
        { feature: 'Priority Support', included: false },
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 725,
      period: 'per project',
      description: 'Comprehensive branding solution for established businesses seeking a premium identity.',
      isPopular: true,
      features: [
        { feature: 'Full Brand Identity', included: true },
        { feature: '5 Logo Concepts', included: true },
        { feature: '10 Rounds of Revisions', included: true },
        { feature: 'Source Files', included: true },
        { feature: 'Social Media Kit', included: true },
        { feature: 'Brand Guidelines', included: true },
        { feature: 'Priority Support', included: true },
      ],
      buttonText: 'Get Premium',
      buttonLink: '/contact'
    },
  ];

  return (
    <section className="section-padding bg-dark-card" id="pricing">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose the Right Plan for Your Project.</h2>
          <p className="text-white/70 md:text-lg">
            Transparent, value-driven pricing packages designed to meet different needs and budgets.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                plan.isPopular ? 'border-[rgb(56,132,255)]/30 relative transform hover:-translate-y-2' : 'border-white/10 hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[rgb(56,132,255)] text-dark-card text-xs font-bold px-4 py-1 rounded-bl-lg shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <CheckIcon className="h-5 w-5 text-[rgb(56,132,255)] mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XIcon className="h-5 w-5 text-white/30 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-white/80' : 'text-white/50 line-through'}>
                        {feature.feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.buttonLink}
                  className={plan.isPopular ? 'primary-button w-full justify-center' : 'outline-button w-full justify-center'}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom Quote Message */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Link to="/contact" className="text-button">
            Contact me for a personalized quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

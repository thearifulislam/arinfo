
import { LightbulbIcon, Paintbrush, Send, BarChart3 } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Process = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Research & Strategy',
      description: 'I start by understanding your business, target audience, and goals, laying the foundation for strategic design decisions.',
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      id: 2,
      title: 'Concept & Prototyping',
      description: 'I develop initial concepts based on research, refining them into prototypes that align with your brand vision.',
      icon: <LightbulbIcon className="h-8 w-8" />
    },
    {
      id: 3,
      title: 'Design & Development',
      description: 'I create polished designs with meticulous attention to detail, ensuring they meet the highest quality standards.',
      icon: <Paintbrush className="h-8 w-8" />
    },
    {
      id: 4,
      title: 'Delivery & Support',
      description: 'I deliver final assets in all required formats, with follow-up support to ensure successful implementation.',
      icon: <Send className="h-8 w-8" />
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">My Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Structured Workflow Behind Our Success.</h2>
          <p className="text-white/70 md:text-lg">
            A methodical approach that ensures every project is completed efficiently and exceeds expectations.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="glass-card relative p-8 rounded-xl hover-lift"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-3xl font-bold text-white/10">
                {step.id.toString().padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="text-[rgb(56,132,255)] mb-6">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.description}</p>
              
              {/* Connector Line (except for the last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[rgb(56,132,255)]/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

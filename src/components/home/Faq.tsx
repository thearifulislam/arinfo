
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const faqItems: FaqItem[] = [
    {
      question: "How long does a typical design project take to complete?",
      answer: "Project timelines vary based on complexity and scope. A standard logo design typically takes 1-2 weeks, while a comprehensive brand identity may take 3-4 weeks. I provide detailed timelines during our initial consultation to ensure expectations are clear from the start."
    },
    {
      question: "What is your revision policy?",
      answer: "Revisions are an important part of the design process. My packages include a specified number of revision rounds (typically 3 for Starter and 10 for Premium). Additional revisions beyond the included amount can be arranged at an hourly rate. I work closely with clients to ensure satisfaction within the allocated revision rounds."
    },
    {
      question: "How do you handle the final delivery of design files?",
      answer: "Final deliverables are provided in all industry-standard formats suitable for both digital and print use. This includes vector files (AI, EPS, SVG), raster files (JPG, PNG, PDF), and source files. All assets are organized in a clean folder structure with clear documentation, delivered via a secure download link."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, I provide 30 days of complimentary support after project completion to ensure smooth implementation of delivered designs. For clients with the Premium package, priority support is extended to 60 days. Long-term support and maintenance packages are also available for clients who need ongoing design assistance."
    }
  ];

  return (
    <section className="section-padding bg-dark-card" id="faq">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-neon text-sm font-medium uppercase tracking-wider mb-2 inline-block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need More Info? Here's What You're Looking For.</h2>
          <p className="text-white/70 md:text-lg">
            Answers to common questions about my design services and process.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl overflow-hidden border-white/10"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-neon hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Still have questions? I'm here to help.
          </p>
          <a href="mailto:arifulislam@gmail.com" className="text-button">
            Drop me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;

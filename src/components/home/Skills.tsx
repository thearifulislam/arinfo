import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "Adobe Photoshop", percentage: 90 },
    { name: "Adobe Illustrator", percentage: 95 },
    { name: "Figma", percentage: 90 },
    { name: "Adobe XD", percentage: 80 },
    { name: "Adobe Indesign", percentage: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
        } else {
          setIsVisible(false); // Reset animation when section goes out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <div>
            <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
              My Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design – My Essential Gear.
            </h2>

            <p className="text-white/80 mb-8">
              With expertise across industry-standard design tools and a keen
              eye for detail, I bring technical precision and creative flair to
              every project. My skill set enables me to tackle complex design
              challenges and deliver polished, professional results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-[rgb(56,132,255)] mb-2">
                  97+
                </h3>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <h3 className="text-4xl font-bold text-[rgb(56,132,255)] mb-2">
                  60+
                </h3>
                <p className="text-white/60 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-[rgb(56,132,255)]">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[rgb(56,132,255)] rounded-full transition-all duration-1000 ease-in-out`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${index * 0.5}s`, // Add delay for each skill
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
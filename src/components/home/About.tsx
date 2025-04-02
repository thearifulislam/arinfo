import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import me from "../../assets/profile/me.png";
import GoToTop from "../home/GoToTop"; // Import the GoToTop component

const About = () => {
  const achievements = [
    "3+ years of professional design experience",
    "Worked with 60+ clients worldwide",
    "Completed 97+ successful projects",
    "Featured on top design platforms",
  ];

  return (
    <div className="bg-dark min-h-screen">
      <section className="section-padding bg-dark-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={me}
                  alt="Ariful - Graphic Designer"
                  className="w-full object-cover"
                />

                {/* Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-dark p-4 rounded-lg glass-card border border-neon/20 animate-fade-in">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[rgb(56,132,255)]/50 text-white font-bold">
                      3+
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Years of</p>
                      <h4 className="text-xl font-bold">Experience</h4>
                    </div>
                  </div>
                </div>

                {/* Glow around image */}
                <div className="absolute -inset-1 bg-gradient-to-br from-neon/20 via-transparent to-purple-500/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
                About
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Turning Creative Ideas Into Meaningful Designs
              </h2>

              <p className="text-white/80 mb-6">
                I'm Ariful, a passionate graphic designer and brand identity
                specialist with over 4 years of professional experience. My
                design philosophy centers around creating clean, meaningful
                visuals that embody the essence of each brand I work with.
              </p>

              <p className="text-white/80 mb-8">
                I specialize in translating complex ideas into visually
                compelling designs that connect with audiences. My goal is to
                help businesses stand out through effective visual communication
                and strategic design thinking.
              </p>

              <ul className="space-y-3 mb-8">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[rgb(56,132,255)] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about" className="primary-button">
                More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add the GoToTop button */}
      <GoToTop />
    </div>
  );
};

export default About;

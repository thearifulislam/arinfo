import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import me from "../../assets/profile/me.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNmg0djFoLTR2LTF6bTAgMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6bS0xMi0yaDF2MWgtMXYtMXptMC0yaDF2MWgtMXYtMXptMiAwaDF2MWgtMXYtMXptLTItNGgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6TTMwIDIxdjFoLTF2LTFoMXptLTItMmgxdjFoLTF2LTF6TTI0IDE1djFoLTF2LTFoMXptLTIgMmgxdjFoLTF2LTF6TTQwIDE1djFoLTF2LTFoMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Experience badge */}
            <div className="inline-flex items-center mb-6 px-3 py-1 rounded-full bg-[rgb(56,132,255)]/10 border border-[rgb(56,132,255)]/20 text-white text-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-[rgb(56,132,255)] mr-2"></span>
              <span>3+ Years of Experience</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              I'm Ariful, A <br />
              <span className="text-[rgb(56,132,255)]">Graphic&nbsp;Designer.</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 animate-fade-in animate-delay-200">
              I specialize in crafting unique brand identities and delivering top-tier design solutions that help businesses stand out in today's competitive market.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Link to="/contact" className="primary-button">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="/assets/cv.pdf"
                download
                className="outline-button transition-all duration-300 hover:bg-[rgb(41,119,244)] hover:text-white"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 animate-fade-in animate-delay-400">
              {/* Stat 1 */}
              <div className="glass-card p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-[rgb(56,132,255)] mb-2">
                  90%
                </h3>
                <p className="text-white/70 text-sm">Faster Project Delivery</p>
              </div>

              {/* Stat 2 */}
              <div className="glass-card p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-[rgb(56,132,255)] mb-2">
                  90%
                </h3>
                <p className="text-white/70 text-sm">Client Satisfaction Rate</p>
              </div>

              {/* Stat 3 */}
              <div className="glass-card p-6 rounded-lg text-center col-span-2 sm:col-span-1">
                <h3 className="text-4xl font-bold text-[rgb(56,132,255)] mb-2">
                  97+
                </h3>
                <p className="text-white/70 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={me}
              alt="Ariful - Graphic Designer"
              className="rounded-2xl shadow-lg max-w-[76%] h-auto" // Set max-width to 76%
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
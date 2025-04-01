import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import playerlogo01 from "../../assets/logo-design/abstrack-mark/player-logo-1/1.jpg";
import wind from "../../assets/logo-design/lettermark-logo/letter-w/1/1.jpg";
import ZXON from "../../assets/logo-design/lettermark-logo/letter-z/1/1.jpg";
import arborSphere from "../../assets/logo-design/combination-mark/nature-logo/1/1.jpg";


interface Project {
  id: string;
  title: string;
  image: string;
  url: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Player Logo Design",
      image: playerlogo01,
      url: "/portfolio/Player-Logo-Design-1",
    },
    {
      id: "2",
      title: "Wind – A Symbol of Motion and Freedom",
      image: wind,
      url: "/portfolio/lettermark-W-Logo-1",
    },
    {
      id: "3",
      title: "ZXON – The Future of Innovation & Technology",
      image: ZXON,
      url: "/portfolio/lettermark-Z-Logo-1",
    },
    {
      id: "4",
      title: "ArborSphere: Cultivating Growth & Sustainability",
      image: arborSphere,
      url: "/portfolio/combination-mark-naturelogo-1",
    },
  ];

  return (
    <section className="section-padding bg-dark-card" id="portfolio">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 ">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Showcase of My Latest Projects and Creative Work.
          </h2>
          <p className="text-white/70 md:text-lg">
            Browse through my recent projects and see how I help brands stand
            out with unique design solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <Link
                  to={project.url}
                  className="text-xl font-bold mt-2 mb-2 group-hover:text-[rgb(56,132,255)] transition-colors block"
                >
                  {project.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="outline-button transition-all duration-300 hover:bg-[rgb(41,119,244)] hover:text-white"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
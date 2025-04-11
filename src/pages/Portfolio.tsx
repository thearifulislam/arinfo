import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GoToTop from "../components/home/GoToTop";
import { ArrowRight } from "lucide-react";

// Importing images (replace with your actual paths)
import wind from "../assets/logo-design/lettermark-logo/letter-w/1/1.jpg";
import ZXON from "../assets/logo-design/lettermark-logo/letter-z/1/1.jpg";
import playerlogo01 from "../assets/logo-design/abstrack-mark/player-logo-1/1.jpg";
import arborSphere1 from "../assets/logo-design/combination-mark/nature-logo/1/1.jpg";



// for business card
import minimalist1 from "../assets/business-card/minimalist/1/1.jpg";
import minimalist2 from "../assets/business-card/minimalist/2/1.jpg";



// for letterhead

import modern1 from "../assets/letterhead/modern/1/Modern Letterhead.jpg"
import minimalistandcorporate1 from "../assets/letterhead/minimalist-corporate/1/minimalist corporate letterhead.jpg"
import modernandboldcorporate1 from "../assets/letterhead/modern&bold-corporate/1/modern and bold corporate letterhead.jpg"
import modernandboldcorporate2 from "../assets/letterhead/modern&bold-corporate/2/modern and bold corporate letterhead-2.jpg"

interface Project {
  id: number;
  titles: string[];
  categories: string[];
  tags: string[];
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    titles: ["Wind – A Symbol of Motion and Freedom"],
    categories: ["logo design"],
    tags: ["Branding", "Logo Design", "Lettermark"],
    image: wind,
    slug: "lettermark-W-Logo-1",
  },
  {
    id: 2,
    titles: ["ZXON – The Future of Innovation & Technology"],
    categories: ["logo design"],
    tags: ["Logo Design", "Lettermark", "Branding"],
    image: ZXON,
    slug: "lettermark-Z-Logo-1",
  },
  {
    id: 3,
    titles: ["Player Logo Design"],
    categories: ["logo design"],
    tags: ["Logo Design", "Abstract Mark"],
    image: playerlogo01,
    slug: "player-logo-design",
  },
  {
    id: 4,
    titles: ["ArborSphere: Cultivating Growth & Sustainability"],
    categories: ["logo design"],
    tags: ["Logo Design", "Combination Mark"],
    image: arborSphere1,
    slug: "arborsphere-logo-design",
  },
  {
    id: 5,
    titles: ["Minimalist Business Card Design"],
    categories: ["business card"],
    tags: ["Business Card", "Minimalist"],
    image: minimalist1,
    slug: "minimalist-business-card-1",
  },
  {
    id: 6,
    titles: ["Minimalist Design, Maximum Impact"],
    categories: ["business card"],
    tags: ["Business Card", "Minimalist"],
    image: minimalist2,
    slug: "minimalist-business-card-2",
  },
  
  {
    id: 7,
    titles: ["Minimalist Design, Maximum Impact"],
    categories: ["Letterhead Design"],
    tags: ["Letterhead", "Minimalist"],
    image: modern1,
    slug: "modern-letterhead-1",
  },
  
  {
    id: 8,
    titles: ["Minimalist Design, Maximum Impact"],
    categories: ["Letterhead Design"],
    tags: ["Letterhead", "Minimalist"],
    image: minimalistandcorporate1,
    slug: "minimalist-corporate-letterhead-1",
  },

  {
    id: 9,
    titles: ["Minimalist Design, Maximum Impact"],
    categories: ["Letterhead Design"],
    tags: ["Letterhead", "Minimalist"],
    image: modernandboldcorporate1,
    slug: "minimalist-bold-corporate-letterhead-1",
  },

  {
    id: 10,
    titles: ["Minimalist Design, Maximum Impact"],
    categories: ["Letterhead Design"],
    tags: ["Letterhead", "Minimalist"],
    image: modernandboldcorporate2,
    slug: "minimalist-bold-corporate-letterhead-2",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on the search query
  const filteredProjects = searchQuery
    ? projects.filter((project) =>
        project.titles[0].toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;

  const filteredProjectsByCategory = filteredProjects.reduce((acc, project) => {
    project.categories.forEach((category) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(project);
    });
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Portfolio Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Creative Projects & Design Works
          </h1>
          <p className="text-white/70 md:text-lg">
            Explore my collection of carefully crafted design projects spanning
            various disciplines including branding, print design, and UI/UX
            design.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search portfolio subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 rounded-lg bg-dark-card text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[rgb(56,132,255)]"
          />
        </div>

        {/* No Results Found */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-white text-2xl font-bold mb-4">
              "{searchQuery}" Not Found
            </h2>
            <p className="text-white/70 text-lg">
              Sorry, we couldn't find any projects matching your search.
            </p>
          </div>
        ) : (
          /* Portfolio Categories */
          <div className="space-y-8">
            {Object.entries(filteredProjectsByCategory).map(
              ([category, projects]) => (
                <div
                  key={category}
                  className="bg-dark-card p-6 rounded-lg shadow-lg"
                >
                  {/* Highlighted Category Title */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white bg-[rgb(56,132,255)] px-4 py-2 rounded-md shadow-md">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h2>
                    <button
                      onClick={() =>
                        navigate(`/portfolio/category/${category}`)
                      }
                      className="text-sm font-medium text-white bg-[rgb(56,132,255)] px-4 py-2 rounded-md shadow-md hover:bg-[rgb(34,102,204)] transition-colors duration-300"
                    >
                      See More{" "}
                      <ArrowRight className="w-4 h-4 inline-block ml-1" />
                    </button>
                  </div>

                  {/* Display Projects */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.slice(0, 6).map((project) => (
                      <div key={project.id} className="portfolio-card group">
                        <Link to={`/portfolio/${project.slug}`}>
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.titles[0]}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </Link>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-white">
                            {project.titles[0]}
                          </h3>
                          <Link
                            to={`/portfolio/${project.slug}`}
                            className="text-sm font-medium text-white bg-[rgb(56,132,255)] px-4 py-2 rounded-md text-center block mt-4 hover:bg-[rgb(34,102,204)]"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default Portfolio;

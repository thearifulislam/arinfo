import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GoToTop from "../components/home/GoToTop";
import { ArrowRight } from "lucide-react";

// for logo
import playerlogo01 from "../assets/logo-design/abstrack-mark/player-logo-1/1.jpg";
import lettermarkw1 from "../assets/logo-design/lettermark-logo/letter-w/1/1.jpg";
import lettermarkz1 from "../assets/logo-design/lettermark-logo/letter-z/1/1.jpg";
import arborSphere1 from "../assets/logo-design/combination-mark/nature-logo/1/1.jpg";

// for business card

import minimalist1 from "../assets/business-card/minimalist/1/1.jpg";
import minimalist2 from "../assets/business-card/minimalist/2/1.jpg";

// for letterhead

import modern1 from "../assets/letterhead/modern/1/Modern Letterhead.jpg";
import minimalistandcorporate1 from "../assets/letterhead/minimalist-corporate/1/minimalist corporate letterhead.jpg";
import modernandboldcorporate1 from "../assets/letterhead/modern&bold-corporate/1/modern and bold corporate letterhead.jpg";
import modernandboldcorporate2 from "../assets/letterhead/modern&bold-corporate/2/modern and bold corporate letterhead-2.jpg";

// for facebook cover

import facebookcover1 from "../assets/social-cover/facebook-cover/1/1.jpg";

// for banner

import promotionalbanner1 from "../assets/banner/promotional/1/1.jpg";

// Example projects array (replace with your actual data or import it)
const projects = [
  {
    id: 1,
    titles: ["Wind – A Symbol of Motion and Freedom"],
    categories: ["logo design"],
    tags: ["Branding", "Logo Design", "Lettermark"],
    image: playerlogo01,
    slug: "lettermark-W-Logo-1",
  },
  {
    id: 2,
    titles: ["ZXON – The Future of Innovation & Technology"],
    categories: ["logo design"],
    tags: ["Logo Design", "Lettermark", "Branding"],
    image: lettermarkw1,
    slug: "lettermark-Z-Logo-1",
  },
  {
    id: 3,
    titles: ["Player Logo Design"],
    categories: ["logo design"],
    tags: ["Logo Design", "Abstract Mark"],
    image: lettermarkz1,
    slug: "player-logo-design",
  },
  {
    id: 4,
    titles: ["Minimalist Business Card Design"],
    categories: ["logo design"],
    tags: ["Business Card", "Minimalist"],
    image: arborSphere1,
    slug: "minimalist-business-card-1",
  },
  {
    id: 5,
    titles: ["Modern Letterhead Design"],
    categories: ["Business Card"],
    tags: ["Letterhead", "Modern"],
    image: minimalist1,
    slug: "modern-letterhead-1",
  },
  {
    id: 6,
    titles: ["Minimalist Business Card Design"],
    categories: ["Business Card"],
    tags: ["Business Card", "Minimalist"],
    image: minimalist2,
    slug: "minimalist-business-card-2",
  },
  {
    id: 7,
    titles: ["Minimalist Business Card Design"],
    categories: ["Letterhead Design"],
    tags: ["Business Card", "Minimalist"],
    image: modern1,
    slug: "minimalist-business-card-2",
  },
  {
    id: 8,
    titles: ["Minimalist Business Card Design"],
    categories: ["Letterhead Design"],
    tags: ["Business Card", "Minimalist"],
    image: minimalistandcorporate1,
    slug: "minimalist-business-card-2",
  },
  {
    id: 9,
    titles: ["Minimalist Business Card Design"],
    categories: ["Letterhead Design"],
    tags: ["Business Card", "Minimalist"],
    image: modernandboldcorporate1,
    slug: "minimalist-business-card-2",
  },
  {
    id: 10,
    titles: ["Minimalist Business Card Design"],
    categories: ["Letterhead Design"],
    tags: ["Business Card", "Minimalist"],
    image: modernandboldcorporate2,
    slug: "minimalist-business-card-2",
  },
  {
    id: 11,
    titles: ["Minimalist Business Card Design"],
    categories: ["Social Media Cover"],
    tags: ["Business Card", "Minimalist"],
    image: facebookcover1,
    slug: "minimalist-business-card-2",
  },
  {
    id: 12,
    titles: ["Minimalist Business Card Design"],
    categories: ["Banner"],
    tags: ["Business Card", "Minimalist"],
    image: promotionalbanner1,
    slug: "minimalist-business-card-2",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on the search query
  const filteredProjects = searchQuery
    ? projects.filter(
        (project) =>
          project.titles[0].toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.categories.some((category) =>
            category.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : projects;

  const filteredProjectsByCategory = filteredProjects.reduce((acc, project) => {
    project.categories.forEach((category) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(project);
    });
    return acc;
  }, {} as Record<string, typeof projects>);

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
                    <h2 className="text-lg md:text-xl font-bold text-white bg-[rgb(56,132,255)] px-4 py-2 rounded-md shadow-md whitespace-nowrap">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h2>
                    <Link
                      to={`/portfolio/category/${
                        category === "logo design"
                          ? "logo-design"
                          : category.toLowerCase().replace(/\s+/g, "-")
                      }`}
                      className="text-base font-medium text-white bg-[rgb(56,132,255)] px-6 py-3 rounded-md shadow-md hover:bg-[rgb(34,102,204)] transition-colors duration-300 flex items-center"
                    >
                      See More{" "}
                      <ArrowRight className="w-5 h-5 inline-block ml-2" />
                    </Link>
                  </div>

                  {/* Display Projects */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.slice(0, 6).map((project) => (
                      <div
                        key={project.id}
                        className="portfolio-card group bg-dark-card p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      >
                        <Link to={`/portfolio/${project.slug}`}>
                          <div className="aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                              src={project.image}
                              alt={project.titles[0]}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </Link>
                        <div className="mt-4">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {project.titles[0]}
                          </h3>

                          {/* Tags Section */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-sm font-medium text-white bg-blue-400 px-3 py-1 rounded-[5px]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={`/portfolio/${project.slug}`}
                            className="text-base font-medium text-white bg-[rgb(56,132,255)] px-6 py-3 rounded-[5px] text-center block mt-4 hover:bg-[rgb(34,102,204)] transition-colors duration-300"
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

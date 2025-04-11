import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GoToTop from "../components/home/GoToTop";
import { ArrowLeft } from "lucide-react";


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
    slug: "player-logo-design",
    titles: ["Player Logo Design"],
    categories: ["logo-design"],
    tags: ["branding", "creative", "design"],
    image: playerlogo01,
  },
  {
    id: 2,
    slug: "lettermark-w-logo",
    titles: ["Lettermark W Logo"],
    categories: ["logo-design"],
    tags: ["branding", "creative", "design"],
    image: lettermarkw1,
  },
  {
    id: 3,
    slug: "lettermark-z-logo",
    titles: ["Lettermark Z Logo"],
    categories: ["logo-design"],
    tags: ["branding", "creative", "design"],
    image: lettermarkz1,
  },
  {
    id: 4,
    slug: "nature-logo",
    titles: ["Nature Logo"],
    categories: ["logo-design"],
    tags: ["branding", "creative", "nature"],
    image: arborSphere1,
  },
  {
    id: 5,
    titles: ["Modern Letterhead Design"],
    categories: ["business-card"],
    tags: ["Letterhead", "Modern"],
    image: minimalist1,
    slug: "modern-letterhead-1",
  },
  {
    id: 6,
    titles: ["Minimalist Business Card Design"],
    categories: ["business-card"],
    tags: ["Business Card", "Minimalist", "Print"],
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

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [activeTag, setActiveTag] = useState("All Projects");

  // Filter projects by the selected category
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(category || "")
  );

  // Define sub-filters for specific categories
  const categorySpecificTags = {
    "logo-design": [
      "branding",
      "minimal",
      "modern",
      "creative",
      "modern logo",
      "minimal logo",
      "professional logo",
    ],
    "business-card": ["corporate", "print", "minimal"],
    "web-design": ["responsive", "ui/ux", "modern"],
    "letterhead-design": ["corporate", "branding", "stationery"],
  };

  // Get all unique tags, including category-specific tags
  const allTags = [
    "All Projects",
    ...(category && categorySpecificTags[category]
      ? categorySpecificTags[category]
      : [...new Set(filteredProjects.flatMap((project) => project.tags))]),
  ];

  // Filter projects by the active tag
  const displayedProjects =
    activeTag === "All Projects"
      ? filteredProjects
      : filteredProjects.filter((project) =>
          project.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
        );

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Back to Portfolio Button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>

        {/* Category Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects`
            : "Projects"}
        </h1>

        {/* Sub-Category Tags */}
        <div className="bg-dark-card p-6 rounded-[5px] shadow-lg mb-8">
          <div className="flex flex-wrap gap-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-[5px] text-sm font-medium ${
                  activeTag === tag
                    ? "bg-[rgb(56,132,255)] text-white" // Active button background color
                    : "bg-gray-700 text-white/70 hover:bg-gray-600 hover:text-white" // Inactive button background color
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        {displayedProjects.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <h2 className="text-white/50 text-2xl font-medium">
              No Projects Found
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div key={project.id} className="portfolio-card group rounded-[5px]">
                <Link to={`/portfolio/${project.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-[5px]">
                    <img
                      src={project.image}
                      alt={project.titles[0]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4 flex flex-col justify-between h-full">
                  <h3 className="text-lg font-bold text-white mb-4">
                    {project.titles[0]}
                  </h3>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="text-sm font-medium text-white bg-[rgb(56,132,255)] px-4 py-2 rounded-[5px] text-center block mt-auto hover:bg-[rgb(34,102,204)]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default CategoryPage;
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GoToTop from "../components/home/GoToTop";
import {
    ArrowLeft,
    Calendar,
    Clock,
    ExternalLink,
    Tag,
    Wrench,
  } from "lucide-react";

// Example projects array (replace with your actual data or import it)
const projects = [
  {
    id: 1,
    slug: "project-1",
    titles: ["Logo Design"],
    categories: ["logo-design"],
    tags: ["branding", "creative", "design"],
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    slug: "project-2",
    titles: ["Business Card"],
    categories: ["business-card"],
    tags: ["corporate", "minimal", "print"],
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    slug: "project-3",
    titles: ["Web Design"],
    categories: ["web-design"],
    tags: ["responsive", "modern", "ui/ux"],
    image: "/path/to/image3.jpg",
  },
  // Add more projects here
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [activeTag, setActiveTag] = useState("All Projects");

  // Filter projects by the selected category
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(category || "")
  );

  // Get all unique tags
  const allTags = [
    "All Projects",
    ...new Set(filteredProjects.flatMap((project) => project.tags)),
  ];

  // Filter projects by the active tag
  const displayedProjects =
    activeTag === "All Projects"
      ? filteredProjects
      : filteredProjects.filter((project) =>
          project.tags.includes(activeTag.toLowerCase())
        );

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Back to Project Section Button */}
        <Link
              to="/portfolio"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>

        {/* Category Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {category?.charAt(0).toUpperCase() + category?.slice(1)} Projects
        </h1>

        {/* Sub-Category Tags */}
        <div className="bg-dark-card p-6 rounded-[5px] shadow-lg mb-8">
          <div className="flex flex-wrap gap-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-[5px] text-sm font-medium ${
                  tag === "All Projects" || activeTag === tag
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
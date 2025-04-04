import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import GoToTop from "../components/home/GoToTop"; // Import the GoToTop component
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import playerlogo01 from "../assets/logo-design/abstrack-mark/player-logo-1/1.jpg";
import wind from "../assets/logo-design/lettermark-logo/letter-w/1/1.jpg";
import ZXON from "../assets/logo-design/lettermark-logo/letter-z/1/1.jpg";
import arborSphere from "../assets/logo-design/combination-mark/nature-logo/1/1.jpg";
import mpPlayer from "../assets/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import Uniflora from "../assets/logo-design/lettermark-logo/letter-u/1/1.jpg"
import zepeq from "../assets/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import player from "../assets/logo-design/abstrack-mark/player-logo/2/1.jpg";
import ecogrow from "../assets/logo-design/combination-mark/nature-logo/2/1.jpg";
import winnest from "../assets/logo-design/wordmark/real-estate/1/1.jpg"
import nexus from "../assets/logo-design/combination-mark/tech-logo/1/1.jpg"
import momentum from "../assets/logo-design/abstrack-mark/men-fashion/1/1.jpg"
import bloodDonation from "../assets/logo-design/combination-mark/health-care-logo/1/1.jpg"
import boldpath from "../assets/logo-design/brand-guidelines/letter-bp/1/1.jpg"



// Import business card images
import minimalist1 from "../assets/business-card/minimalist/1/1.jpg"
import minimalist2 from "../assets/business-card/minimalist/2/1.jpg"



// for lettehead

import modern1 from "../assets/letterhead/modern/1/Modern Letterhead.jpg"
import minimalistandcorporate1 from "../assets/letterhead/minimalist-corporate/1/minimalist corporate letterhead.jpg"
import modernandboldcorporate1 from "../assets/letterhead/modern&bold-corporate/1/modern and bold corporate letterhead.jpg"
import modernandboldcorporate2 from "../assets/letterhead/modern&bold-corporate/2/modern and bold corporate letterhead-2.jpg"
import modernandcorporate1 from "../assets/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg"
import modernanddynamiccorporate1 from "../assets/letterhead/modern&dynamic-corporate/1/modern and dynamic corporate letterhead.jpg"
import modernandgeometriccorporate1 from "../assets/letterhead/modern&geometric-corporate/1/modern and geometric corporate letterhead.jpg"
import modernandminimalistcorporate1 from "../assets/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg"



// for facebook cover

import facebookcover1 from "../assets/social-cover/facebook-cover/1/1.jpg"



// for banner
import promotionalbanner1 from "../assets/banner/promotional/1/1.jpg"



// Define the Project type
interface Project {
  id: number;
  titles: string[];
  categories: string[];
  subCategories: string[];
  tags: string[];
  image: string;
  slug: string;
}
// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeInOut = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSubFilter, setActiveSubFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isSubFilterVisible, setIsSubFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for dropdown visibility
  const searchBarRef = useRef<HTMLDivElement>(null); // Ref for the search bar
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      titles: ["Player Logo Design"],
      categories: ["abstract-mark", "logo-design"],
      subCategories: ["logo-design", "identity", "abstract-mark"],
      tags: ["Logo Design", "Abstract Mark"],
      image: playerlogo01,
      slug: "player-logo-design-1",
    },
    {
      id: 2,
      titles: ["Wind – A Symbol of Motion and Freedom"],
      categories: ["logo-design", "branding"],
      subCategories: ["lettermark", "identity"],
      tags: ["Branding", "Logo Design", "Lettermark"],
      image: wind,
      slug: "lettermark-W-Logo-1",
    },
    {
      id: 3,
      titles: ["ZXON – The Future of Innovation & Technology"],
      categories: ["logo-design", "branding"],
      subCategories: ["lettermark"],
      tags: ["Logo Design", "Lettermark", "Branding"],
      image: ZXON,
      slug: "lettermark-Z-Logo-1",
    },
    {
      id: 4,
      titles: ["ArborSphere: Cultivating Growth & Sustainability"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "combination-mark"],
      tags: ["Logo Design", "Combination Mark", "Branding"],
      image: arborSphere,
      slug: "combination-mark-naturelogo-1",
    },
    {
      id: 5,
      titles: ["Meloplay: Where Music Meets Play"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "lettermark"],
      tags: ["Logo Design", "Lettermark", "Branding"],
      image: mpPlayer,
      slug: "lettermark-mp-player-1",
    },
    {
      id: 6,
      titles: ["Uniflora: Dual-Orientation Botanical Elegance"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "lettermark"],
      tags: ["Logo Design", "Lettermark", "Branding"],
      image: Uniflora,
      slug: "lettermark-u-Logo-1",
    },
    {
      id: 7,
      titles: ["Minimalist Business Card Design: Embrace the Logo’s Essence"],
      categories: ["business-card"],
      subCategories: ["minimalist"],
      tags: ["Business Card", "Minimalist"],
      image: minimalist1,
      slug: "minimalist-business-card-1",
    },
    {
      id: 8,
      titles: ["Minimalist Design, Maximum Impact"],
      categories: ["business-card"],
      subCategories: ["minimalist"],
      tags: ["Business Card", "Minimalist"],
      image: minimalist2,
      slug: "minimalist-business-card-2",
    },
    {
      id: 9,
      titles: ["Zepeq: Modern & Bold Brand Identity"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "lettermark"],
      tags: ["Logo Design", "Lettermark", "Branding"],
      image: zepeq,
      slug: "lettermark-zpq-Logo-1",
    },
    {
      id: 10,
      titles: ["Player: Mobile Media Player Logo"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "abstract-mark"],
      tags: ["Logo Design", "Abstract Mark", "Branding"],
      image: player,
      slug: "abstrack-mark-player-logo-2",
    },
    {
      id: 11,
      titles: ["EcoGrow: Sustainable Living Brand"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "combination-mark"],
      tags: ["Logo Design", "Combination Mark", "Branding"],
      image: ecogrow,
      slug: "combination-mark-naturelogo-2",
    },
    {
      id: 12,
      titles: ["New WinNest Properties Logo Reveal"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "wormark"],
      tags: ["Logo Design", "Wormark", "Branding"],
      image: winnest,
      slug: "wormark-realestate-1",
    },
    {
      id: 13,
      titles: ["NEXUS – Where Innovation Meets Connection"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "combination-mark"],
      tags: ["Logo Design", "Combination Mark", "Branding"],
      image: nexus,
      slug: "combination-mark-techlogo-1",
    },
    {
      id: 14,
      titles: ["Modern Letterhead Design: Professional & Clean"],
      categories: ["letterhead"],
      subCategories: ["modern", "branding"],
      tags: ["Letterhead", "Modern"],
      image: modern1,
      slug: "modern-letterhead-1",
    },

    {
      id: 15,
      titles: ["Minimalist Corporate Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["minimalist&corporate", "branding"],
      tags: ["Letterhead", "Minimalist & Corporate"],
      image: minimalistandcorporate1,
      slug: "minimalist-corporate-letterhead-1",
    },
    {
      id: 16,
      titles: ["Modern & Bold Corporate Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["modern&bold-corporate",],
      tags: ["Letterhead", "Minimalist & Bold Corporate"],
      image: modernandboldcorporate1,
      slug: "minimalist-bold-corporate-letterhead-1",
    },
    {
      id: 17,
      titles: ["Clean & Impactful Letterhead"],
      categories: ["letterhead"],
      subCategories: ["modern&bold-corporate",],
      tags: ["Letterhead", "Minimalist & Bold Corporate"],
      image: modernandboldcorporate2,
      slug: "minimalist-bold-corporate-letterhead-2",
    },
    {
      id: 18,
      titles: ["Modern Corporate Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["modern&corporate",],
      tags: ["Letterhead", "Modern & Corporate"],
      image: modernandcorporate1,
      slug: "modern&corporate-letterhead-1",
    },
    {
      id: 19,
      titles: ["Clean Curve Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["modern&dynamic-corporate",],
      tags: ["Letterhead", "Modern & Dynamic Corporate"],
      image: modernanddynamiccorporate1,
      slug: "modern&dynamic-corporate-letterhead-1",
    },
    {
      id: 20,
      titles: ["Modern & Geometric Corporate Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["modern&geometric-corporate",],
      tags: ["Letterhead", "Modern & Geometric Corporate"],
      image: modernandgeometriccorporate1,
      slug: "modern&geometric-corporate-letterhead-1",
    },
    {
      id: 21,
      titles: ["Modern & Minimalist Corporate Letterhead Design"],
      categories: ["letterhead"],
      subCategories: ["modern&minimalist-corporate",],
      tags: ["Letterhead", "Modern & Minimalist Corporate"],
      image: modernandminimalistcorporate1,
      slug: "modern&minimalist-corporate-letterhead-1",
    },
    {
      id: 22,
      titles: ["The Momentum Menswear Identity"],
      categories: ["logo-design", "branding"],
      subCategories: ["branding", "abstract-mark", "lettermark"],
      tags: ["Logo Design", "Abstract Mark", "Branding"],
      image: momentum,
      slug: "abstract-mark-men-fashion-1",
    },
    {
      id: 23,
      titles: ["Professional Facebook Cover Pack"],
      categories: ["social-cover"],
      subCategories: ["facebook-cover"],
      tags: ["Social Cover", "Facebook Cover"],
      image: facebookcover1,
      slug: "facebook-cover-1",
    },

    {
      id: 24,
      titles: ["Winter Special: Super Sale is Here"],
      categories: ["banner"],
      subCategories: ["promotional"],
      tags: ["Banner", "Promotional"],
      image: promotionalbanner1,
      slug: "promotional-banner-1",
    },

    {
      id: 25,
      titles: ["Donate Blood, Save Lives"],
      categories: ["logo-design"],
      subCategories: ["medical", "combination-mark"],
      tags: ["Logo Design", "Combination Mark", "Medical"],
      image: bloodDonation,
      slug: "combination-mark-health-care-logo-1",
    },
    {
      id: 26,
      titles: ["BoldPath Brand Guidelines – Defining Our Identity"],
      categories: ["brand-guidelines", "logo-design", "branding"],
      subCategories: ["lettermark",],
      tags: ["Logo Design", "Brand Guidelines", "Lettermark"],
      image: boldpath,
      slug: "boldpath-brand-guidelines-1",
    },


  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "branding", label: "Branding" },
    { value: "print", label: "Print Design" },
    { value: "logo-design", label: "Logo Design" },
    { value: "business-card", label: "Business Card" },
    { value: "letterhead", label: "Letterhead" },
    { value: "social-cover", label: "Social-cover" },
    { value: "banner", label: "Banner" },
    { value: "brand-guidelines", label: "Brand Guidelines" },

  ];

  const subFilters = {
    "branding": [{ value: "identity", label: "Identity" }],
    print: [
      { value: "all", label: "All" },
      { value: "business-card", label: "Business Card" },
      { value: "stationery", label: "Stationery" },
    ],
    "logo-design": [
      { value: "all", label: "All" },
      { value: "abstract-mark", label: "Abstract Mark" },
      { value: "lettermark", label: "Lettermark" },
      { value: "combination-mark", label: "Combination Mark" },
      { value: "medical", label: "Medical" },
    ],
    "business-card": [
      { value: "all", label: "All" },
      { value: "minimalist", label: "Minimalist" },
    ],
    "letterhead": [
      { value: "all", label: "All" },
      { value: "minimalist&corporate", label: "Minimalist & Corporate" },
      { value: "modern&bold-corporate", label: "Modern & Bold-corporate" },
      { value: "modern&corporate", label: "Modern & Corporate" },
      { value: "modern&dynamic-corporate", label: "Modern & Dynamic Corporate" },
      { value: "modern&geometric-corporate", label: "Modern & Geometric Corporate" },
      { value: "modern&minimalist-corporate", label: "Modern & Minimalist Corporate" },
      { value: "modern", label: "Modern" },
    ],
    "social-cover": [
      { value: "all", label: "All" },
      { value: "facebook-cover", label: "Facebook Cover" },
    ],
    "banner": [
      { value: "all", label: "All" },
      { value: "promotional", label: "Promotional" },
    ],
    "brand-guidelines": [
      { value: "all", label: "All" },
      { value: "lettermark", label: "Lettermark" },
    ],

  };

  useEffect(() => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = filtered.filter((project) =>
        project.categories.includes(activeFilter)
      );
    }

    // Apply sub-category filter
    if (activeSubFilter !== "all") {
      if (activeSubFilter === "all") {
        // Show all projects within the selected category
        filtered = filtered.filter((project) =>
          project.categories.includes(activeFilter)
        );
      } else {
        filtered = filtered.filter((project) =>
          project.subCategories.includes(activeSubFilter)
        );
      }
    }

    // Apply search filter
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((project) =>
        project.titles.some((title) =>
          title.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.categories.some((category) =>
          category.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.subCategories.some((subCategory) =>
          subCategory.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.slug.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchQuery, activeFilter, activeSubFilter]);

  // Handle clicks outside the search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false); // Hide dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (filterValue: string) => {
    if (filterValue === "all") {
      // Reset all filters when "All Projects" is clicked
      setActiveFilter("all");
      setActiveSubFilter("all");
      setIsSubFilterVisible(false); // Hide subcategories
    } else if (activeFilter === filterValue) {
      // If the same filter is clicked, toggle sub-filter visibility
      setIsSubFilterVisible((prev) => !prev);
    } else {
      // Set new filter and show subcategories if available
      setActiveFilter(filterValue);
      setActiveSubFilter("all"); // Reset subcategory filter
      setIsSubFilterVisible(!!subFilters[filterValue]?.length); // Show subcategories if they exist
    }
  };

  const handleSearchFocus = () => {
    setIsDropdownVisible(true); // Show dropdown when search bar is focused
  };

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
        <div className="mb-8 relative" ref={searchBarRef}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus} // Show dropdown on focus
            className="w-full p-3 rounded-lg bg-dark-card text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[rgb(56,132,255)]"
          />
          {/* Suggestions Dropdown */}
          {isDropdownVisible && searchQuery.trim() !== "" && (
            <div className="absolute top-full left-0 w-full bg-dark-card rounded-lg shadow-lg mt-2 z-10">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/portfolio/${project.slug}`)} // Navigate to the details page
                    className="px-4 py-2 text-white/70 hover:bg-white/10 cursor-pointer"
                  >
                    {project.titles[0]} {/* Display the first title */}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-white/50">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-12">
          <motion.div
            className="flex flex-wrap gap-3 bg-dark-card p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterClick(filter.value)}
                className={`px-5 py-2 rounded-[5px] text-sm font-medium transition-all ${activeFilter === filter.value
                  ? "bg-[rgb(56,132,255)] text-white shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Sub Filters */}
          <AnimatePresence>
            {isSubFilterVisible &&
              activeFilter !== "all" &&
              subFilters[activeFilter] && (
                <motion.div
                  className="flex flex-wrap gap-3 mt-4 bg-dark-card p-4 rounded-lg shadow-lg"
                  variants={fadeInOut}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {subFilters[activeFilter].map((subFilter) => (
                    <button
                      key={subFilter.value}
                      onClick={() => setActiveSubFilter(subFilter.value)}
                      className={`px-5 py-2 rounded-[5px] text-sm font-medium transition-all ${activeSubFilter === subFilter.value
                        ? "bg-[rgb(56,132,255)] text-white shadow-lg"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                    >
                      {subFilter.label}
                    </button>
                  ))}
                </motion.div>
              )}
          </AnimatePresence>
        </div>

        {/* Conditional Rendering for "NO Items Found Here" */}
        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <h2 className="text-white/50 text-2xl font-medium">
              Project Not Found
            </h2>
          </div>
        ) : (
          /* Portfolio Grid */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-card group"
                variants={fadeInUp}
              >
                <Link to={`/portfolio/${project.slug}`}> {/* Wrap the image with Link */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.titles[0]} // Use the first title as alt text
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-dark-lighter px-2 py-1 rounded-[5px] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/portfolio/${project.slug}`} // Single link wrapping both title and "View Details"
                    className="group"
                  >
                    <h3 className="text-xl font-bold mt-2 mb-2 relative inline-block text-white group-hover:text-[rgb(56,132,255)] transition-colors">
                      {project.titles[0]} {/* Display the first title */}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[rgb(56,132,255)] transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <span className="text-sm font-medium text-[rgb(56,132,255)] flex items-center gap-1 transition-colors duration-300 group-hover:text-white">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
      {/* Add the GoToTop button */}
      <GoToTop />
    </div>
  );
};

export default Portfolio;

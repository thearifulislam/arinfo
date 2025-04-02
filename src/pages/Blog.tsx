import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Sample blog post data
const blogPosts = [
  {
    id: "design-principles-2024",
    title: "Key Design Principles for 2024",
    excerpt:
      "Explore the most important design principles that will dominate the creative industry in 2024.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=Design+Principles",
    author: "Alex Morgan",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends",
    year: 2024,
  },
  {
    id: "brand-identity-guide",
    title: "Complete Guide to Brand Identity",
    excerpt:
      "Learn how to create a consistent and memorable brand identity that resonates with your target audience.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=Brand+Identity",
    author: "Sarah Johnson",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Branding",
    year: 2024,
  },
  {
    id: "ux-design-tips",
    title: "10 UX Design Tips for Better Conversions",
    excerpt:
      "Implement these UX design strategies to improve user engagement and boost conversion rates.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=UX+Design+Tips",
    author: "Michael Chen",
    date: "January 12, 2023",
    readTime: "6 min read",
    category: "UX Design",
    year: 2023,
  },
];

// Blog post card component
const BlogPostCard = ({ post, delay = 0 }) => (
  <motion.div
    className="glass-card rounded-xl overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Link to={`/blog/${post.id}`} className="block">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" /> {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30"></span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>

        <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-white/70 flex items-center">
            <User className="h-3 w-3 mr-1" /> {post.author}
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-white/10">
            {post.category}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Filter blog posts based on the search query, category, and year
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;
    const matchesYear =
      selectedYear === "" || post.year === parseInt(selectedYear);

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>

          {/* Filter Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-card text-white/70 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[rgb(56,132,255)]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-dark-card text-white/70 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[rgb(56,132,255)]"
            >
              <option value="">All Categories</option>
              <option value="Design Trends">Design Trends</option>
              <option value="Branding">Branding</option>
              <option value="UX Design">UX Design</option>
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-dark-card text-white/70 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[rgb(56,132,255)]"
            >
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} delay={index * 0.1} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <p className="text-white/70 text-center mt-8">
              No blog posts found for your filters.
            </p>
          )}
        </div>
      </main>

    </>
  );
};

export default Blog;

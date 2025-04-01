import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Sample blog post data
const blogPosts = [
  {
    id: "design-principles-2024",
    title: "Key Design Principles for 2024",
    content:
      "Explore the most important design principles that will dominate the creative industry in 2024. This includes minimalism, bold typography, and the use of vibrant colors to create impactful designs.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=Design+Principles",
    author: "Alex Morgan",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends",
  },
  {
    id: "brand-identity-guide",
    title: "Complete Guide to Brand Identity",
    content:
      "Learn how to create a consistent and memorable brand identity that resonates with your target audience. This guide covers logo design, typography, color schemes, and more.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=Brand+Identity",
    author: "Sarah Johnson",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Branding",
  },
  {
    id: "ux-design-tips",
    title: "10 UX Design Tips for Better Conversions",
    content:
      "Implement these UX design strategies to improve user engagement and boost conversion rates. Topics include intuitive navigation, responsive design, and accessibility.",
    image: "https://placehold.co/800x500/1a1a1a/39FF14?text=UX+Design+Tips",
    author: "Michael Chen",
    date: "January 12, 2023",
    readTime: "6 min read",
    category: "UX Design",
  },
];

const BlogDetails = () => {
  const { blogDetails } = useParams<{ blogDetails: string }>();

  // Find the blog post by ID
  const blogPost = blogPosts.find((post) => post.id === blogDetails);

  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-white">Blog Not Found</h1>
          <p className="text-white/70">
            Sorry, the blog post you are looking for does not exist.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">{blogPost.title}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
            <span>
              <strong>Author:</strong> {blogPost.author}
            </span>
            <span>
              <strong>Date:</strong> {blogPost.date}
            </span>
            <span>
              <strong>Read Time:</strong> {blogPost.readTime}
            </span>
            <span className="px-2 py-1 rounded-full bg-white/10 text-xs">
              {blogPost.category}
            </span>
          </div>
          <p className="text-white/70 leading-relaxed">{blogPost.content}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;

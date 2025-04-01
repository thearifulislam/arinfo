import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import IntroLogo from "./components/animation/IntroLogo";
import GoToTop from "./components/home/GoToTop";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  // Reset loading state on refresh
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleIntroComplete = () => {
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading ? (
            <IntroLogo key="intro" onComplete={handleIntroComplete} />
          ) : (
            <BrowserRouter>
              <Layout>
                <GoToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/:id" element={<PortfolioDetails />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:blogDetails" element={<BlogDetails />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

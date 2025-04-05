import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-2xl font-bold mb-4">
              Ari<span className="text-[rgb(56,132,255)]">ful</span>
            </h3>
            <p className="text-white/70 mb-4 max-w-xs">
              Professional graphic designer & brand identity specialist with 3+
              years of experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[rgb(56,132,255)]/10 hover:text-[rgb(56,132,255)] transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/brand-identity"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/logo-design"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Logo Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/image-editing"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Image Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ui-ux-design"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/arifulislamofficialprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/arifulcreatorstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/arifulcreatorstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/arifulcreatorstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/arifulcreatorstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(56,132,255)] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-white/70">
                <span className="block text-sm text-white/50 mb-1">Email</span>
                <a
                  href="mailto:acs.arifulislam@gmail.com"
                  className="hover:text-[rgb(56,132,255)] transition-colors"
                >
                  acs.arifulislam@gmail.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="block text-sm text-white/50 mb-1">Location</span>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li>
                <Link to="/contact" className="text-button">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Ariful. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

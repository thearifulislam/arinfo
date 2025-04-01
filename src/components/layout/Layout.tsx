import { ReactNode } from "react";
import GoToTop from "../../pages/GoToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <GoToTop /> {/* GoToTop button included here */}
    </div>
  );
};

export default Layout;
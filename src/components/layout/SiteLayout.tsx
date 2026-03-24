import type { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface SiteLayoutProps extends PropsWithChildren {
  className?: string;
  showFooter?: boolean;
  showNavbar?: boolean;
}

const SiteLayout = ({
  children,
  className = "min-h-screen bg-background text-foreground",
  showFooter = true,
  showNavbar = true,
}: SiteLayoutProps) => {
  return (
    <div className={className}>
      {showNavbar ? <Navbar /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </div>
  );
};

export default SiteLayout;

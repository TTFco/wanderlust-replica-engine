import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteLayout className="min-h-screen bg-muted">
      <div className="flex min-h-[100svh] items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">404</h1>
          <p className="mb-4 text-lg text-muted-foreground sm:text-xl">
            Oops! Page not found
          </p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
};

export default NotFound;

import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "@/pages/Index";

const HimanchalPradesh = lazy(() => import("@/pages/HimanchalPradesh"));
const Ladakh = lazy(() => import("@/pages/Ladakh"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const TravelDream = lazy(() => import("@/pages/TravelDream"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const RouteFallback = () => (
  <div
    className="min-h-screen bg-background"
    aria-busy="true"
    aria-live="polite"
  />
);

const AppRouteContent = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/travel-dream" element={<TravelDream />} />
        <Route path="/himanchal-pradesh" element={<HimanchalPradesh />} />
        <Route path="/ladakh" element={<Ladakh />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppRouteContent />
    </BrowserRouter>
  );
};

export default AppRoutes;

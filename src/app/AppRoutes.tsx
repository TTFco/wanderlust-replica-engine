import { BrowserRouter, Route, Routes } from "react-router-dom";
import HimanchalPradesh from "@/pages/HimanchalPradesh";
import Index from "@/pages/Index";
import Ladakh from "@/pages/Ladakh";
import NotFound from "@/pages/NotFound";
import TravelDream from "@/pages/TravelDream";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/travel-dream" element={<TravelDream />} />
        <Route path="/himanchal-pradesh" element={<HimanchalPradesh />} />
        <Route path="/ladakh" element={<Ladakh />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

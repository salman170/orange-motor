import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Tata from "./pages/tata";
import Detail from "./pages/detail";
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";

const App = () => {
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tata" element={<Tata />} />
        <Route path="/vehicles/:id" element={<Detail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

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
import { Header } from "./layout/header";
import Footer from "./layout/Footer";
import Jeep from "./pages/Jeep";
import Jeep2 from "./pages/Jeep2";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tata" element={<Tata />} />
        <Route path="/jeep" element={<Jeep2 />} />
        <Route path="/jeep2" element={<Jeep />} />
        <Route path="/vehicles/:position/:id" element={<Detail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

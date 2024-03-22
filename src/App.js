import { Route, Routes } from "react-router-dom";

import "./App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Tata from "./pages/tata";
import Detail from "./pages/detail";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import { Header } from "./layout/header";
import Footer from "./layout/Footer";
import Jeep from "./pages/Jeep";
import Jeep2 from "./pages/Jeep2";
import ModelEnquiry from "./layout/ModelEnquiry";
import { useModelContext } from "./components/ModelProvider";
import HarleyDavidson from "./pages/HarleyDavidson";
import Kawasaki from "./pages/Kawasaki";
import Honda from "./pages/Honda";

const App = () => {
  const { openEnq, setOpenEnq, model } = useModelContext();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tata" element={<Tata />} />
        <Route path="/jeep" element={<Jeep2 />} />
        <Route path="/jeep2" element={<Jeep />} />
        <Route path="/harley-davidson" element={<HarleyDavidson />} />
        <Route path="/kawasaki" element={<Kawasaki />} />
        <Route path="/honda" element={<Honda />} />
        <Route path="/vehicles/:position/:id" element={<Detail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ModelEnquiry model={model} open={openEnq} setOpen={setOpenEnq} />
    </>
  );
};

export default App;

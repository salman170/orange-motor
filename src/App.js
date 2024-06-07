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
// import Jeep from "./pages/Jeep";
import Jeep2 from "./pages/Jeep2";
import ModelEnquiry from "./layout/ModelEnquiry";
import { useModelContext } from "./components/ModelProvider";
import HarleyDavidson from "./pages/HarleyDavidson";
import Kawasaki from "./pages/Kawasaki";
import Honda from "./pages/Honda";
import Gallery from "./pages/Gallery";
import Nissan from "./pages/Nissan";
import ThankYou from "./pages/ThankYou";
import { useEffect } from "react";

const App = () => {
  const { openEnq, setOpenEnq, model } = useModelContext();

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        await fetch("https://orange-backend-8wfp.onrender.com/test-me");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const startInterval = () => {
      fetchData(); // fetch immediately
      intervalId = setInterval(fetchData, 25000);
    };

    startInterval();

    return () => clearInterval(intervalId); // cleanup on component unmount
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tata" element={<Tata />} />
        <Route path="/jeep" element={<Jeep2 />} />
        {/* <Route path="/jeep2" element={<Jeep />} /> */}
        <Route path="/harley-davidson" element={<HarleyDavidson />} />
        <Route path="/kawasaki" element={<Kawasaki />} />
        <Route path="/honda" element={<Honda />} />
        <Route path="/nissan" element={<Nissan />} />
        <Route path="/vehicles/:position/:id" element={<Detail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ModelEnquiry model={model} open={openEnq} setOpen={setOpenEnq} />
    </>
  );
};

export default App;

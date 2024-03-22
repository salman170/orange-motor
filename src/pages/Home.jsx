import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import CountUp from "react-countup";
import { PiCarDuotone } from "react-icons/pi";
import { GiMechanicGarage } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import LeaderSlider from "../components/LeaderSlider";
import { brands } from "../json";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="">
      <div className="relative ">
        <Slider />
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          className="absolute left-0 w-full text-4xl bottom-[18%] z-20 text-secondary hidden md:block"
        >
          <div className="container mx-auto ">
            Welcome to <br />
            <span className="text-5xl lg:text-6xl">Orange Group</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 px-5 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-1 space-y-2 ">
          <img
            src={require("../assets/homepage/coreValues.jpg")}
            className="object-cover w-full rounded select-none h-80"
            alt=""
          />
          <h3 className="pt-4 text-2xl font-semibold">Our Vaues</h3>
          <p className="text-black/80">
            Through accountability, integrity, agility, trust, and empathy,
            manage your finances effectively. Follow a budgeting schedule,
            assess needs, create essential funds, and ensure financial
            stability.
          </p>
        </div>
        <div className="col-span-1 space-y-2">
          <img
            src={require("../assets/homepage/analyst.jpg")}
            className="object-cover w-full rounded h-80"
            alt=""
          />
          <h3 className="pt-4 text-2xl font-semibold">Our Vision</h3>
          <p className="text-black/80">
            We prioritize enriching experiences, valuing staff development and
            balance. Upholding customer enthusiasm, employee satisfaction,
            financial performance, market effectiveness, and continuous
            improvement drives our success.
          </p>
        </div>
        <div className="col-span-1 space-y-2">
          <img
            src={require("../assets/others/network.jpg")}
            className="object-cover w-full rounded h-80"
            alt=""
          />
          <h3 className="pt-4 text-2xl font-semibold">Our Mission</h3>
          <p className="text-black/80">
            We strive for industry leadership, offering quality automotive
            products and services, meeting changing customer needs. Fostering
            employee teamwork, integrity, and excellence, we set and improve
            standards for long-term market success.
          </p>
        </div>
      </div>

      <div className="py-10 bg-secondary">
        <div className="grid gap-8 px-5 mx-auto max-w-7xl md:grid-cols-3 ">
          <div className="col-span-1 text-center text-white">
            <h3 className="flex items-center justify-center text-4xl font-semibold ">
              <span className="text-5xl">
                <CountUp start={0} end={20} duration={5} />
              </span>
              +
            </h3>
            <p>Years of serving the Automobile</p>
          </div>

          <div className="col-span-1 text-center text-white">
            <h3 className="flex items-center justify-center text-4xl font-semibold ">
              <span className="text-5xl">
                <CountUp start={0} end={10} duration={5} />
              </span>
              +
            </h3>
            <p>Awards won for excellence in sales and service</p>
          </div>

          <div className="col-span-1 text-center text-white">
            <h3 className="flex items-center justify-center text-4xl font-semibold ">
              <span className="text-5xl">
                <CountUp start={0} end={100} duration={15} /> K
              </span>
              +
            </h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="px-5 mx-auto max-w-7xl">
        <h2 className="my-10 text-4xl font-semibold text-center">Our Brands</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
          <Link to="/tata">
            {" "}
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true" // Add data-aos-once="true" to trigger the animation once
              className="p-2 rounded bg-slate-100"
            >
              <img
                src={require("../assets/homepage/Tata Logo.png")}
                className="w-full h-28"
                alt=""
              />
              <p className="font-semibold text-center text-black/80">
                Tata Motors
              </p>
            </div>
          </Link>

          <Link to="/jeep">
            {" "}
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-once="true" // Add data-aos-once="true" to trigger the animation once
              className="p-2 rounded bg-slate-100"
            >
              <img
                src={require("../assets/homepage/jeep Logo.png")}
                className="w-full h-28"
                alt=""
              />
              <p className="font-semibold text-center text-black/80">Jeep</p>
            </div>
          </Link>
          <Link to="/honda">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true" // Add data-aos-once="true" to trigger the animation once
              className="p-2 rounded bg-slate-100"
            >
              <img
                src={require("../assets/homepage/Honda Logo.png")}
                className="w-full h-28"
                alt=""
              />
              <p className="font-semibold text-center text-black/80">Honda</p>
            </div>
          </Link>
          <Link to="/kawasaki">
            {" "}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true" // Add data-aos-once="true" to trigger the animation once
              className="p-2 rounded bg-slate-100"
            >
              <img
                src={require("../assets/homepage/Kawasaki Logo.png")}
                className="w-full h-28"
                alt=""
              />
              <p className="font-semibold text-center text-black/80">
                Kawasaki
              </p>{" "}
            </div>
          </Link>
          <Link to="/harley-davidson">
            {" "}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true" // Add data-aos-once="true" to trigger the animation once
              className="p-2 rounded bg-slate-100"
            >
              <img
                src={require("../assets/homepage/Harley Logo.png")}
                className="w-full h-28"
                alt=""
              />

              <p className="font-semibold text-center text-black/80">
                Harley Davidson
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-5 mx-auto my-20 max-w-7xl">
        <div className=" z-20 pt-0.5 bg-white ">
          {/* <div className="sticky z-20 pt-0.5 bg-white top-24"> */}
          <h2 className="my-10 text-4xl font-semibold text-center ">
            Our Timeline
          </h2>
          <div className="bg-secondary w-full h-[1px]"></div>
        </div>
        <div className="container relative hidden w-full h-full mx-auto md:block">
          {/* Vertical line */}
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full py-10 mx-auto vertical-line">
            <div className="text-xl font-light text-gray-300">YEAR</div>
            <div className="h-full  bg-secondary bg-opacity-20 w-0.5"></div>
            <div className="pt-4 font-light text-gray-300">
              Journey Continue
            </div>
          </div>
          <div className="relative h-full p-10 overflow-hidden wrap">
            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="flex items-center justify-between w-full mb-8 right-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-secondary">
                <h1 className="mx-auto text-4xl font-semibold ">2004</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-10 text-center text-white rounded-lg shadow-xl bg-secondary">
                <img
                  src={require("../assets/others/white_logo.png")}
                  alt=""
                  srcSet=""
                  className="h-12 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold uppercase">
                  Journey Started
                </h3>
                {/* <p className="mt-3 text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Left timeline */}
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#ffd15b]">
                <h1 className="mx-auto text-4xl font-semibold ">2005</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-gradient-to-bl from-[#ffd15b] to-[#d4a94c8c]">
                <img
                  src={require("../assets/homepage/chevrolet logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto"
                />
                <h3 className="mb-3 text-xl font-semibold uppercase ">
                  Cheverolet Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex items-center justify-between w-full mb-8 right-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#f8a03b]">
                <h1 className="mx-auto text-4xl font-semibold ">2009</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#f8a03b] ">
                <img
                  src={require("../assets/homepage/Honda Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-32 mx-auto"
                />
                <h3 className="mb-6 text-xl font-semibold uppercase">
                  Honda Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Left timeline */}
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#8fbae7]">
                <h1 className="mx-auto text-4xl font-semibold ">2017</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center  rounded-lg shadow-xl bg-[#8fbae7] ">
                <img
                  src={require("../assets/homepage/Tata Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-32 mx-auto"
                />
                <h3 className="mb-6 text-xl font-semibold uppercase">
                  Tata Motors Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex items-center justify-between w-full mb-8 right-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#f27146]">
                <h1 className="mx-auto text-4xl font-semibold ">2017</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#f27146] ">
                <img
                  src={require("../assets/homepage/Kawasaki Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto"
                />
                <h3 className="mb-3 text-xl font-semibold uppercase ">
                  Kawasaki Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Left timeline */}
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#555454]">
                <h1 className="mx-auto text-4xl font-semibold ">2017</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#d0cccd] ">
                <img
                  src={require("../assets/homepage/jeep Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto"
                />
                <h3 className="mb-3 text-xl font-semibold uppercase ">
                  Jeep Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>

            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex items-center justify-between w-full mb-8 right-timeline"
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 w-[70px] h-[70px] rounded-full  bg-white text-[#a781d1]">
                <h1 className="mx-auto text-4xl font-semibold ">2017</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#a781d1]">
                <img
                  src={require("../assets/homepage/Harley Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto"
                />
                <h3 className="mb-3 text-xl font-semibold uppercase ">
                  Harley Davidson Dealership
                </h3>
                {/* <p className="text-sm leading-snug tracking-wide text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container relative w-full h-full mx-auto md:hidden">
          {/* Vertical line */}
          <div className="absolute inset-0 flex flex-col items-center justify-center h-full py-10 mx-auto vertical-line">
            <div className="text-xl font-light text-gray-300">YEAR</div>
            <div className="h-full  bg-secondary bg-opacity-20 w-0.5"></div>
            <div className="pt-4 font-light text-gray-300">
              Journey Continue
            </div>
          </div>
          <div className="relative h-full px-2 py-10 overflow-hidden md:p-10 wrap">
            {/* Right timeline Journey Started */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="flex items-center w-full gap-4 mb-8 md:justify-between right-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-secondary">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2004
                </h1>
              </div>
              <div className="order-1 w-full px-6 py-8 text-center text-white rounded-lg shadow-xl md:py-10 md:w-5/12 bg-secondary">
                <img
                  src={require("../assets/others/white_logo.png")}
                  alt=""
                  srcSet=""
                  className="h-12 mx-auto mb-4"
                />
                <h3 className="font-semibold uppercase md:text-xl">
                  Journey Started
                </h3>
              </div>
            </div>

            {/* Left timeline Cheverolet Dealership */}
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full gap-4 mb-8 left-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#ffd15b]">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2005
                </h1>
              </div>
              <div className="order-1 md:w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-gradient-to-bl from-[#ffd15b] to-[#d4a94c8c] w-full">
                <img
                  src={require("../assets/homepage/chevrolet logo.png")}
                  alt=""
                  srcSet=""
                  className="h-16 mx-auto mb-4 md:h-24"
                />
                <h3 className="font-semibold uppercase md:text-xl">
                  Cheverolet Dealership
                </h3>
              </div>
            </div>

            {/* Right timeline  Honda Dealership */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="flex items-center w-full gap-4 mb-8 md:justify-between right-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#f8a03b] ">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2009
                </h1>
              </div>
              <div className="order-1 px-6 py-4 text-center text-white rounded-lg shadow-xl md:py-10 md:w-5/12 bg-[#f8a03b] w-full ">
                <img
                  src={require("../assets/homepage/Honda Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto mb-4 md:h-12"
                />
                <h3 className="font-semibold uppercase md:text-xl">
                  Honda Dealership
                </h3>
              </div>
            </div>

            {/* Left timeline  Tata Motors Dealership*/}

            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full gap-4 mb-8 left-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#8fbae7]">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2017
                </h1>
              </div>
              <div className="order-1 md:w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#8fbae7] w-full">
                <img
                  src={require("../assets/homepage/Tata Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-24 mx-auto md:h-24"
                />
                <h3 className="pb-4 -mt-4 font-semibold uppercase md:text-xl">
                  Tata Motors Dealership
                </h3>
              </div>
            </div>

            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="flex items-center w-full gap-4 mb-8 md:justify-between right-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#f27146]">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2017
                </h1>
              </div>
              <div className="order-1 px-6 py-4 text-center text-white rounded-lg shadow-xl md:py-10 md:w-5/12 bg-[#f27146] w-full">
                <img
                  src={require("../assets/homepage/Kawasaki Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-16 mx-auto md:h-24 "
                />
                <h3 className="mb-3 font-semibold uppercase md:text-xl ">
                  Kawasaki Dealership
                </h3>
              </div>
            </div>

            {/* Left timeline */}

            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="flex flex-row-reverse items-center justify-between w-full gap-4 mb-8 left-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#555454]">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2017
                </h1>
              </div>
              <div className="order-1 md:w-5/12 px-6 py-4 text-center text-white rounded-lg shadow-xl bg-[#d0cccd] w-full">
                <img
                  src={require("../assets/homepage/jeep Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-20 mx-auto mb-4 md:h-24"
                />
                <h3 className="font-semibold uppercase md:text-xl">
                  Jeep Dealership
                </h3>
              </div>
            </div>

            {/* Right timeline */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="flex items-center w-full gap-4 mb-8 md:justify-between right-timeline md:gap-0"
            >
              <div className="order-1 w-0 md:w-5/12"></div>
              <div className="z-10 flex items-center order-1 md:w-[70px] md:h-[70px] rounded-full  bg-white text-[#a781d1]">
                <h1 className="mx-auto text-2xl font-semibold lg:text-4xl ">
                  2017
                </h1>
              </div>
              <div className="order-1 px-6 py-4 text-center text-white rounded-lg shadow-xl md:py-10 md:w-5/12 bg-[#a781d1] w-full">
                <img
                  src={require("../assets/homepage/Harley Logo.png")}
                  alt=""
                  srcSet=""
                  className="h-16 mx-auto md:h-24"
                />
                <h3 className="mb-3 font-semibold uppercase md:text-xl ">
                  Harley Davidson Dealership
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="px-5 mx-auto my-20 max-w-7xl">
        <h2 className="my-10 text-4xl font-semibold text-center">
          Our Services
        </h2>
        <div className="bg-secondary w-full h-[1px]"></div>
        <div className="grid grid-cols-1 gap-8 my-10 md:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div className="w-full col-span-1 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center bg-primary">
                <PiCarDuotone className="text-6xl text-secondary" />
              </div>
              <div className="col-span-2 ">
                <h4 className="pb-2 text-2xl font-semibold">Sale</h4>
                <p className="text-sm sm:text-base">
                  Orange Auto Group stands out in automotive sales, offering
                  unparalleled customer service and a diverse range of quality
                  vehicles.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 ">
            <div className="grid grid-cols-3 gap-4 ">
              <div className="flex items-center justify-center bg-secondary">
                <GiMechanicGarage className="text-6xl " />
              </div>
              <div className="col-span-2 ">
                <h4 className="pb-2 text-2xl font-semibold">Service</h4>
                <p className="text-sm sm:text-base">
                  Orange Auto Group excels in car service, providing top-notch
                  maintenance and repair with a commitment to customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center bg-secondary">
                <img
                  src={require("../assets/homepage/trade.png")}
                  alt=""
                  srcSet=""
                  className="h-20"
                />
              </div>
              <div className="col-span-2 ">
                <h4 className="pb-2 text-2xl font-semibold">Used Car</h4>
                <p className="text-sm sm:text-base">
                  Orange Auto Group specializes in certified pre-owned cars,
                  ensuring quality, reliability, and peace of mind for every
                  customer.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center bg-primary">
                <BsShieldCheck className="text-5xl text-secondary" />
              </div>
              <div className="col-span-2 ">
                <h4 className="pb-2 text-2xl font-semibold">Insurance</h4>
                <p className="text-sm sm:text-base">
                  Orange Auto Group simplifies car insurance renewals, offering
                  hassle-free, trustworthy options to keep you securely on the
                  road.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center bg-secondary">
                <img
                  src={require("../assets/homepage/assessories.png")}
                  alt=""
                  srcSet=""
                  className="h-20"
                />
              </div>
              <div className="col-span-2 ">
                <h4 className="pb-2 text-2xl font-semibold">Accessories</h4>
                <p className="text-sm sm:text-base">
                  Orange Auto Group offers a wide range of genuine car
                  accessories, enhancing your vehicle's functionality and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Leaders */}
      <div className="px-5 mx-auto my-20 max-w-7xl">
        <h2 className="my-10 text-4xl font-semibold text-center">
          Our Leaders
        </h2>
        <div className="bg-secondary w-full h-[1px]"></div>

        <div className="w-full my-10 space-y-6 ">
          <LeaderSlider />
          {/* <div className="grid p-10 bg-gray-100 md:grid-cols-3 group ">
            <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>

            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="h-0.5 bg-secondary mb-6 group-hover:w-[100%] w-[50%] duration-300"></div>
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
                MR. Y. RAMAKOTESWARA RAO
              </div>
              <div className="text-xl ">
                MBA in Marketing & Management (Pune) <br />
                Managing Director Dealer Principal
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
          </div>
          <div className="grid p-10 bg-gray-100 md:grid-cols-3 group ">
            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="h-0.5 bg-secondary mb-6 group-hover:w-[100%] w-[50%] duration-300"></div>
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
                MRS. Y. RAMA - DIRECTOR
              </div>
              <div className="text-xl ">
                Bachelor's degree in Science (B.Sc.).
                <br />
                Director Dealer Principal
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
            <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>
          </div>
          <div className="grid p-10 bg-gray-100 md:grid-cols-3 group ">
          <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>

            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="h-0.5 bg-secondary mb-6 group-hover:w-[100%] w-[50%] duration-300"></div>
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
              MR. RAHUL YALAMANCHILI
              </div>
              <div className="text-xl ">
              MBA (MFAB)  <br />
              ISB (Indian School of Business Director)
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* outlets */}
      <div className="px-5 mx-auto my-20 max-w-7xl">
        <h2 className="my-10 text-4xl font-semibold text-center select-none">
          Our Outlets
        </h2>
        {/* <div className="bg-secondary w-full h-[1px]"></div> */}
        <div className="flex flex-wrap gap-2 mb-5 md:mt-5 lg:mb-8">
          {brands.map((brand, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`px-4 md:px-6 lg:px-8 py-2 rounded-lg focus:outline-none flex-grow ${
                selectedTab === index
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-secondary-light border border-secondary"
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brands[selectedTab]?.locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary "
            >
              <div className="">
                <h2 className="mb-2 text-xl font-semibold">{location.name}</h2>
                <p className="text-gray-700 group-hover:text-white ">
                  {location.address}
                </p>
              </div>

              <a
                href={location.map}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 pt-3 pb-2 group-hover:text-white "
              >
                View in Google Map
                <FaMapMarkerAlt className="text-secondary group-hover:text-white" />
              </a>
            </div>
          ))}
        </div>
        {/* <div className="grid gap-5 my-10 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="relative w-full col-span-1 overflow-hidden bg-gray-100 rounded-lg h-60">
            {" "}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-2 "
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0923591597375!2d78.43287946110777!3d17.455293000775555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90e3e3ef1e1b%3A0x1654f5dc889de472!2sShankaramma%20Towers%2C%20Sanjeeva%20Reddy%20Nagar%20Rd%2C%20D.%20Shankar%20Lal%20nagar%2C%20Vikaspuri%2C%20Erragadda%2C%20Hyderabad%2C%20Telangana%20500018!5e0!3m2!1sen!2sin!4v1709816055141!5m2!1sen!2sin"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
          <div className="relative w-full col-span-1 overflow-hidden bg-gray-100 rounded-lg h-60">
            {" "}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-2 "
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6609846165647!2d78.42658057494407!3d17.38003870301724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97b6285a7045%3A0x14ae9f27d3d2102!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709827097615!5m2!1sen!2sin"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
          <div className="relative w-full col-span-1 overflow-hidden bg-gray-100 rounded-lg h-60">
            {" "}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-2 "
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.025075126752!2d78.49571888885498!3d17.458513900000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9175d94044f5%3A0x41f76244cf2c6a!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto%2C%20Kharkana!5e0!3m2!1sen!2sin!4v1709827244896!5m2!1sen!2sin"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
          <div className="relative w-full col-span-1 overflow-hidden bg-gray-100 rounded-lg h-60">
            {" "}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-2 "
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.0864729662253!2d78.48153188885499!3d17.646063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb87cdfb49c615%3A0xc60aa4cad87aa6cd!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%20Auto!5e0!3m2!1sen!2sin!4v1709827306418!5m2!1sen!2sin"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
          <div className="relative w-full col-span-1 overflow-hidden bg-gray-100 rounded-lg h-60">
            {" "}
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-2 "
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.8923666342307!2d78.26202007495714!3d18.030198083969765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc15cb5a7cf099%3A0x50a675f2f49fb200!2sTata%20Motors%20Cars%20Showroom%20-%20Orange%2C%20Medak!5e0!3m2!1sen!2sin!4v1709827511499!5m2!1sen!2sin"
              // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

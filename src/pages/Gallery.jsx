import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { galleryImg } from "../json/index";
import backgrounImg from "../assets/gallery/TATA/Tata3.jpg";

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleClick = (index) => {
    setSelectedTab(index);
    window.scrollTo(0, 500);
  };

  return (
    <div className="bg-gray-50">
      <div
        className="h-[40vh] bg-top bg-cover bg-fixed relative "
        style={{ backgroundImage: `url(${backgrounImg})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-60"></div>
      </div>
      {/* <img
        src={require("../assets/gallery/TATA/Tata3.jpg")}
        className="object-cover w-full h-[40vh] bg-bottom"
        alt=""
      /> */}

      <Breadcrumb pageName="Gallery" />
      <div className="container py-10 mx-auto xl:max-w-screen-xl">
        <div className="container relative px-1 py-6 mx-auto rounded-lg">
          <h1 className="mb-4 text-4xl font-semibold">Gallery</h1>
          <div className=" left-0 flex flex-wrap gap-2 mb-5  md:mt-5 lg:mb-8 top-[96px] py-2 z-10 bg-gray-50">
            {galleryImg.map((brand, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`px-2 md:px-6 lg:px-8 py-2 rounded-lg focus:outline-none flex-grow bg-gray-50 ${
                  selectedTab === index
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-secondary-light border border-secondary"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <div>
            {galleryImg[selectedTab]?.images.map((location, i) => (
              <div key={i} className="">
                <div className="mb-4 text-lg text-secondary lg:text-xl">
                  {location.showroomName}
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 md:mb-10">
                  {location.img.map((img, index) => (
                    <div
                      key={index}
                      // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
                      className="overflow-hidden border-2 rounded-2xl group border-secondary hover:shadow-lg "
                    >
                      <img
                        src={img}
                        alt=""
                        srcset=""
                        className="h-[20rem] w-full rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out"
                      />
                    </div>
                  ))}
                </div>
                {/* <div className="flex flex-col justify-between p-4 duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary">
                  <img src="" alt="" srcset="" />
                {/* <div className="flex flex-col justify-between p-4 duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary">
                  <img src="" alt="" srcset="" />
                </div>{" "} */}
              </div>
            ))}
          </div>
        </div>
        <div className="container relative px-1 py-6 mx-auto rounded-lg">
          <h1 className="mb-4 text-4xl font-semibold">Awards</h1>

          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 md:mb-10 xl:grid-cols-5">
            <div
              // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              className="overflow-hidden rounded-2xl group "
            >
              <img
                src={require("../assets/awards/IKM HYD 1.jpeg")}
                alt=""
                srcset=""
                className="h-[20rem]  rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out border-secondary border-2"
              />
            </div>
            <div
              // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              className="overflow-hidden rounded-2xl group "
            >
              <img
                src={require("../assets/awards/IKM HYD 2.jpeg")}
                alt=""
                srcset=""
                className="h-[20rem] mx-auto rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out border-secondary border-2"
              />
            </div>
            <div
              // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              className="overflow-hidden rounded-2xl group "
            >
              <img
                src={require("../assets/awards/HYD SER.jpeg")}
                alt=""
                srcset=""
                className="h-[20rem]  rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out border-secondary border-2"
              />
            </div>

            <div
              // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              className="overflow-hidden rounded-2xl group "
            >
              <img
                src={require("../assets/awards/IKM HYD .1..jpeg")}
                alt=""
                srcset=""
                className="h-[20rem]  rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out border-secondary border-2"
              />
            </div>
            <div
              // className="flex flex-col justify-between duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              className="overflow-hidden rounded-2xl group "
            >
              <img
                src={require("../assets/awards/IKM HYD .2..jpeg")}
                alt=""
                srcset=""
                className="h-[20rem]  rounded-2xl group-hover:scale-105 duration-300 transition-transform ease-in-out border-secondary border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

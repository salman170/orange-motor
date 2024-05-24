import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { galleryImg } from "../json/index";

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleClick = (index) => {
    setSelectedTab(index);
    window.scrollTo(0, 500);
  }

  return (
    <div className="bg-gray-50">
      <img
        src={require("../assets/others/channels4_banner.jpg")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="Gallery" />
      <div className="container py-10 mx-auto xl:max-w-screen-xl">
        <div className="container relative px-1 py-6 mx-auto rounded-lg">
          <h1 className="mb-4 text-4xl font-semibold">Gallery</h1>
          <div className="sticky left-0 flex flex-wrap gap-2 mb-5  md:mt-5 lg:mb-8 top-[96px] py-2 z-10 bg-gray-50">
            {galleryImg.map((brand, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`px-4 md:px-6 lg:px-8 py-2 rounded-lg focus:outline-none flex-grow bg-gray-50 ${
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
      </div>
    </div>
  );
};

export default Gallery;

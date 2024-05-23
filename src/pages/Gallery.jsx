import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { brands } from "../json/index";

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <img
        src={require("../assets/others/channels4_banner.jpg")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="Gallery" />
      <div className="py-10 bg-gray-50 ">
        <div className="container px-1 py-6 mx-auto rounded-lg">
          <h1 className="mb-6 text-4xl font-semibold">Gallery</h1>
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
                className="flex flex-col justify-between p-4 duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95 hover:bg-secondary"
              >
                <div className="">
                  <h2 className="mb-2 text-xl font-semibold">
                    {location.name}
                  </h2>
                  <p className="text-gray-700 group-hover:text-white ">
                    {location.address}
                  </p>
                </div>

                <a
                  href={location.map}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 pt-3 pb-2 group-hover:text-white"
                >
                  View in Google Map{" "}
                  <FaMapMarkerAlt className="text-secondary group-hover:text-white" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

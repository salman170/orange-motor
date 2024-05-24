import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { brands } from "../json/index";

const Locations = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <img
        src={require("../assets/others/channels4_banner.jpg")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="Locations" />
      <div className="py-10 bg-gray-50 ">
        <div className="container px-1 py-6 mx-auto rounded-lg">
          <h1 className="mb-6 text-4xl font-semibold">Locations</h1>
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
                  </h2>{" "}
                  <div className="flex gap-2 pb-4 text-sm text-gray-700 group-hover:text-white">
                    {location.address}
                  </div>
                  {location.personName && (
                    <p className="text-sm text-gray-900 group-hover:text-white">
                      <span className="mr-1 ">Manager:</span>{" "}
                      {location.personName}
                    </p>
                  )}{" "}
                  {location.phone && (
                    <div className="flex pt-2 text-sm text-gray-900 group-hover:text-white ">
                      <div className="mr-6 ">Phone:</div>{" "}
                      <div className="">
                        {location.phone} <br  /> 
                        7799969679
                      </div>
                    </div>
                  )}
                  {/* {location.phone && ( */}
                  <div className="flex pt-2 text-sm text-gray-900 group-hover:text-white ">
                    <div className="mr-2 ">Timming:</div>{" "}
                    <div className="">
                      9:30 AM to 8 PM - MON to SAT <br /> 10.00 AM to 5 PM - SUN
                    </div>
                  </div>
                  {/* )} */}
                  {/* {location.email && (
                    <p className="text-sm text-gray-700 group-hover:text-white">
                       <span className="mr-7 text-secondary group-hover:text-black">
                        email:
                      </span>
                      <span className="">{location.email}</span>
                    </p>
                  )} */}
                </div>
                <div className="">
                  <a
                    href={location.map}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 pt-3 pb-2 text-sm group-hover:text-white"
                  >
                  <FaMapMarkerAlt className="text-secondary group-hover:text-white" />  View in Google Map{" "}
                    
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

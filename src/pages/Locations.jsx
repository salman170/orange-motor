import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import { FaMapMarkerAlt } from "react-icons/fa";

const Locations = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const brands = [
    {
      name: "Tata",
      locations: [
        {
          name: "Tata Motors Cars Showroom - Orange Auto, Erragadda",
          address:
            "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        },
        {
          name: "Tata Motors Cars Showroom - Orange Auto Pvt Ltd",
          address:
            "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        },
        {
          name: "Tata Motors Cars Showroom - Orange Auto, Kharkana",
          address:
            "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        },
        {
          name: "Tata Motors Cars Showroom - Orange Auto , Secunderabad",
          address:
            "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        },
        {
          name: "Tata Motors Cars Showroom - Orange Auto, Medak",
          address:
            "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        },
      ],
    },
    {
      name: "Jeep",
      locations: [
        {
          name: "Jeep Cars Showroom - Orange Auto, Erragadda",
          address:
            "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        },
        {
          name: "Jeep Cars Showroom - Orange Auto Pvt Ltd",
          address:
            "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        },
        {
          name: "Jeep Cars Showroom - Orange Auto, Kharkana",
          address:
            "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        },
        {
          name: "Jeep Cars Showroom - Orange Auto , Secunderabad",
          address:
            "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        },
        {
          name: "Jeep Cars Showroom - Orange Auto, Medak",
          address:
            "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        },
      ],
    },
    {
      name: "Honda",
      locations: [
        {
          name: "Honda Cars Showroom - Orange Auto, Erragadda",
          address:
            "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        },
        {
          name: "Honda Cars Showroom - Orange Auto Pvt Ltd",
          address:
            "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        },
        {
          name: "Honda Cars Showroom - Orange Auto, Kharkana",
          address:
            "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        },
        {
          name: "Honda Cars Showroom - Orange Auto , Secunderabad",
          address:
            "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        },
        {
          name: "Honda Cars Showroom - Orange Auto, Medak",
          address:
            "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        },
      ],
    },
    {
      name: "Kawasaki",
      locations: [
        {
          name: "Kawasaki Cars Showroom - Orange Auto, Erragadda",
          address:
            "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        },
        {
          name: "Kawasaki Cars Showroom - Orange Auto Pvt Ltd",
          address:
            "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        },
        {
          name: "Kawasaki Cars Showroom - Orange Auto, Kharkana",
          address:
            "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        },
        {
          name: "Kawasaki Cars Showroom - Orange Auto , Secunderabad",
          address:
            "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        },
        {
          name: "Harely Davidson Cars Showroom - Orange Auto, Medak",
          address:
            "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        },
      ],
    },
    {
      name: "Harely Davidson",
      locations: [
        {
          name: "Harely Davidson Cars Showroom - Orange Auto, Erragadda",
          address:
            "No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana 500018",
        },
        {
          name: "Harely Davidson Cars Showroom - Orange Auto Pvt Ltd",
          address:
            "Municipal No 13, 6/432/33 & 13/6/432/33/A, Gudimalkapur, Attapur, Telangana 500028",
        },
        {
          name: "Harely Davidson Cars Showroom - Orange Auto, Kharkana",
          address:
            "Ground floor, Opp Grill 9 hotel, Karkhana Road Vikrampuri Colony, R & D Colony, Karkhana, Secunderabad, Telangana 500015",
        },
        {
          name: "Harely Davidson Cars Showroom - Orange Auto , Secunderabad",
          address:
            "Srini Developers, opposite ST. CLARET HIGH SCHOOL, Malkajgiri, Secunderabad, Telangana 501401",
        },
        {
          name: "Harely Davidson Cars Showroom - Orange Auto, Medak",
          address:
            "1321/A, Medak - Chegunta Rd, beside Sri Sai Balaji Garden, near Rush Hospital, Baba Colony, Gangineni, Medak, Telangana 502110",
        },
      ],
    },
  ];


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
        <div className="flex flex-wrap gap-2 mb-5 md:mt-10">
          {brands.map((brand, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`px-4 md:px-6 lg:px-8 py-2 rounded-lg focus:outline-none ${
                selectedTab === index
                  ? "bg-secondary text-white"
                  : "bg-secondary-light border"
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
              className="p-4 duration-300 bg-white rounded-lg shadow-md cursor-default group hover:scale-95"
            >
              <h2 className="mb-2 text-xl font-semibold">{location.name}</h2>
              <p className="flex items-center gap-2 pt-2 mb-2">
                <FaMapMarkerAlt className="text-secondary" /> Address:
              </p>
              <p className="text-gray-700">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default Locations;

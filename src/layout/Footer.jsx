import React from "react";
import { Link } from "react-router-dom";

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="py-20 text-white bg-secondary">
        <div className="container grid px-5 mx-auto lg:grid-cols-5">
          <div className="col-span-4">
            <p className="mb-5 text-5xl font-semibold">
              Quality means doing it right <br />
              When no one is looking
            </p>
            <p className="">
              our dealership takes your privacy seriously and is committed to{" "}
              <br />
              safeguarding your privacy online. Because we do gather certain{" "}
              <br /> types of information from you.
            </p>
            <div className="my-10">
              <Link to="/" className="bg-black  px-7 py-2.5">
                Contact For Queries
              </Link>
            </div>
          </div>
          <div className="">
            <p className="mb-5 text-2xl font-semibold">Contact Us</p>
            <p className="text-[#fff] text-opacity-70 hover:text-opacity-100   cursor-pointer pb-6">
              No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump,
              Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana
              500018
            </p>

            <a
              href="tel:9985412345"
              className="flex items-center gap-3 pb-4 text-[#fff] text-opacity-70 hover:text-opacity-100 whitespace-nowrap"
            >
              <FaPhone className="text-white " />
             99854 12345
            </a>
            <a
              href="mailto:info@orangeauto.in"
              className="flex items-center gap-3 pb-4 text-[#fff] text-opacity-70 hover:text-opacity-100"
            >
              <IoMdMail className="text-white " />
              info@orangeauto.in
            </a>
          </div>
        </div>
        <div className="container w-full px-5 mx-auto">
          <div className="flex flex-col items-center justify-between mt-24 md:flex-row">
            <Link to="/">
              <img
                src={require("../assets/others/white_logo.png")}
                className="h-16"
                alt=""
              />
            </Link>

            <div className="flex flex-col items-center w-full mt-4 md:space-x-10 md:flex-row md:justify-end">
              <Link to="/">Dealership</Link>
              <Link to="/">Support</Link>
              <Link to="/">Experience </Link>
              <Link to="/">Shopping Tools</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container flex flex-col justify-between gap-2 px-1 py-3 mx-auto text-xs text-white md:flex-row">
          <div>© Copyright ORANGE AUTO PVT LTD. All Rights Reserved</div>
          {/* <div>Designed & Developed by BroaddCast Business Solutions LLP</div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

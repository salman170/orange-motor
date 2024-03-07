import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      <img
        src={require("../assets/others/corporate-culture2.png")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="Contact Us" />
      <div className="container px-1 py-10 mx-auto lg:py-24">
       
          <h1 className="mb-4 text-4xl font-semibold">Contact Us</h1>
          <div className="flex flex-col gap-10 md:gap-4 md:flex-row">
            <div className="mt-4 space-y-4 md:w-1/2">
              <p className="flex items-center gap-5">
                <FaPhoneAlt className="text-xl text-secondary" />
                <a href="tel:+919985412345">+91 9985412345</a>
              </p>
              <p className="flex items-center gap-5">
                <FaEnvelope className="text-xl text-secondary" />
                <a href="mailto:info@orangeauto.in" className="text-lg italic">
                  info@orangeauto.in
                </a>
              </p>
              <p className="flex w-full gap-4">
                <FaLocationDot className="text-4xl text-secondary" />
                <p>
                  No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol
                  Pump, Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad,
                  Telangana 500018
                </p>
              </p>
            </div>
            <div className="md:w-1/2">
              {/* <BookForm /> */}
              <img
                src={require("../assets/others/logo.png")}
                alt=""
                className="h-16 md:mx-auto"
              />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

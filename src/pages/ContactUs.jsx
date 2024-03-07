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
      <Breadcrumb pageName="Contact us" />
      <div className="container py-10 mx-auto lg:py-20">
        <div className="px-1 py-6 ">
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
            {/* <div className="relative p-10 overflow-hidden bg-gray-300 rounded-lg sm:ml-10 md:w-1/2 h-60">
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
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

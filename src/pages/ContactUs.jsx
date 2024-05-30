import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      <img
        src={require("../assets/others/corporate-culture2.png")}
        className="object-cover w-full h-[40vh]"
        alt=""
      />
      <Breadcrumb pageName="Contact Us" />
      <div className="container px-1 py-10 mx-auto lg:pb-24 lg:pt-16 lg:max-w-7xl">
        <h1 className="mb-4 text-4xl font-semibold">Corporate Office</h1>
        <div className="flex flex-col gap-10 md:gap-4 md:flex-row lg:gap-10">
          <div className="md:w-1/2">
            <ContactUsForm />
            {/* <img
                src={require("../assets/others/logo.png")}
                alt=""
                className="h-16 md:mx-auto"
              /> */}
          </div>
          <div className="py-4 mt-4 space-y-4 md:w-1/2">
            {/* <p className="mb-5 text-xl font-semibold tracking-wide ">
        Contact Us Form
      </p> */}
            <p className="flex items-center gap-5">
              <FaPhoneAlt className="text-xl text-secondary" />
              <a href="tel:+919985412345">+91 9985412345</a>
            </p>
            <p className="flex items-center gap-5">
              <FaEnvelope className="text-xl text-secondary" />
              <a href="mailto:info@orangeauto.in" className="text-lg ">
                info@orangeauto.in
              </a>
            </p>
            <div className="flex w-full gap-4">
              <div>
                <FaLocationDot className="text-xl text-secondary" />
              </div>
              <p>
                No 8, Shankaramma Towers, 3/164/2, opposite Bharat Petrol Pump,
                Shankar Lal Nagar, Sultan Nagar, Erragadda, Hyderabad, Telangana
                500018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

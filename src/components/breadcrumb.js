import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="py-4 bg-gray-100 md:py-10">
      <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-center gap-y-2 md:justify-between">
          <div className="flex items-center space-x-2 text-center sm:space-x-5">
            <p className="font-semibold ">Orange Motors </p>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>Best Dealers in Telangana</p>
          </div>

          <div className="flex items-center px-2 space-x-2 sm:space-x-5">
            <Link to="/" className="text-secondary">Home </Link>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>{pageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

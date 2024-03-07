import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <p className="font-semibold">Orange Motors </p>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>Best Dealers in Telangana</p>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/">Home </Link>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>{pageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

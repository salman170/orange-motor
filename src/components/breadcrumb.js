import React from "react";

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <p className="font-semibold">Orange Motors </p>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>Best Dealers in Telangana</p>
          </div>

          <div className="flex items-center space-x-5">
            <p>Home </p>
            <div className="h-[15px] w-[2px] bg-black"></div>
            <p>Tata Motors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

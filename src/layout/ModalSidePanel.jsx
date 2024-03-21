import { IoClose, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { IoIosCall, IoLogoYoutube, IoMdMail } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";

const ModalSidePanel = ({ open, setOpen }) => {
  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (open) {
      // Disable scrolling
      body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      body.style.overflow = "visible";
    }

    // Clean up the effect
    return () => {
      body.style.overflow = "visible";
    };
  }, [open]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setOpen(false);
    }
  };

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Brands ", path: "/tata" },
    { name: "Locations", path: "/locations" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const brands = [
    {
      name: "Tata",
      href: "/tata",
    },
    {
      name: "Jeep",
      href: "/jeep",
    },
    {
      name: "Honda",
      href: "/",
    },
    {
      name: "Kawasaki",
      href: "/",
    },
    {
      name: "Harley Davidson",
      href: "/",
    },
  ];

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className={`fixed lg:hidden ${
        !open
          ? "translate-x-[110%] duration-500 md:duration-1000"
          : "duration-500 md:duration-700"
      }   flex justify-end  top-0 right-0 h-full  w-full z-40`}
    >
      <div className="overflow-hidden bg-white shadow-2xl w-80">
        <div className="flex flex-col justify-between h-full gap-6 px-6 pt-20 pb-10">
          <div className="flex flex-col gap-2">
            <Link
              to={tabs[0].path}
              onClick={() => {
                setOpen(false);
                // setShowBrands(false);
              }}
              className="w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
            >
              {tabs[0].name}
            </Link>
            <Link
              to={tabs[1].path}
              onClick={() => {
                setOpen(false);
                // setShowBrands(false);
              }}
              className="w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
            >
              {tabs[1].name}
            </Link>
            <div
              to={tabs[2].path}
              onClick={() => {
                setShowBrands(!showBrands);
              }}
              className="flex items-center justify-between w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
            >
              <div>{tabs[2].name}</div>{" "}
              <div className={`${showBrands ? "rotate-180" : ""}`}>
                <RxCaretDown />
              </div>
            </div>
            {showBrands && (
              <div className="flex flex-col gap-2 pl-3 text-sm text-secondary">
                {brands.map((brand, index) => (
                  <Link
                    key={index}
                    to={brand.href}
                    onClick={() => {
                      setOpen(false);
                      // setShowBrands(false);
                    }}
                    className="w-full py-2 pl-6 border-b cursor-pointer "
                  >
                    &#12297; {brand.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to={tabs[3].path}
              onClick={() => {
                setOpen(false);
                // setShowBrands(false);
              }}
              className="w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
            >
              {tabs[3].name}
            </Link>
            <Link
              to={tabs[4].path}
              onClick={() => {
                setOpen(false);
                // setShowBrands(false);
              }}
              className="w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
            >
              {tabs[4].name}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 px-4 py-1 text-sm text-white bg-secondary">
              <div className="flex items-center gap-2">
                <IoIosCall className="" />
                <a href="tel:9985412345">99854 12345</a>
              </div>
              <div className="flex items-center gap-2 ">
                <FaLocationDot /> Hyderabad
              </div>
            </div>
            <div className="flex gap-4 pt-4 text-2xl text-secondary justify-evenly">
              <a
                href="https://www.instagram.com/nuform__/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.facebook.com/your-facebook-page"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.youtube.com/your-channel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                <IoMdMail />
              </a>
            </div>
            {/* <div className="flex justify-center">
              <button
                className="px-4 py-2 mt-4 text-white rounded-lg bg-secondary hover:bg-primary"
                onClick={() => setShowBrands(!showBrands)}
              >
                {showBrands ? "Hide Brands" : "Show Brands"}
              </button>
            </div>
            {showBrands && (
              <div className="flex flex-col gap-2 mt-4">
                {brands.map((brand, index) => (
                  <Link
                    key={index}
                    to={brand.href}
                    onClick={() => {
                      setOpen(false);
                      setShowBrands(false);
                    }}
                    className="w-full py-2 pl-6 border-b cursor-pointer hover:bg-secondary hover:text-white"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            )} */}
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setOpen(false)}
            className="p-1 duration-200 rounded-full select-none w-min bg-secondary hover:scale-105"
          >
            <IoClose className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSidePanel;

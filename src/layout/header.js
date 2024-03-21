import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import ModalSidePanel from "./ModalSidePanel";

const navigation = {
  pages: [
    { name: "Locations", href: "/locations" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  brands: [
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
      name: "Harely Davidson",
      href: "/",
    },
  ],
};

// const cars = [
//   {
//     name: "Tiago",
//     img: require("../assets/tata/tiago.png"),
//     link: "/tiago",
//   },
//   {
//     name: "Altroz",
//     img: require("../assets/tata/altroz.png"),
//     link: "/altroz",
//   },
//   {
//     name: "Tigor",
//     img: require("../assets/tata/tigor.png"),
//     link: "/tigor",
//   },
//   {
//     name: "Punch",
//     img: require("../assets/tata/punch.png"),
//     link: "/punch",
//   },
//   {
//     name: "Nexon",
//     img: require("../assets/tata/nexon.png"),
//     link: "/nexon",
//   },
//   {
//     name: "Harrier",
//     img: require("../assets/tata/harrier.png"),
//     link: "/harrier",
//   },
//   {
//     name: "Safari",
//     img: require("../assets/safari.png"),
//     link: "/safari",
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);
  // const [veh, setVeh] = useState(false);
  // const [service, setService] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
     window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
      <div className="sticky top-0 z-40 w-full bg-white shadow-lg">
        {/* Mobile menu */}
        {/* <MobileHeader
        veh={veh}
        service={service}
        setService={setService}
        setVeh={setVeh}
        open={open}
        setOpen={setOpen}
      /> */}

        <header className="relative bg-white border-gray-200 shadow-sm">
          <nav aria-label="Top" className="px-4 md:mx-20 sm:px-6 lg:px-8">
            <div className="flex items-center h-24">
              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <Link to="/">
                  <img
                    className="w-auto h-10"
                    src={require("../assets/others/logo.png")}
                    loading="lazy"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-auto lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    to="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    About Us
                  </Link>

                  {/* <Popover className="flex">
                  {({ open }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={classNames(
                            open
                              ? "border-secondary text-secondary"
                              : "border-transparent text-gray-700 hover:text-gray-800",
                            "relative z-10 -mb-px flex items-center outline-none border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none"
                          )}
                        >
                          Vehicles
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 z-20 text-sm text-gray-500 top-full">
                          <div
                            className="absolute inset-0 bg-white shadow top-1/2"
                            aria-hidden="true"
                          />

                          <div className="relative bg-white">
                            <div className="px-8 py-10 mx-auto max-w-7xl">
                              <div className="flex flex-wrap items-center gap-6">
                                {cars?.map((item, index) => (
                                  <Link
                                    to={`/vehicles${item?.link}`}
                                    key={index}
                                    className="p-5 overflow-hidden rounded mb-7 bg-slate-50"
                                  >
                                    <img
                                      src={item.img}
                                      className="object-cover w-auto h-24"
                                      loading="lazy"
                                      alt=""
                                    />
                                    <p className="text-sm font-semibold text-center">
                                      {item.name}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}

                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "border-[#051641] text-[#051641]"
                                : "border-transparent text-black hover:text-black",
                              "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none"
                            )}
                          >
                            Brands
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full -ml-6 text-sm shadow rounded overflow-hidden w-full max-w-[145px]">
                            <div
                              className="absolute inset-0 bg-white top-1/2"
                              aria-hidden="true"
                            />
                            {navigation?.brands.map((item, index) => (
                              <Link to={item.href} key={index}>
                                <p className="relative z-10 p-3 bg-white hover:bg-gray-100">
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex items-center ml-auto lg:hidden">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <button
                    type="button"
                    className="p-2 text-gray-400 bg-white rounded-md lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <HiOutlineBars3BottomRight
                      className="w-10 h-10 text-secondary"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <ModalSidePanel open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

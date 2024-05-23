import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import CurrencyFormatter from "../components/currency-formatter";
import BookForm from "../components/book-form";
import CarSlider2 from "../components/CarSlider2";
import { model } from "../json";
import { useModelContext } from "../components/ModelProvider";
import { IoIosArrowDown } from "react-icons/io";

const Detail = () => {
  const { id, position } = useParams();
  const [car, setCar] = useState(null);
  const [selected, setSelected] = useState(0);

  const { setOpenEnq, setModel } = useModelContext();

  const navigate = useNavigate();

  useEffect(() => {
    const selectedCar = model[position].find((item) => item.id === id);
    if (selectedCar) {
      setCar(selectedCar);
    }

    if (!selectedCar) {
      navigate("/");
    }
  }, [id, navigate, position]);

  return (
    <div className="bg-gray-50">
      <div className="container px-5 py-10 mx-auto xl:max-w-screen-xl">
        <p className="my-8 font-medium text-gray-600/90">
          <Link to={"/"}>Home</Link> /&nbsp;
          <span className="capitalize ">{car?.category}</span>&nbsp;/&nbsp;
          <span className="text-red-600">{car?.name}</span>
        </p>

        <div className="mb-5 space-y-1">
          <h2 className="text-2xl font-semibold xl:text-4xl ">{car?.name}</h2>
          <p>{car?.tag}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-2 space-y-10 lg:col-span-2">
            {/* Slider */}
            <div className="col-span-2 space-y-10 lg:col-span-2">
              <div className="overflow-hidden rounded-lg">
                {car?.banners.length > 1 ? (
                  <CarSlider2 sliders={car?.banners} />
                ) : (
                  <img
                    src={car?.banners[0]?.img}
                    alt=""
                    className="object-cover w-full h-96"
                  />
                )}
              </div>
            </div>

            <div className="space-y-4">
              {/* Dimensions and capacity */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h2 className="text-xl font-medium">Dimensions & Capacity</h2>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <table className="w-full mt-5">
                    <tbody>
                      {car?.dimensions?.slice(0, 3).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table className="w-full mt-5">
                    <tbody>
                      {car?.dimensions?.slice(3, 6).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engine & Transmission */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h2 className="text-xl font-medium">Engine & Tranmission</h2>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <table className="w-full mt-5">
                    <tbody>
                      {car?.engine?.slice(0, 3).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table className="flex w-full mt-5 ">
                    <tbody>
                      {car?.engine?.slice(3, 6).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Weight & Brakes */}
              <div className="p-8 bg-white border border-gray-200 rounded-lg">
                <h2 className="text-xl font-medium">Weight & Brakes</h2>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <table className="w-full mt-5">
                    <tbody>
                      {car?.weight?.slice(0, 2).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table className="w-full mt-5">
                    <tbody>
                      {car?.weight?.slice(2, 4).map((item, index) => (
                        <tr key={index}>
                          <td className="px-0 md:px-5 py-2.5">{item?.title}</td>
                          <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                            {item?.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* price and enquiry form */}
          <div className="col-span-1 space-y-5">
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <p className="mb-2 text-gray-900/90">
                Our Price <small>starts at</small>
              </p>
              <h1 className="mb-5 text-3xl font-semibold">
                {CurrencyFormatter.format(car?.price)}
                <span className="text-red-600">*</span>
              </h1>
              <div
                onClick={() => {
                  setOpenEnq(true);
                  setModel(car?.name);
                }}
                className="flex items-center justify-center w-full py-3 font-medium text-white rounded-lg shadow cursor-pointer bg-secondary"
              >
                Book Now
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <BookForm />
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h2 className="text-xl font-medium">Variants & Prices</h2>

              {!car?.allVariants && (
                <table className="w-full mt-5">
                  <tbody>
                    {car?.variants.map((item, index) => (
                      <tr key={index}>
                        <td className="px-0.5 text-sm"> {item?.variant}</td>
                        <td className="px-0.5 text-gray-900/80 text-sm py-1 ">
                          {CurrencyFormatter.format(item?.price)}
                          <span className="text-red-600">*</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {car?.allVariants?.map((car, i) => {
                return (
                  <div key={i} className="mt-5">
                    {car?.variantTitle && (
                      <div
                        onClick={() => setSelected(i)}
                        className="flex justify-between font-semibold cursor-pointer text-secondary"
                      >
                        {car?.variantTitle}{" "}
                        <IoIosArrowDown
                          className={`${i !== selected && "rotate-180"}`}
                        />
                      </div>
                    )}
                    {i === selected && (
                      <table className="w-full mt-2 ">
                        <tbody>
                          {car?.variants.map((item, index) => (
                            <tr
                              key={index}
                              className="text-sm duration-200 border cursor-pointer group hover:border-secondary hover:bg-gray-50"
                            >
                              <td className="pl-2 text-sm ">{item?.variant}</td>
                              <td className="p-0.5 text-gray-900/80   group-hover:text-secondary duration-200">
                                {CurrencyFormatter.format(item?.price)}
                                {/* <span className="text-red-600">*</span> */}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

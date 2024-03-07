import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { models } from "../json";
import CurrencyFormatter from "../components/currency-formatter";
import BookForm from "../components/book-form";

const Detail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedCar = models.find((item) => item.id === id);
    if (selectedCar) {
      setCar(selectedCar);
    }

    if (!selectedCar) {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className="bg-gray-50">
     
      <div className="max-w-screen-xl px-5 mx-auto my-10">
        <p className="my-8 font-medium text-gray-600/90">
          <Link to={"/"}>Home</Link> /&nbsp;
          <span className="capitalize ">{car?.category}</span>&nbsp;/&nbsp;
          <span className="text-red-600">{car?.name}</span>
        </p>

        <div className="mb-5 space-y-1">
          <h2 className="font-semibold xl:text-4xl ">{car?.name}</h2>
          <p>{car?.tag}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="col-span-2 space-y-10 lg:col-span-2">
            {/* Slider */}
            <div className="rounded-lg overflow-hidden h-[200px] md:h-[500px]">
              <Slider sliders={car?.banners} />
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

                  <table className="w-full mt-5">
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
              <a
                href="#form"
                className="flex items-center justify-center w-full py-3 font-medium text-white bg-red-600 rounded-lg shadow"
              >
                Buy
              </a>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <BookForm />
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h2 className="text-xl font-medium">Variants & Prices</h2>

              <table className="w-full mt-5">
                <tbody>
                  {car?.variants.map((item, index) => (
                    <tr key={index}>
                      <td className="px-0 md:px-5 py-2.5">{item?.variant}</td>
                      <td className="px-0 md:px-5 py-2.5 text-gray-900/80">
                        {CurrencyFormatter.format(item?.price)}
                        <span className="text-red-600">*</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

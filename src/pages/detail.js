import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { Header } from "../layout/header";
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
      <Header />
      <div className="max-w-screen-xl mx-auto my-10 px-5">
        <p className="font-medium text-gray-600/90 my-8">
          <Link to={"/"}>Home</Link> /&nbsp;
          <span className=" capitalize">{car?.category}</span>&nbsp;/&nbsp;
          <span className="text-red-600">{car?.name}</span>
        </p>

        <div className="mb-5 space-y-1">
          <h2 className="xl:text-4xl font-semibold ">{car?.name}</h2>
          <p>{car?.tag}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 col-span-2 space-y-10">
            {/* Slider */}
            <div className="rounded-lg overflow-hidden h-[200px] md:h-[500px]">
              <Slider sliders={car?.banners} />
            </div>

            <div className="space-y-4">
              {/* Dimensions and capacity */}
              <div className="border border-gray-200 bg-white p-8 rounded-lg">
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
              <div className="border border-gray-200 bg-white p-8 rounded-lg">
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
              <div className="border border-gray-200 bg-white p-8 rounded-lg">
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
            <div className="border border-gray-200 bg-white p-8 rounded-lg">
              <p className="text-gray-900/90 mb-2">
                Our Price <small>starts at</small>
              </p>
              <h1 className="font-semibold text-3xl mb-5">
                {CurrencyFormatter.format(car?.price)}
                <span className="text-red-600">*</span>
              </h1>
              <a
                href="#form"
                className="bg-red-600 shadow text-white flex items-center justify-center font-medium w-full rounded-lg py-3"
              >
                Buy
              </a>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-lg">
              <BookForm />
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-lg">
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

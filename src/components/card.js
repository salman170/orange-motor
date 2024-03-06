import { PiGasPumpLight, PiEngineLight } from "react-icons/pi";
import TransmissionSvg from "../assets/svg/transmission.svg";
import CurrencyFormatter from "./currency-formatter";
import { Link } from "react-router-dom";

const Card = ({ id, title, engine, fuel, transmission, price, banner }) => {
  return (
    <div className="overflow-hidden border rounded-lg group border-gray-200/70 ">
      <div className="overflow-hidden bg-slate-100/80">
        <Link to={`/vehicles/${id}`}>
          <img
            src={banner}
            className="object-cover w-full duration-150 group-hover:scale-110 "
            loading="lazy"
            alt=""
          />{" "}
        </Link>
      </div>
      <div className="mx-7">
        {/* title */}
        <div className="py-3 space-y-1">
          <h5 className="text-xl font-medium text-black/80">{title}</h5>
        </div>
        <div className="w-full h-px bg-gray-200/80"></div>

        {/* tiles */}
        <div className="flex items-center justify-between py-3 text-sm capitalize text-gray-800/80">
          <div className="flex flex-col items-center justify-center">
            <PiEngineLight className="w-6 h-6" />
            <p>{engine}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <PiGasPumpLight className="w-6 h-6" />
            <p>{fuel}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={TransmissionSvg} className="w-4 h-5 mb-1" alt="" />
            <p>{transmission}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200/80"></div>
        <div className="flex items-center justify-between py-3">
          {/* price */}
          <h4 className="font-semibold">{CurrencyFormatter.format(price)}</h4>

          <div>
            <Link to={`/vehicles/${id}`} className="text-sm text-blue-500/90">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

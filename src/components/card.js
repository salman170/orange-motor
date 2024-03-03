import { PiGasPumpLight, PiEngineLight } from "react-icons/pi";
import TransmissionSvg from "../assets/svg/transmission.svg";
import CurrencyFormatter from "./currency-formatter";
import { Link } from "react-router-dom";

const Card = ({ id, title, engine, fuel, transmission, price, banner }) => {
  return (
    <div className="rounded-lg overflow-hidden border group border-gray-200/70 ">
      <div className="bg-slate-100/80 overflow-hidden">
        <img
          src={banner}
          className="w-full object-cover duration-150 group-hover:scale-110 h-[180px]"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="mx-7">
        {/* title */}
        <div className="py-3 space-y-1">
          <h5 className="font-medium text-black/80 text-xl">{title}</h5>
        </div>
        <div className="h-px w-full bg-gray-200/80"></div>

        {/* tiles */}
        <div className="flex items-center justify-between py-3 text-gray-800/80 text-sm capitalize">
          <div className="flex items-center justify-center flex-col">
            <PiEngineLight className="h-6 w-6" />
            <p>{engine}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <PiGasPumpLight className="h-6 w-6" />
            <p>{fuel}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img src={TransmissionSvg} className="h-5 w-4 mb-1" alt="" />
            <p>{transmission}</p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200/80"></div>
        <div className="flex items-center justify-between py-3">
          {/* price */}
          <h4 className="font-semibold">{CurrencyFormatter.format(price)}</h4>

          <div>
            <Link to={`/vehicles/${id}`} className="text-blue-500/90 text-sm">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

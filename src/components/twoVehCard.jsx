import { PiGasPumpLight, PiEngineLight } from "react-icons/pi";
import TransmissionSvg from "../assets/svg/transmission.svg";
import CurrencyFormatter from "./currency-formatter";
import { useModelContext } from "./ModelProvider";

const TwoVehCard = ({
  title,
  category,
  engine,
  fuel,
  transmission,
  price,
  banner,
  weight,
}) => {
  const { setOpenEnq, setModel } = useModelContext();
  const calculateEMI = () => {
    // Assuming interest rate of 8% per annum and tenure of 5 years (60 months)
    const interestRatePerMonth = 8 / (12 * 100);
    const tenureInMonths = 12; // 5 years
    const principal = price; // Assuming carData.price is in lakhs

    // Calculating EMI using the formula
    const emi =
      (principal *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, tenureInMonths)) /
      (Math.pow(1 + interestRatePerMonth, tenureInMonths) - 1);
console.log(category)
    // Rounding off to 2 decimal places and converting to string
    return emi.toFixed(0);
  };

  return (
    <div className="overflow-hidden border rounded-lg group border-gray-200/70 ">
      <div className="overflow-hidden bg-slate-100/80">
        <img
          src={banner}
          className="object-cover w-full duration-150 group-hover:scale-110 "
          loading="lazy"
          alt=""
        />{" "}
      </div>
      <div className="mx-7 md:mx-4 lg:mx-7 xl:mx-4">
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
          <div className="flex flex-col items-center justify-center ">
            <img src={TransmissionSvg} className="w-4 h-5 mb-1" alt="" />
            <p>{transmission}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-3 text-sm capitalize text-gray-800/80 ">
          
          {weight.map((x, i) => {
            return (
              <div key={i} className="flex flex-col justify-center">
                <p className="text-secondary">{x.title}</p>
                <p>{x.value}</p>
              </div>
            );
          })}<div className="flex flex-col justify-center col-span-2">
            <p className="text-secondary">Variant</p>
            <p className="font-medium">{category.variant}</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200/80"></div>
        <div className="flex items-center justify-between py-3">
          {/* price */}
          <h4 className="font-semibold">{CurrencyFormatter.format(price)}</h4>
          <p className="text-sm ">From ₹ {calculateEMI()} / m</p>
        </div>

        <div className="flex items-center justify-between gap-2 py-3">
          {/* <a href="#" target="_blank" rel="noreferrer" className="w-1/2">
            {" "}
            <div className="flex-grow py-2 text-sm text-center border rounded-lg cursor-pointer hover:shadow-lg focus:outline-none text-secondary hover:border-secondary">
              {" "}
              View Brochure
            </div>
          </a>{" "} */}
          <div
            onClick={() => {
              setOpenEnq(true);
              setModel(title);
            }}
            className="flex-grow w-full py-2 text-center text-white duration-500 rounded-lg shadow-lg cursor-pointer focus:outline-none bg-secondary hover:scale-105"
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoVehCard;
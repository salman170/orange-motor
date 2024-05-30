import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BookForm from "../components/book-form";
import { model } from "../json";
import TwoVehCard from "../components/TwoVehCard";

const Honda = () => {
const final = model
  .slice(10, 12)
  .flatMap((array) => array.map((item) => item.name));

   
  return (
    <div>
      <img
        src={require("../assets/honda/holi_banner_home.webp")}
        className="object-cover w-full max-h-screen lg:-mt-20"
        alt=""
      />
      <Breadcrumb pageName="Honda" />

      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Honda</p>
          <p className="mt-5 text-black/80">
            Honda, a renowned name synonymous with innovation and reliability,
            stands as a testament to excellence and versatility. With a rich
            heritage deeply rooted in Japanese engineering, Honda is a
            trailblazer in automotive innovation and timeless design. Creators
            of legendary vehicles like the Honda Civic and Honda Accord, the
            brand embodies the spirit of precision and exploration. From
            navigating bustling city streets to embarking on cross-country
            adventures, Honda vehicles offer unmatched performance and style.
            Committed to pushing boundaries, Honda redefines the driving
            experience, providing drivers with an exhilarating journey like no
            other. Reflecting resilience and determination, Honda invites you to
            embrace the thrill of the open road. Join us on a journey of
            discovery with Honda – where every drive is an adventure.
          </p>

          <p className="mt-10 mb-2 text-2xl font-semibold">Orange Auto Group</p>
          <p className="text-black/80">
            Welcome to Orange Group, where passion for automobiles meets
            unparalleled service and customer satisfaction. Established in 2004,
            Orange Group has evolved into a trusted name in the automotive
            industry, setting high standards of excellence and commitment.
            Incorporated in September 2004, Orange Group began its remarkable
            journey with a General Motors dealership in Banjara Hills,
            Hyderabad. Over the years, our dedication to quality and
            customer-centric approach led to significant expansions. We spread
            our wings to Vishakhapatnam, Malkpet Hyderabad, Rajahmundry (AP),
            Balanagar Hyderabad, Bhimavaram (AP), and Khammam, establishing a
            strong presence across Andhra Pradesh and Telangana.
          </p>
        </div>
        <div className="col-span-2 p-2 lg:col-span-1">
          <BookForm final={final} />
        </div>
      </div>

      <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Scooty
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-3">
        {model[10].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="10"
            banner={item?.pic}
            title={item?.name}
            price={item?.price}
            fuel={item?.fuel}
            transmission={item?.transmission}
            engine={item?.cc}
            category={item?.variants[0]}
            brochure={item?.brochure}
            weight={item?.weight}
            variants={item?.variants}
          />
        ))}
      </div>
      <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Motorcycle
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-3">
        {model[11].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="11"
            banner={item?.pic}
            title={item?.name}
            price={item?.price}
            fuel={item?.fuel}
            transmission={item?.transmission}
            engine={item?.cc}
            category={item?.variants[0]}
            brochure={item?.brochure}
            weight={item?.weight}
            variants={item?.variants}
          />
        ))}
      </div>
      {/* <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Big Bikes
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[12].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="11"
            banner={item?.pic}
            title={item?.name}
            price={item?.price}
            fuel={item?.fuel}
            transmission={item?.transmission}
            engine={item?.cc}
            category={item?.variants[0]}
            // brochure={item?.brochure}
            weight={item?.weight}
          />
        ))}
      </div>  */}
    </div>
  );
};

export default Honda;

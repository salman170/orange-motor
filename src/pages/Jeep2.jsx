import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BookForm from "../components/book-form";
import {   model } from "../json";
// import Card from "../components/card";
import Card2 from "../components/card2";

const Jeep2 = () => {
  const final = model[1].map((item) => item.name);
  return (
    <div>
      <img
        src={require("../assets/others/jeep_banner.jpg")}
        className="object-cover max-w-full lg:-mt-20"
        alt=""
      />
      <Breadcrumb pageName="Jeep" />

      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Jeep</p>
          <p className="mt-5 text-black/80">
            Jeep, an iconic name synonymous with adventure, stands as a beacon
            of exploration. With a rich heritage deeply rooted in American
            history, Jeep is a trailblazer in off-road capabilities and timeless
            design. Creators of legendary vehicles like the Jeep Wrangler, Jeep
            embodies freedom and exploration. From conquering terrains to
            navigating cities, Jeep vehicles offer versatility and reliability.
            Committed to innovation, Jeep redefines adventure, providing an
            unparalleled experience on and off the road. Reflecting resilience
            and determination, Jeep invites you to explore the unknown. Join us
            on a journey of discovery with Jeep – where every journey is
            extraordinary.
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
      <div className="grid gap-5 py-10 mx-auto lg:grid-cols-3 max-w-7xl md:grid-cols-2 ">
        {model[1].map((item) => (
          <Card2
            key={item.id}
            id={item?.id}
            position="1"
            banner={item?.pic}
            title={item?.name}
            price={item?.price}
            fuel={item?.fuel}
            transmission={item?.transmission}
            engine={item?.cc}
            brochure={item?.brochure}
            dimensions={item?.dimensions}
          />
        ))}
      </div>
    </div>
  );
};

export default Jeep2;

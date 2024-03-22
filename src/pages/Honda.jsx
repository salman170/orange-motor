import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BookForm from "../components/book-form";
import { model } from "../json";
import TwoVehCard from "../components/TwoVehCard";

const Honda = () => {
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
          {/* <p className="mt-5 text-black/80">
  Honda, a legendary name synonymous with the spirit of innovation and
  reliability, stands as an enduring icon in the automotive world. With a
  storied history deeply rooted in the pursuit of excellence, Honda has long
  been celebrated for its groundbreaking technology and unmistakable design.
  As the creators of iconic models such as the Honda CR-V and Honda Accord,
  the brand epitomizes the essence of performance and exploration. From
  navigating rugged terrain to cruising along scenic highways, Honda
  vehicles offer drivers a unique blend of comfort and capability. With an
  unwavering commitment to quality and innovation, Honda continues to push
  the boundaries of automotive engineering, delivering an unmatched driving
  experience for enthusiasts around the globe. At the heart of Honda lies a
  spirit of resilience and determination, embodying the adventurous nature
  of those who dare to explore new horizons. As we celebrate the enduring
  legacy of Honda, we invite you to embark on a journey of discovery and
  excitement, where every drive is an opportunity to unleash your
  adventurous spirit. Discover the joy of exploration and the thrill of the
  open road with Honda – where every drive is a celebration of innovation
  and reliability.
</p> */}

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
          <BookForm />
        </div>
      </div>

      {/* <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Scooty
      </div> */}
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
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
            // brochure={item?.brochure}
            weight={item?.weight}
          />
        ))}
      </div>
      {/* <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Motorcycle
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
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
            // brochure={item?.brochure}
            weight={item?.weight}
          />
        ))}
      </div>
      <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
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
      </div> */}
    </div>
  );
};

export default Honda;

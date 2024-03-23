import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BookForm from "../components/book-form";
import { model } from "../json";
import TwoVehCard from "../components/TwoVehCard";

const Kawasaki = () => {
  return (
    <div>
      <img
        src={require("../assets/kawasaki/kawasaki_banner.jpg")}
        className="object-cover w-full lg:-mt-20"
        alt=""
      />
      <Breadcrumb pageName="Kawasaki" />

      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Kawasaki</p>
          <p className="mt-5 text-black/80">
            Kawasaki, a renowned name in the world of motorcycles, epitomizes
            performance and innovation. With a legacy spanning decades, Kawasaki
            has established itself as a leader in the industry, delivering
            unrivaled power and precision. From the adrenaline-fueled Ninja
            series to the versatile Z series, Kawasaki offers a diverse lineup
            of motorcycles tailored to every rider's passion and style. With
            iconic models like the Ninja ZX-10R and Z900, Kawasaki continues to
            push the boundaries of speed and design. Whether carving through
            winding roads or navigating city streets, Kawasaki motorcycles
            provide an exhilarating experience like no other. Committed to
            excellence and driven by a spirit of adventure, Kawasaki invites
            riders to embrace the thrill of the ride and explore new horizons.
            Join us on a journey of excitement and discovery with Kawasaki –
            where every ride is a testament to innovation and performance.
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
          <BookForm />
        </div>
      </div>
       <div className="container pb-4 mx-auto text-xl max-w-7xl text-secondary">
        Ninja
      </div> 
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[2].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="2"
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
       <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        z
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[3].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="3"
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
      <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        Urban Cruiser
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[4].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="4"
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
      <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        Versys 650
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[5].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="4"
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
      <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        W
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[6].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="4"
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
      <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        KX
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[7].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="4"
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
      <div className="container pb-4 mx-auto text-2xl max-w-7xl text-secondary">
        KLX
      </div>
      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[8].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="4"
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
    </div>
  );
};

export default Kawasaki;

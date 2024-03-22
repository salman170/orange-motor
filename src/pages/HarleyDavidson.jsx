import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BookForm from "../components/book-form";
import { model } from "../json";
import TwoVehCard from "../components/TwoVehCard";

const HarleyDavidson = () => {
  return (
    <div>
      <img
        src={require("../assets/harley-davidson/harley_home_banner.webp")}
        className="object-cover w-full max-h-screen lg:-mt-20"
        alt=""
      />
      <Breadcrumb pageName="Harley Davidson" />

      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Harley Davidson</p>
          <p className="mt-5 text-black/80">
            Harley Davidson, an iconic name synonymous with freedom and the open
            road, stands as a symbol of adventure and rebellion. With a rich
            heritage deeply rooted in American culture, Harley Davidson is a
            pioneer in motorcycle innovation and timeless design. Creators of
            legendary bikes like the Harley Davidson Fat Boy and Harley Davidson
            Sportster, the brand embodies the spirit of individualism and
            exploration. From cruising down endless highways to navigating
            bustling city streets, Harley Davidson motorcycles offer unmatched
            power and style. Committed to pushing boundaries, Harley Davidson
            redefines the thrill of riding, providing riders with an
            exhilarating experience like no other. Reflecting resilience and
            determination, Harley Davidson invites you to embrace the freedom of
            the open road. Join us on a journey of discovery with Harley
            Davidson – where every ride is an adventure.
          </p>
          {/* <p className="mt-5 text-black/80">
            Harley Davidson, a legendary name synonymous with the spirit of
            freedom and the thrill of the open road, stands as an enduring icon
            in the world of motorcycles. With a storied history deeply ingrained
            in the fabric of American heritage, Harley Davidson has long been
            celebrated for its groundbreaking innovation and unmistakable
            design. As the creators of iconic models such as the Harley Davidson
            Road King and Harley Davidson Electra Glide, the brand epitomizes
            the essence of individuality and exploration. From conquering
            winding mountain roads to cruising along scenic coastlines, Harley
            Davidson motorcycles offer riders a unique blend of power and
            prestige. With an unwavering commitment to excellence and
            innovation, Harley Davidson continues to push the boundaries of
            performance, delivering an unmatched riding experience for
            enthusiasts around the globe. At the heart of Harley Davidson lies a
            spirit of resilience and determination, embodying the free-spirited
            nature of those who choose to embrace the open road. As we celebrate
            the enduring legacy of Harley Davidson, we invite you to embark on a
            journey of discovery and excitement, where every ride is an
            opportunity to unleash your adventurous spirit. Discover the thrill
            of the open road and the joy of exploration with Harley Davidson –
            where every ride is a celebration of freedom and individuality.
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
      
      <div className="grid gap-5 py-10 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-7xl xl:grid-cols-4">
        {model[9].map((item) => (
          <TwoVehCard
            key={item.id}
            id={item?.id}
            position="9"
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

export default HarleyDavidson;

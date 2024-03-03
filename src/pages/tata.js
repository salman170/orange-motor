import BookForm from "../components/book-form";
import Breadcrumb from "../components/breadcrumb";
import Card from "../components/card";
import { models } from "../json";
import { Header } from "../layout/header";

const Tata = () => {
  return (
    <>
      <Header />
      <img
        src={require("../assets/tata_banner.jpg")}
        className="max-w-full object-cover"
        alt=""
      />
      <Breadcrumb />
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10">
        <div className="col-span-2">
          <p className="font-semibold text-2xl">Tata Motors</p>
          <p className=" text-black/80 mt-5">
            As one of India’s foremost home-grown automotive brands, we are
            delighted to have reached this significant milestone for our
            passenger vehicles segment. We are honoured to have the legendary
            Mr. Anupam Kher as the narrator of the glorious journey of a brand
            that is a legend in itself. This film is a testament to not only our
            evolutionary growth over the last 30 years but also the growth that
            India has seen as a nation through this period. This narration
            celebrates Tata Motors and all those who have supported us in these
            years, as we continue to provide class-defining products to our
            consumers, thereby allowing us to be thought leaders in the realm of
            design, safety and performance.
          </p>

          <p className="font-semibold text-2xl mt-10 mb-2">Orange Auto Group</p>
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
        <div className="col-span-1">
          <BookForm />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto">
        {models.map((item) => (
          <Card
            key={item.id}
            id={item?.id}
            banner={item?.pic}
            title={item?.name}
            price={item?.price}
            fuel={item?.fuel}
            transmission={item?.transmission}
            engine={item?.cc}
          />
        ))}
      </div>
    </>
  );
};

export default Tata;
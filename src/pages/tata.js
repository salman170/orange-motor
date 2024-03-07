import BookForm from "../components/book-form";
import Breadcrumb from "../components/breadcrumb";
import Card from "../components/card";
import { models } from "../json";

const Tata = () => {
  return (
    <>
     
      <img
        src={require("../assets/others/tata_banner.jpg")}
        className="object-cover max-w-full"
        alt=""
      />
      <Breadcrumb pageName="Tata Motors" />
      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Tata Motors</p>
          <p className="mt-5 text-black/80">
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
        <div className="col-span-1 ">
          <BookForm />
        </div>
      </div>

      <div className="grid gap-5 pb-10 mx-auto lg:grid-cols-3 max-w-7xl md:grid-cols-2 xl:grid-cols-4">
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

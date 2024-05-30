import BookForm from "../components/book-form";
import Breadcrumb from "../components/breadcrumb";
import Card2 from "../components/card2";
import { model } from "../json";

const Nissan = () => {
   const final = model[13].map((item) => item.name);
  return (
    <>
      <img
        src={require("../assets/others/Nissan-Magnite-May-VLP-Desktop-2880-x-2048.jpg")}
        className="object-cover max-w-full max-h-[52vh] w-full"
        alt=""
      />
      <Breadcrumb pageName="Nissan" />
      <div className="grid gap-10 px-1 mx-auto my-10 md:grid-cols-3 max-w-7xl">
        <div className="col-span-2">
          <p className="text-2xl font-semibold">Nissan</p>
          <p className="mt-5 text-black/80">
            A name that reverberates across time and terrain, Nissan has woven
            its legacy into the automotive fabric. From the rugged trails of the
            Patrol to the electric whispers of the Ariya, this brand has left an
            indelible mark. India, too, has been a canvas for this symphony of
            engineering and design. Imagine the sun-kissed streets of Mumbai,
            where the Micra danced through traffic with nimble grace. Or the
            winding roads of Himachal Pradesh, where the Terrano conquered
            mountain passes, its headlights piercing the mist. And who can
            forget the iconic Skyline? A legend born on the racetracks, its
            turbocharged heart beating in sync with adrenaline-fueled dreams.
            The GT-R, an unyielding force of nature, left tire marks on the
            asphalt and etched itself into folklore. But beyond speed and power,
            Nissan is about family road trips—the X-Trail carrying memories of
            laughter, picnics, and starlit nights.
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
        {model[13].map((item) => (
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
            brochure={item?.brochurePdf}
            dimensions={item?.dimensions}
          />
        ))}
      </div>
    </>
  );
};

export default Nissan;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ReviewAndRecommendation = () => {
  const blogsData = [
    {
      review:
        "Excellent service by sales executive MD Arbaaz. Thank you for your valuable time to give us ",
      name: "Mr. Mdaslam Aslam",
      rating: "5",
    },
    {
      review:
        "Excellent service by mohd Ismail team leader and sales person very professional approach towards customer service",
      name: "Mr. Mohd Mohdsohil",
      rating: "5",
    },
    {
      review:
        "very good  handling and explanation in every single detailed and well mannered sale executive name mohd waseem subhan. had a good experienced. in buying. purchased honda  Activa 125.",
      name: "Mr. Kamran_ Ahme",
      rating: "5",
    },
    {
      review:
        "Good services mr kashif good respond and roofi Jameel sir all so thanks to support",
      name: "Mr. Md Amer",
      rating: "5",
    },
    {
      review:
        "Excellent service by sales executive vinay good response on customers",
      name: "Mr. Shekhar Reddy",
      rating: "5",
    },
    {
      review:
        "Good response from ur sales excutive vinay,Good recevier and way of talking is nice",
      name: "Mrs. Satya Narayana",
      rating: "5",
    },
    {
      review:
        "Staff here were much better than at their Masab Tank branch. At the Masab Tank branch, everyone keeps asking for tips. Here only one employee asked",
      name: "Rutwik Phatak",
      rating: "3",
    },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container pt-4 pb-10 mx-auto overflow-hidden">
      <div className="container mx-auto mb-10 overflow-visible select-none">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="relative overflow-visible mySwiper"
        >
          {" "}
          {blogsData.map((x, i) => {
            return (
              <SwiperSlide key={i} className="overflow-hidden ">
                <div className="h-full overflow-hidden text-white duration-200 border bg-secondary rounded-xl group hover:border-primary">
                  <div className="p-4 my-auto space-y-3 text-left lg:p-6">
                    <div className="flex gap-2 pb-2">
                      <FaStar className="" />
                      <FaStar className="" />
                      <FaStar className="" />
                      <FaStar
                        className={` ${
                          x.rating === "5" ? "" : "text-gray-400"
                        }`}
                      />
                      <FaStar
                        className={` ${
                          x.rating === "5" ? "" : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="pb-2 text-sm tracking-wide text-justify">
                      {x.review}
                    </div>
                    <div className="italic">~ {x.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="mt-6"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewAndRecommendation;

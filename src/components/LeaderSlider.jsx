import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const LeaderSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div>
      {" "}
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // breakpoints={{
        // 640: {
        //   slidesPerView: 1,
        //   spaceBetween: 20,
        // },
        // 768: {
        //   slidesPerView: 1,
        // },
        // 1024: {
        //   slidesPerView: 1.2,
        //   // spaceBetween: 40,
        // },
        // 1280: {
        //   slidesPerView: 1.2,
        //   // spaceBetween: 40,
        // },
        // }}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative overflow-visible select-none customerSwiper"
      >
        <div className="absolute z-10 justify-between hidden w-full gap-4 md:flex top-[43%] ">
          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full ml-2 cursor-pointer hover:bg-[#F17D28] group border-2 hover:border-white border-dashed  hover:border-solid border-[#f17d28]"
            // onClick={() => setIsTrue(!isTrue)}
            ref={navigationPrevRef}
          >
            <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl group-hover:text-white" />
          </div>

          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full mr-2 cursor-pointer hover:bg-[#F17D28] group border-2 hover:border-white border-dashed  hover:border-solid border-[#f17d28]"
            ref={navigationNextRef}
          >
            <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl group-hover:text-white" />
          </div>
        </div>
        <SwiperSlide>
          <div className="grid p-5 bg-gray-100 md:p-10 md:grid-cols-3 group">
            <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>

            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
                MR. Y. RAMAKOTESWARA RAO
              </div>
              <div className="h-0.5 bg-secondary mt-6 mb-2 w-[50%] duration-300"></div>
              <div className="text-xl ">
                MBA in Marketing & Management (Pune) <br />
                Managing Director Dealer Principal
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid p-5 bg-gray-100 md:p-10 md:grid-cols-3 group">
            <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>{" "}
            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
                MRS. Y. RAMA - DIRECTOR
              </div>
              <div className="h-0.5 bg-secondary mt-6 mb-2 w-[50%] duration-300"></div>
              <div className="text-xl ">
                Bachelor's degree in Science (B.Sc.).
                <br />
                Director Dealer Principal
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid p-5 bg-gray-100 md:p-10 md:grid-cols-3 group">
            <div className="relative flex-col justify-end hidden md:flex">
              <img
                src={require("../assets/homepage/Ramakoteswara.png")}
                alt="MR. Y. RAMAKOTESWARA RAO"
                srcSet=""
                className="absolute bottom-0 left-0 object-cover w-full h-full p-6 rounded-3xl "
              />
              <div className="w-full h-[200px] bg-secondary"></div>
            </div>

            <div className="col-span-2 p-4 my-auto space-y-3 text-left lg:px-6 lg:py-24">
              <div className="mb-3 text-2xl font-semibold uppercase lg:text-3xl">
                MR. RAHUL YALAMANCHILI
              </div>
              <div className="h-0.5 bg-secondary mt-6 mb-2 w-[50%] duration-300"></div>
              <div className="text-xl ">
                MBA (MFAB) <br />
                ISB (Indian School of Business Director)
              </div>
              <div className="">
                Mr. Y. Rama Koteswara Rao, an accomplished leader in the
                automobile industry, serves as the Managing Director and Dealer
                Principal at Orange Auto Pvt Ltd. With a robust background and
                extensive expertise, he has significantly contributed to the
                company's growth and success.
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <div className="h-10"></div> */}
      </Swiper>
    </div>
  );
};

export default LeaderSlider;

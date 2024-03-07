import "swiper/css";

import { useRef } from "react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
// import { GrFormNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// import required modules
import {
  Pagination,
  Autoplay,
  Navigation,
  // EffectCreative,
} from "swiper/modules";

function CarSlider2({ sliders }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  console.log(sliders)

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000 ,
        disableOnInteraction: false}}
        // loop={true}
        grabCursor={true}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {sliders?.map((slider, index) => (
          <SwiperSlide key={index} >
            <img
              src={slider.img}
              className="object-cover w-full h-[88vh] overflow-hidden "
              alt=""
            />
          </SwiperSlide>

          
         
         ))} 

        <div
          ref={navigationPrevRef}
          className="absolute z-10 p-1 rounded-full cursor-pointer left-3 sm:left-10 top-1/2 sm:top-1/2 bg-white/60 hover:bg-[#F17D28] sm:p-3 shadow-xl"
        >
          <GrFormNext className="rotate-180 " />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-1 rounded-full cursor-pointer right-3 sm:right-10 top-1/2 sm:top-1/2 bg-white/60 hover:bg-[#F17D28] sm:p-3 shadow-xl"
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default CarSlider2;

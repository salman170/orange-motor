import "swiper/css";

import { useRef } from "react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
// import { GrFormNext } from "react-icons/gr";
import { BsArrowLeft } from "react-icons/bs";

// import required modules
import {
  Pagination,
  Autoplay,
  Navigation,
  // EffectCreative,
} from "swiper/modules";

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
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
        <SwiperSlide>
          <img
            src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/123683543_216776313206811_4698083266817034754_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=DKQsmxPBizIAX9iQwWs&_nc_ht=scontent-ord5-1.xx&oh=00_AfCKj7ZTeC1oorAKWb0YhAtQ5Jve9j1TfAIhxdinX6QSfA&oe=6601932F"
            className="object-cover w-full h-[88vh] overflow-hidden "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.libertyinsurance.in/images/car-brands/header-tata.jpg"
            className="object-cover w-full h-[88vh] overflow-hidden"
            alt=""
          />
        </SwiperSlide>
        <div className="absolute z-10 justify-between hidden w-full gap-4 md:flex top-[43%] ">
          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full ml-2 cursor-pointer hover:bg-[#F17D28] group border-2 border-white border-dashed  hover:border-solid"
            // onClick={() => setIsTrue(!isTrue)}
            ref={navigationPrevRef}
          >
            <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl group-hover:text-white" />
          </div>

          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white rounded-full mr-2 cursor-pointer hover:bg-[#F17D28] group border-2 border-white border-dashed  hover:border-solid"
            ref={navigationNextRef}
          >
            <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 text-[#FF8041] xl:text-3xl group-hover:text-white" />
          </div>
        </div>
        {/* <div
          ref={navigationPrevRef}
          className="absolute z-10 p-1 rounded-full cursor-pointer left-3 sm:left-10 top-1/2 sm:top-1/2 bg-[#F17D28] sm:p-3"
        >
          <GrFormNext className="text-white rotate-180" />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-1 rounded-full cursor-pointer right-3 sm:right-10 top-1/2 sm:top-1/2 bg-white/60 sm:p-3"
        >
          <GrFormNext />
          
        </div> */}
      </Swiper>
    </>
  );
}

export default Slider;

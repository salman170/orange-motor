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
import { Link } from "react-router-dom";

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        speed={500}
        // autoplay={{ delay: 3000 }}
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
          <div className="relative">
            <img
              src={require("../assets/others/OG Home Banner_1.jpg")}
              className="z-0 object-cover w-full max-h-screen overflow-hidden"
              alt=""
            />
            <div className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32">
              <div className="container mx-auto">
                <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                  Welcome to <br />
                  <span className="text-5xl lg:text-6xl">Tata Motors</span>
                </div>
                <Link
                  to="/tata"
                  className="px-4 py-3 rounded bg-secondary w-min"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={require("../assets/others/jeep_banner.jpg")}
              className="object-cover w-full max-h-screen overflow-hidden"
              alt=""
            />
            <div className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32">
              <div className="container mx-auto">
                <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                  Welcome to <br />
                  <span className="text-5xl lg:text-6xl">All New Jeep</span>
                </div>

                <Link
                  to="/jeep"
                  className="px-4 py-3 rounded bg-secondary w-min"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={require("../assets/others/Nissan-Magnite-May-VLP-Desktop-2880-x-2048.jpg")}
              className="object-cover w-full max-h-screen overflow-hidden"
              alt=""
            />
            <div className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32">
              <div className="container mx-auto">
                <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                  Welcome to <br />
                  <span className="text-5xl lg:text-6xl">Nissan</span>
                </div>

                <Link
                  to="/nissan"
                  className="px-4 py-3 rounded bg-secondary w-min"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="relative">
              <img
                src={require("../assets/others/home-banner-shine-100.webp")}
                className="object-cover w-full h-full overflow-hidden md:h-[75vh] lg:h-screen"
                alt=""
              />

              <div
                to="/tata"
                className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32"
              >
                <div className="container mx-auto">
                  <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                    Welcome to <br />
                    <span className="text-5xl lg:text-6xl">Honda</span>
                  </div>
                  <Link
                    to="/honda"
                    className="px-4 py-3 rounded bg-secondary w-min"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={require("../assets/kawasaki/kawasaki_banner.jpg")}
              className="object-cover w-full h-full overflow-hidden md:h-[75vh] lg:h-screen"
              alt=""
            />
            <div className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32">
              <div className="container mx-auto">
                <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                  Welcome to <br />
                  <span className="text-5xl lg:text-6xl">Kawasaki</span>
                </div>

                <Link
                  to="/kawasaki"
                  className="px-4 py-3 rounded bg-secondary w-min"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={require("../assets/harley-davidson/harley_home_banner.webp")}
              className="object-cover w-full h-full max-h-screen overflow-hidden"
              alt=""
            />
            <div className="absolute z-20 hidden w-full text-white bottom-20 md:block left-4 lg:bottom-32">
              <div className="container mx-auto">
                <div className="w-full mb-4 text-4xl text-secondary lg:mb-6">
                  Welcome to <br />
                  <span className="text-5xl lg:text-6xl">Harley davidson</span>
                </div>

                <Link
                  to="/harley-davidson"
                  className="px-4 py-3 rounded bg-secondary w-min"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

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

export default Slider;

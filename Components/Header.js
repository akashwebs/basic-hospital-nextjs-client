import { Container } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../styles/Header.css";

import { Autoplay, EffectCreative, Pagination } from "swiper";
const Header = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectCreative, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./cover1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./cover1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./cover1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./cover1.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;

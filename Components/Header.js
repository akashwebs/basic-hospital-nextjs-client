import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../styles/Header.css";
import { Autoplay, EffectCreative, Pagination } from "swiper";
import { banners } from "../lib/helper";

export default function Header({ banners }) {
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
      {banners?.map((slider) => (
        <SwiperSlide>
          <img
            src={slider?.bannerImage ? slider?.bannerImage : slider?.extraUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ba from "/photo/bali.webp";
import R from "/photo/R.jpg";
import mald1 from "/photo/mald1.jpg";
import santo from "/photo/santo.avif";
import new1 from "/photo/new1.jpg";
import tokyo from "/photo/tokyo.webp";
import burj from "/photo/Burj Khalifa.jpg";
function Destini() {
 const destinations = [
  { name: "Bali, Indonesia", image: ba },
  { name: "Paris, France", image: R },
  { name: "Maldives", image: mald1 },
  { name: "Santorini, Greece", image: santo },
  { name: "New York, USA", image: new1 },
  { name: "Tokyo, Japan", image: tokyo },
  { name: "Dubai, UAE", image: burj }
];
  return (
    <div className="destination-section">
      <h2 className="section-title">Top Destinations...</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}

        loop={true}       // 🔥 Infinite rotating
        speed={600}       // 🔥 Smooth sliding
        touchRatio={1.1}  // (optional) better mobile swipe

        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 }
        }}
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="destination-card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Destini;

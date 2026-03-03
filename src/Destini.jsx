import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Destini() {
  const destinations = [
    { name: "Bali, Indonesia", image: "/photo/bali.webp" },
    { name: "Paris, France", image: "/photo/R.jpg" },
    { name: "Maldives", image: "/photo/mald1.jpg" },
    { name: "Santorini, Greece", image: "/photo/santo.avif" },
    { name: "New York, USA", image: "/photo/new1.jpg" },
    { name: "Tokyo, Japan", image: "/photo/Tapeta Tokyo _ Osvetljeno mesto in Mount Fuji.jpg" },
    { name: "Dubai, UAE", image: "/photo/Burj Khalifa.jpg" }
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

import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

function Hotels() {
  const hotels = [
    {
      name: "Ocean Paradise Resort",
      location: "Bali, Indonesia",
      image: "/photo/ocean.avif",
      rating: 4.8,
      price: "From $120 "
    },
    {
      name: "Eiffel View Suites",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      rating: 4.7,
      price: "From $140"
    },
    {
      name: "Maldives Coral Villa",
      location: "Maldives",
      image: "/photo/maldives.webp",
      rating: 4.9,
      price: "From $250"
    },
    {
      name: "Santorini White House",
      location: "Santorini, Greece",
      image: "/photo/white.webp",
      rating: 4.6,
      price: "From $180"
    },
    {
      name: "NYC Skylight Hotel",
      location: "New York, USA",
      image: "/photo/newyork.jpg",
      rating: 4.5,
      price: "From $150"
    },
    {
      name: "Tokyo Imperial Stay",
      location: "Tokyo, Japan",
      image: "/photo/tokyo.webp",
      rating: 4.8,
      price: "From $160"
    },
    {
      name: "Dubai Royal Palace",
      location: "Dubai, UAE",
      image: "/photo/royal.jpeg",
      rating: 4.9,
      price: "From $200"
    },
    {
      name: "Swiss Mountain Lodge",
      location: "Switzerland",
      image: "/photo/swi.jpg",
      rating: 4.7,
      price: "From $170"
    }
  ];

  return (
    <div className="hotel-section">
      <h2 className="hotel-title">Best Hotels for Your Stay</h2>

      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} />

            <h3 className="hotel-name">{hotel.name}</h3>

            <p className="hotel-location">
              <FaMapMarkerAlt /> {hotel.location}
            </p>

            <p className="hotel-rating">
              <FaStar className="star" /> {hotel.rating}
            </p>

            <p className="hotel-price">{hotel.price}</p>

            <button className="hotel-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;

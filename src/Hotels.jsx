import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import ocean from "/photo/ocean.avif";
import maldives from "/photo/maldives.webp";
import white from "/photo/white.webp";
import newyork from "/photo/newyork.jpg";
import tokyo from "/photo/tokyo.webp";
import royal from "/photo/royal.jpeg";
import swi from "/photo/swi.jpg";


function Hotels() {
  const hotels = [
    {
      name: "Ocean Paradise Resort",
      location: "Bali, Indonesia",
      image: ocean,
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
      image: maldives,
      rating: 4.9,
      price: "From $250"
    },
    {
      name: "Santorini White House",
      location: "Santorini, Greece",
      image: white,
      rating: 4.6,
      price: "From $180"
    },
    {
      name: "NYC Skylight Hotel",
      location: "New York, USA",
      image: newyork,
      rating: 4.5,
      price: "From $150"
    },
    {
      name: "Tokyo Imperial Stay",
      location: "Tokyo, Japan",
      image: tokyo,
      rating: 4.8,
      price: "From $160"
    },
    {
      name: "Dubai Royal Palace",
      location: "Dubai, UAE",
      image: royal,
      rating: 4.9,
      price: "From $200"
    },
    {
      name: "Swiss Mountain Lodge",
      location: "Switzerland",
      image: swi,
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

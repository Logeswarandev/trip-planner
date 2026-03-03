import React from "react";

function Footer() {
  return (
    <div className="footer-section">

      {/* Footer Content */}
      <div className="footer-content">
        <h2>Explore the World With Us</h2>
        <p>Your journey begins here. Discover new destinations, find the best hotels, plan your perfect trip, and travel without limits.</p>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Destinations</a>
          <a href="#">Hotels</a>
          <a href="#">Contact</a>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <p><i className="bi bi-telephone-fill"></i> +91 98765 43210</p>
          <p><i className="bi bi-envelope-fill"></i> travelplanner@gmail.com</p>
          <p><i className="bi bi-instagram"></i> @travel_planner_official</p>
        </div>

        <p className="copy">© 2026 Travel Planner. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

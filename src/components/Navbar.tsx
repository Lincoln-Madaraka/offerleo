import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import '..styles/Navbar.css'; // Custom styles for navbar
import logo from '../assets/logo.png'; // Make sure logo.png is in assets

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Left: Logo and Brand */}
      <div className="navbar-left">
        <img src={logo} alt="OfferLeo Logo" className="navbar-logo" />
        <div className="navbar-title">
          <h1>OfferLeo</h1>
          <p className="slogan">Shop Smart, Save Hard</p>
        </div>
      </div>

      {/* Center: Navigation */}
      <div className="navbar-center">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Trending Offers</Link>
        <a href="#how-it-works">How It Works</a>
        <a href="#why-join">Why Join</a>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>

      {/* Right: Buttons */}
      <div className="navbar-right">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import '..styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + App Info */}
        <div className="footer-brand">
          <img src={logo} alt="OfferLeo Logo" className="footer-logo" />
          <div>
            <h2>OfferLeo</h2>
            <p className="slogan">Shop Smart, Save Hard</p>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/partner">Partner with Us</Link>
        </div>

        {/* Contact Info + Socials */}
        <div className="footer-contact">
          <a href="tel:+254759725607"><FaPhone />Text/Call Us</a>
          <a href="mailto:madarakalincoln48@gmail.com"><FaEnvelope />Email Us</a>
          <a href="https://twitter.com/syntaxrtx" target="_blank" rel="noopener noreferrer"><FaTwitter />Follow Us on X/Twitter</a>
          <a href="https://instagram.com/kcl_fy" target="_blank" rel="noopener noreferrer"><FaInstagram />Follow Us on Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OfferLeo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

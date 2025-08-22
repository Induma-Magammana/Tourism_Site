import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/" className="brand-link">
                <MapPin className="brand-icon" />
                <span className="brand-text">
                  Discover <span className="brand-highlight">Sri Lanka</span>
                </span>
              </Link>
            </div>
            <p className="footer-description">
              Your ultimate guide to exploring the Pearl of the Indian Ocean. 
              Discover breathtaking destinations, rich culture, and unforgettable experiences 
              across beautiful Sri Lanka.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="social-icon" />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="social-icon" />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/places" className="footer-link">All Places</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><span className="footer-link disabled">Travel Tips</span></li>
              <li><span className="footer-link disabled">Contact</span></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Explore By Category</h3>
            <ul className="footer-links">
              <li><span className="footer-link disabled">Historical Sites</span></li>
              <li><span className="footer-link disabled">Beaches</span></li>
              <li><span className="footer-link disabled">Wildlife</span></li>
              <li><span className="footer-link disabled">Hill Country</span></li>
              <li><span className="footer-link disabled">Religious Sites</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>info@discoversrilanka.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="popular-destinations">
          <h3 className="destinations-title">Popular Destinations</h3>
          <div className="destinations-list">
            <Link to="/place/1" className="destination-link">Sigiriya</Link>
            <Link to="/place/2" className="destination-link">Kandy</Link>
            <Link to="/place/3" className="destination-link">Yala National Park</Link>
            <Link to="/place/4" className="destination-link">Galle Fort</Link>
            <Link to="/place/5" className="destination-link">Ella</Link>
            <Link to="/place/6" className="destination-link">Mirissa</Link>
            <Link to="/place/7" className="destination-link">Adam's Peak</Link>
            <Link to="/place/8" className="destination-link">Nuwara Eliya</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Discover Sri Lanka. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <span className="bottom-link disabled">Privacy Policy</span>
              <span className="bottom-link disabled">Terms of Service</span>
              <span className="bottom-link disabled">Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

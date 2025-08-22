import React from 'react';
import { MapPin, Heart, Users, Award, Globe, Camera } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Discover Sri Lanka</h1>
            <p className="hero-description">
              Your ultimate guide to exploring the Pearl of the Indian Ocean. 
              We're passionate about showcasing the incredible beauty, rich culture, 
              and warm hospitality that makes Sri Lanka truly special.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-description">
                At Discover Sri Lanka, we believe that every traveler deserves to experience 
                the authentic beauty and culture of this incredible island nation. Our mission 
                is to provide comprehensive, accurate, and inspiring information about Sri Lanka's 
                most beautiful destinations, helping you create unforgettable memories.
              </p>
              <p>
                From ancient historical sites to pristine beaches, from misty mountains to 
                wildlife-rich national parks, we carefully curate information about each 
                destination to help you plan the perfect Sri Lankan adventure.
              </p>
            </div>
            <div className="image-content">
              <div className="mission-icon">
                <Heart className="icon" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <MapPin className="value-icon" />
              <h3>Authentic Experiences</h3>
              <p>We promote genuine, local experiences that showcase the true essence of Sri Lankan culture and natural beauty.</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h3>Community Focus</h3>
              <p>We support local communities by highlighting destinations and experiences that benefit local economies.</p>
            </div>
            <div className="value-card">
              <Globe className="value-icon" />
              <h3>Sustainable Tourism</h3>
              <p>We advocate for responsible travel practices that preserve Sri Lanka's environment and cultural heritage.</p>
            </div>
            <div className="value-card">
              <Award className="value-icon" />
              <h3>Quality Information</h3>
              <p>We provide accurate, up-to-date, and detailed information to help you make informed travel decisions.</p>
            </div>
          </div>
        </section>

        {/* About Sri Lanka Section */}
        <section className="sri-lanka-section">
          <h2 className="section-title">About Sri Lanka</h2>
          <div className="sri-lanka-content">
            <div className="content-grid">
              <div className="content-item">
                <h3>🏛️ Rich Heritage</h3>
                <p>
                  Sri Lanka boasts over 2,500 years of recorded history, with 8 UNESCO World Heritage Sites 
                  including ancient cities like Anuradhapura and Polonnaruwa, and the magnificent Sigiriya Rock Fortress.
                </p>
              </div>
              <div className="content-item">
                <h3>🌴 Natural Beauty</h3>
                <p>
                  From golden beaches along 1,340 km of coastline to misty mountain ranges, cascading waterfalls, 
                  and diverse ecosystems, Sri Lanka packs incredible natural diversity into its compact size.
                </p>
              </div>
              <div className="content-item">
                <h3>🦘 Wildlife Wonders</h3>
                <p>
                  Home to Asian elephants, Sri Lankan leopards, blue whales, and hundreds of endemic species. 
                  Our national parks offer some of the best wildlife viewing opportunities in Asia.
                </p>
              </div>
              <div className="content-item">
                <h3>🍛 Culinary Delights</h3>
                <p>
                  Sri Lankan cuisine is a fusion of flavors influenced by various cultures, featuring aromatic 
                  spices, fresh coconut, and diverse preparations from curries to hoppers.
                </p>
              </div>
              <div className="content-item">
                <h3>🎭 Vibrant Culture</h3>
                <p>
                  Experience colorful festivals, traditional dances, ancient crafts, and the warm hospitality 
                  of the Sri Lankan people across diverse ethnic and religious communities.
                </p>
              </div>
              <div className="content-item">
                <h3>☕ Tea Heritage</h3>
                <p>
                  Sri Lankan tea, formerly known as Ceylon tea, is world-renowned. Visit the hill country 
                  to explore lush tea plantations and learn about tea production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="section-title">Sri Lanka at a Glance</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">65,610</div>
              <div className="stat-label">Square Kilometers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">22M+</div>
              <div className="stat-label">Population</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">UNESCO Sites</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">National Parks</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,340</div>
              <div className="stat-label">KM of Coastline</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Major Religions</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about Sri Lankan destinations? Want to share your travel experiences? 
                We'd love to hear from you! Our team is passionate about helping travelers discover 
                the best of Sri Lanka.
              </p>
              <div className="contact-methods">
                <div className="contact-item">
                  <strong>Email:</strong> info@discoversrilanka.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +94 11 234 5678
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> Colombo, Sri Lanka
                </div>
              </div>
            </div>
            <div className="contact-image">
              <Camera className="contact-icon" />
              <p>Share your Sri Lankan adventures with us!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

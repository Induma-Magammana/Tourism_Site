import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Camera } from 'lucide-react';
// import { touristPlaces } from '../data/touristPlaces';
// import PlaceCard from '../components/PlaceCard';
import './HomePage.css';

const HomePage = () => {
  // const featuredPlaces = touristPlaces.slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Discover the Pearl of the <span className="highlight">Indian Ocean</span>
            </h1>
            <p className="hero-description">
              Explore Sri Lanka's breathtaking landscapes, ancient heritage, and vibrant culture. 
              From pristine beaches to misty mountains, from ancient temples to wildlife adventures - 
              your perfect Sri Lankan journey awaits.
            </p>
            <div className="hero-buttons">
              <Link to="/places" className="btn btn-primary">
                Explore Places
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <MapPin className="stat-icon" />
              <span className="stat-number">100+</span>
              <span className="stat-label">Amazing Places</span>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <span className="stat-number">4.8</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Visitors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Sri Lanka?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>Rich Heritage</h3>
              <p>Explore ancient kingdoms, UNESCO World Heritage sites, and archaeological wonders spanning over 2,500 years of history.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌴</div>
              <h3>Tropical Paradise</h3>
              <p>Pristine beaches, crystal-clear waters, and palm-fringed coastlines perfect for relaxation and water sports.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🦘</div>
              <h3>Wildlife Safari</h3>
              <p>Encounter leopards, elephants, and exotic birds in their natural habitat across numerous national parks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏔️</div>
              <h3>Hill Country</h3>
              <p>Cool climate, rolling tea plantations, and breathtaking mountain vistas in the central highlands.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍛</div>
              <h3>Delicious Cuisine</h3>
              <p>Savor authentic Sri Lankan flavors with aromatic spices, fresh seafood, and traditional curries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h3>Vibrant Culture</h3>
              <p>Experience colorful festivals, traditional dances, and warm hospitality of the Sri Lankan people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Places Section - Hidden for now */}
      {/* 
      <section className="featured-places">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-description">
              Discover some of the most popular and breathtaking destinations in Sri Lanka
            </p>
          </div>
          <div className="places-grid">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/places" className="btn btn-outline">
              View All Places
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <Camera className="cta-icon" />
            <h2 className="cta-title">Ready to Start Your Adventure?</h2>
            <p className="cta-description">
              Join thousands of travelers who have discovered the magic of Sri Lanka. 
              Start planning your unforgettable journey today.
            </p>
            <Link to="/places" className="btn btn-primary btn-large">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

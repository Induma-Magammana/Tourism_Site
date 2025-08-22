import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Users, Calendar, Camera, CheckCircle } from 'lucide-react';
import { touristPlaces } from '../data/touristPlaces';
import './PlaceDetailsPage.css';

const PlaceDetailsPage = () => {
  const { id } = useParams();
  const place = touristPlaces.find(p => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="place-details-page">
        <div className="container">
          <div className="not-found">
            <h2>Place not found</h2>
            <p>The place you're looking for doesn't exist.</p>
            <Link to="/places" className="btn btn-primary">
              Back to Places
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const {
    name,
    category,
    location,
    district,
    description,
    highlights,
    bestTimeToVisit,
    entryFee,
    duration,
    difficulty,
    nearbyAttractions,
    facilities,
    image,
    rating,
    reviews
  } = place;

  return (
    <div className="place-details-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src={image || '/images/placeholder.jpg'} 
            alt={name}
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/1200x800/?travel,sri-lanka,${category.toLowerCase().replace(' ', '-')}`;
            }}
          />
          <div className="hero-overlay">
            <div className="container">
              <Link to="/places" className="back-button">
                <ArrowLeft className="back-icon" />
                Back to Places
              </Link>
              <div className="hero-content">
                <div className="place-category">{category}</div>
                <h1 className="place-title">{name}</h1>
                <div className="place-location">
                  <MapPin className="location-icon" />
                  <span>{location}, {district}</span>
                </div>
                <div className="place-rating">
                  <Star className="star-icon" />
                  <span className="rating-value">{rating}</span>
                  <span className="rating-text">({reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="details-content">
          {/* Quick Info */}
          <div className="quick-info">
            <div className="info-card">
              <Clock className="info-icon" />
              <div>
                <h4>Duration</h4>
                <p>{duration}</p>
              </div>
            </div>
            <div className="info-card">
              <DollarSign className="info-icon" />
              <div>
                <h4>Entry Fee</h4>
                <p>{entryFee}</p>
              </div>
            </div>
            <div className="info-card">
              <Users className="info-icon" />
              <div>
                <h4>Difficulty</h4>
                <p>{difficulty}</p>
              </div>
            </div>
            <div className="info-card">
              <Calendar className="info-icon" />
              <div>
                <h4>Best Time</h4>
                <p>{bestTimeToVisit}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div className="content-section">
              <h2>About {name}</h2>
              <p className="description">{description}</p>
            </div>

            <div className="content-section">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <CheckCircle className="check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>Nearby Attractions</h2>
              <div className="nearby-attractions">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="attraction-item">
                    <Camera className="attraction-icon" />
                    <span>{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-section">
              <h2>Facilities & Services</h2>
              <div className="facilities">
                {facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <CheckCircle className="facility-icon" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-section">
              <h2>Planning Your Visit</h2>
              <div className="planning-info">
                <div className="planning-card">
                  <h4>Best Time to Visit</h4>
                  <p>{bestTimeToVisit}</p>
                </div>
                <div className="planning-card">
                  <h4>What to Bring</h4>
                  <ul>
                    <li>Comfortable walking shoes</li>
                    <li>Sun protection (hat, sunscreen)</li>
                    <li>Camera for memorable photos</li>
                    <li>Water bottle</li>
                    {difficulty.includes('challenging') && <li>Energy snacks</li>}
                  </ul>
                </div>
                <div className="planning-card">
                  <h4>Tips</h4>
                  <ul>
                    <li>Arrive early to avoid crowds</li>
                    <li>Respect local customs and traditions</li>
                    <li>Follow designated paths and signs</li>
                    <li>Keep the environment clean</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Quick Facts</h3>
              <div className="fact-item">
                <strong>Category:</strong> {category}
              </div>
              <div className="fact-item">
                <strong>Location:</strong> {location}
              </div>
              <div className="fact-item">
                <strong>District:</strong> {district}
              </div>
              <div className="fact-item">
                <strong>Duration:</strong> {duration}
              </div>
              <div className="fact-item">
                <strong>Difficulty:</strong> {difficulty}
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Share this place</h3>
              <div className="share-buttons">
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn whatsapp">WhatsApp</button>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Explore More</h3>
              <Link to="/places" className="btn btn-outline">
                View All Places
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailsPage;

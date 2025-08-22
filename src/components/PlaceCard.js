import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, DollarSign } from 'lucide-react';
import './PlaceCard.css';

const PlaceCard = ({ place }) => {
  const {
    id,
    name,
    category,
    location,
    description,
    image,
    rating,
    reviews,
    duration,
    entryFee
  } = place;

  return (
    <div className="place-card">
      <div className="card-image">
        <img 
          src={image || '/images/placeholder.jpg'} 
          alt={name}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/800x600/?travel,sri-lanka,${category.toLowerCase().replace(' ', '-')}`;
          }}
        />
        <div className="card-category">{category}</div>
        <div className="card-rating">
          <Star className="star-icon" />
          <span>{rating}</span>
          <span className="reviews-count">({reviews})</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-location">
          <MapPin className="location-icon" />
          <span>{location}</span>
        </div>
        <p className="card-description">{description.substring(0, 120)}...</p>
        
        <div className="card-details">
          <div className="detail-item">
            <Clock className="detail-icon" />
            <span>{duration}</span>
          </div>
          <div className="detail-item">
            <DollarSign className="detail-icon" />
            <span>{entryFee}</span>
          </div>
        </div>
        
        <Link to={`/place/${id}`} className="card-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;

import React from 'react';
import '.styles/TrendingOffers.css';
import { useNavigate } from 'react-router-dom';

const offerImages = [
  { src: require('../assets/offers/offer1.jpeg'), title: '50% Off - Quickmart' },
  { src: require('../assets/offers/offer2.jpeg'), title: 'Buy 1 Get 1 - Naivas' },
  { src: require('../assets/offers/offer3.jpeg'), title: '22% Off - Carrefour' },
  { src: require('../assets/offers/offer4.jpeg'), title: '15% Off - Magunas' },
  { src: require('../assets/offers/offer5.jpeg'), title: '10% Off - Naivas' },
  { src: require('../assets/offers/offer6.jpeg'), title: '30% Off - Carrefour' },
];

const TrendingOffers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div className="trending-section">
      <h2>Trending Offers</h2>
      <div className="trending-grid">
        {offerImages.map((offer, index) => (
          <div className="offer-card" key={index} onClick={handleClick}>
            <img src={offer.src} alt={`Offer ${index + 1}`} />
            <div className="overlay">
              <p>{offer.title}</p>
              <button className="view-btn">Sign up to view</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOffers;

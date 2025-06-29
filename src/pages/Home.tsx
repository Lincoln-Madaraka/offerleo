import React from 'react';
import Background from '../components/BackgroundLoop';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Background />
      <div className="home-content">
        <h1>Welcome to OfferLeo</h1>
        <p>Your one-stop platform for the best offers in town.</p>
      </div>
    </div>
  );
};

export default Home;

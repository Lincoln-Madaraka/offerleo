import React from 'react';
import Background from '../components/BackgroundLoop';
import TrendingOffers from '../components/TrendingOffers';
import '..styles/Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
      <Background />

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to OfferLeo</h1>
          <p>Discover the best deals from your favorite stores in one smart platform.</p>
          <Link to="/signup" className="btn get-started">Get Started</Link>
        </motion.div>
      </section>
      <TrendingOffers/>
      {/* How It Works Section */}
      <section className="info-section" id="how-it-works">
        <h2>How It Works</h2>
        <p>
          OfferLeo aggregates real-time discounts and offers from top retail brands, allowing users to shop smart by seeing the best deals across multiple outlets — all from a single platform.
        </p>
      </section>

      {/* Why Join Section */}
      <section className="info-section" id="why-join">
        <h2>Why Join</h2>
        <p>
          Save money and time by accessing timely, verified offers. No need to hop between apps or websites. OfferLeo empowers smart shoppers with intel that makes every cent count.
        </p>
        <Link to="/signup" className="btn join-now">Join OfferLeo Today</Link>
      </section>
    </div>
  );
};

export default Home;

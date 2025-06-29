import React, { useState } from 'react';
import '../styles/Auth.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Signup submitted!");
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${require('../assets/back3.jpeg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0,0,0,0.7)',
        backgroundBlendMode: 'overlay',
    }}
    >
    


      <form onSubmit={handleSignup} className="auth-form">
        <Link to="/" className="back-arrow">
          <FaArrowLeft /> Back 
        </Link>
        <Link to="/" className="auth-brand">
        <img src={logo} alt="OfferLeo Logo" className="auth-logo" />
        <div className="auth-text">
        <h2>OfferLeo</h2>
        <p className="slogan">Shop Smart, Save Hard</p>
        </div>

        </Link>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn auth-btn">Sign Up</button>
        <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </motion.div>
  );
};

export default Signup;

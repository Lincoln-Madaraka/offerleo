import React, { useState } from 'react';
import '../styles/Auth.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔐 You can connect to backend or Supabase later
    console.log({ email, password });
    toast.success("Login submitted!");
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${require('../assets/back4.jpeg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0,0,0,0.7)',
        backgroundBlendMode: 'overlay',
    }}
    >
      <form onSubmit={handleLogin} className="auth-form">
        <Link to="/" className="back-arrow">
          <FaArrowLeft className="back-icon" /> Back
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn auth-btn">Login</button>
        <p className="auth-switch">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </motion.div>
  );
};

export default Login;

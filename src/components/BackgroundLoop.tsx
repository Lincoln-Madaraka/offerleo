import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '..styles/BackgroundLoop.css';
import back1 from '../assets/back.jpeg';
import back2 from '../assets/back1.jpeg';
import back3 from '../assets/back2.jpeg';
import back4 from '../assets/back3.jpeg';
import back5 from '../assets/back4.jpeg';
import back6 from '../assets/back5.jpeg';
import back7 from '../assets/back6.jpeg';
import back8 from '../assets/back7.jpeg';


const backgrounds = [back1, back1, back2, back3, back4, back5, back6, back7, back8];

const Background: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-wrapper">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={backgrounds[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="background-image"
          alt="Background"
        />
      </AnimatePresence>
    </div>
  );
};

export default Background;

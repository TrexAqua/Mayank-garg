import React from 'react';
import './About.styles.css';
import AboutText from './AboutText/AboutText';
import Aboutcard from './Card/Aboutcard';
import { motion } from 'framer-motion';

const About = () => {
  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
      variants={animations}
    >
      <div className="about">
        <Aboutcard />
        <AboutText />
      </div>
    </motion.div>
  );
};

export default About;

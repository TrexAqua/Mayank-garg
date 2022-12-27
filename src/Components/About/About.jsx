import React, { useState, useEffect } from 'react';
import './About.styles.css';
import AboutText from './AboutText/AboutText';
import Aboutcard from './Card/Aboutcard';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { motion } from 'framer-motion';

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const cardAnim = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };
  return (
    <>
      {loading === true ? (
        <div className="loaderrr">
          <PropagateLoader size={25} color="#0050ff" />
        </div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7 }}
          variants={animations}
        >
          <div className="about">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7 }}
              variants={cardAnim}
            >
              <Aboutcard />
            </motion.div>
            <AboutText />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default About;

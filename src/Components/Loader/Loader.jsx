import React from 'react';
import { motion } from 'framer-motion';
import './Loader.styles.css';
const Loader = () => {
  const main = `Mayank' Garg`;
  const words = main.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04 * i,
      },
    }),
  };
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="loader-con"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        return (
          <motion.span key={index} variants={child} className="little-span">
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default Loader;

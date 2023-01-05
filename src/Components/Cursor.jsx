import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    console.log(mousePos);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);
  const cursorVariants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
    },
  };
  return (
    <motion.div
      animate="default"
      variants={cursorVariants}
      className="cursor"
    />
  );
};

export default Cursor;

import React from 'react';
import './Navbar.styles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cursor from '../Cursor';

const Navbar = () => {
  const [page, setPage] = useState('');

  useEffect(() => {
    const url = window.location.pathname;
    setPage(url);
  }, []);

  return (
    <nav>
      <div className="logo">
        <div className="nav-box"></div>
        <h1>
          <Link to="/">Mayank Garg</Link>
          <span style={{ cursor: 'default' }}>/ WEB DEVELOPER</span>
        </h1>
      </div>
      <div className="nav-links">
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={page === '/' ? 'active-link' : 'nav-link'}
          >
            <Link to="/">ABOUT ME</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={page === '/projects' ? 'active-link' : 'nav-link'}
          >
            <Link to="/projects">PROJECTS</Link>{' '}
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={page === '/contact' ? 'active-link' : 'nav-link'}
          >
            <Link to="/contact">CONTACT</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

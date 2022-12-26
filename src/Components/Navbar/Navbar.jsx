import React from 'react';
import './Navbar.styles.css';
import { useState, useEffect } from 'react';
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
          <a href="/">Mayank Garg</a>
          <span style={{ cursor: 'default' }}>/ WEB DEVELOPER</span>
        </h1>
      </div>
      <div className="nav-links">
        <ul>
          <li className={page === '/' ? 'active-link' : 'nav-link'}>
            <a href="/">ABOUT ME</a>
          </li>
          <li className={page === '/projects' ? 'active-link' : 'nav-link'}>
            <a href="/projects">PROJECTS</a>{' '}
          </li>
          <li className={page === '/contact' ? 'active-link' : 'nav-link'}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

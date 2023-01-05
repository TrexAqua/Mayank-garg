import React from 'react';
import './Aboutcard.styles.css';
import SocialCard from './SocialCard/SocialCard';
import { motion } from 'framer-motion';
const Aboutcard = () => {
  return (
    <div className="main-about">
      <div className="about-card">
        <div className="about-card-elements">
          <div>
            <img
              className="me"
              alt="Me"
              src="https://static.wixstatic.com/media/aa97c7_81d40146fe4f44349fa678597157b923~mv2.jpg/v1/crop/x_1661,y_524,w_2132,h_2132/fill/w_205,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_8607_JPG.jpg"
            />
            <h2 className="about-card-name">
              Mayank
              <br />
              Garg
              <div className="line-div"></div>
            </h2>
          </div>
          <h3>WEB DEVELOPER</h3>
          <div className="mobile-buttons">
            <a
              style={{ color: 'white' }}
              className="about-projects"
              href="/projects"
            >
              PROJECTS
            </a>
            <a className="about-contacts" href="/contact">
              CONTACTS
            </a>
          </div>
        </div>
        <SocialCard />
      </div>
      <div className="about-text">
        <div className="about-headings">
          <h1>Hello</h1>
          <h3>Here's who I am & what I do</h3>
          <div className="about-buttons">
            <motion.a
              whileHover={{
                scale: 1.1,
                transition: '2s',
              }}
              whileTap={{
                scale: 0.9,
              }}
              style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
              className="about-projects"
              href="/projects"
            >
              PROJECTS
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.1,
                transition: '2s',
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="about-contacts"
              href="/contact"
            >
              CONTACTS
            </motion.a>
          </div>
        </div>
        <div className="about-para">
          <p>
            Hello! My name is Mayank and I enjoy creating things that live on
            the internet and your computers. My interest in web development
            started back in 2020 when my friend told me about web development
            and it turns out messing around in the code editor with google,
            taught me a lot about HTML, CSS and Javascript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;

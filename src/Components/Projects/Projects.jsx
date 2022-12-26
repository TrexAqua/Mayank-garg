import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Projects.styles.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
const Projects = () => {
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
      <Navbar />
      <div className="project-container">
        <div className="project-intro">
          <div className="project-intro-heading">
            <div className="project-intro-block"></div>
            <h2>Projects</h2>
          </div>
          <div className="project-intro-p">
            <p>
              Jumping to the present i had the privillege of local freelancing
              and on fiverr as well with the knowledge of advanced javascript
              frameworks like react, connecting from APIs, working with
              different databases and a game development engine called Unreal
              Engine 4. <br />I have completed a React JS course to refine my
              skills, did some{' '}
              <a
                style={{
                  textDecoration: 'underline',
                }}
                href="https://www.fiverr.com/trexaqua_"
              >
                Fiverr
              </a>{' '}
              projects as well to earn some experience and got my hands on some
              freelancing by networking through discord
            </p>
          </div>
          <svg
            className="down-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z" />
          </svg>
        </div>
        <div className="project-card-container">
          <ProjectCard
            Name={'Filmpire Movie App'}
            MediaType="Video"
            Media="https://video.wixstatic.com/video/aa97c7_6f1faefb3a2d47b483fa97bdb8b66beb/720p/mp4/file.mp4"
            Description="Filmpire is an movie information app much like IMBD which fetches data from an api and displays the information about various movies and artists with real ratings and reviewss.This project was made using Javascript, React, Redux and some more libraries following with a course"
            Link="https://filmpire-ta.netlify.app/"
          />
          <ProjectCard
            Name="Red Forest Made In UE4"
            MediaType="Image"
            Media="https://static.wixstatic.com/media/aa97c7_cc1a5af81f7941f2873af88724a16705~mv2.jpg/v1/fill/w_404,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/273041869_361968005743431_6657941296919198340_n.jpg"
            Description="Made this realistic red wood forest in Unreal Engine 4 for a client, Main focus was on light, camera composition and post processing. Used red wood forest pack from Unreal Marketplace and landscape tools for overall land composition.​"
            Link="https://www.instagram.com/p/CZZ_6kvPlHa/"
          />
          <ProjectCard
            Name="Deserted Town"
            MediaType="Image"
            Media="https://static.wixstatic.com/media/aa97c7_f036079219cf48a3a077e4f130e4d5e3~mv2.jpg/v1/fill/w_404,h_227,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/278344658_375374901120183_8107925013405826649_n.jpg"
            Description={`It was a big project as I was making a whole wild west town, I used western desert town asset pack from the unreal marketplace:Western Desert Town by KK Design.
            Whole map is playable and optimized for 4K 60fps`}
            Link="https://www.instagram.com/p/CcPHwvFvbrP/"
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Projects;

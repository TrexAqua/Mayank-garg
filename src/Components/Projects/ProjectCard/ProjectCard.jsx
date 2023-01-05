import React from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';
const ProjectCard = ({ Name, MediaType, Media, Description, Link }) => {
  return (
    <motion.a whileHover={{}}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="card-project"
      >
        <div className="project-info">
          <div className="project-heading">
            <div className="project-tag"></div>
            <h2>
              <a href={Link}>{Name}</a>
            </h2>
          </div>
          <p className="project-description">{Description}</p>
        </div>
        <div className="project-media">
          {MediaType === 'Video' ? (
            <iframe
              width="420"
              height="220"
              src={Media}
              title="Filmpire Application made from React JS and TMDB API"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img src={Media} width="420" alt="projectImage" />
          )}
        </div>
      </motion.div>
    </motion.a>
  );
};

export default ProjectCard;

import React from 'react';
import './ProjectCard.css';
const ProjectCard = ({ Name, MediaType, Media, Description, Link }) => {
  return (
    <>
      <div className="card-project">
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
            <video
              loop="true"
              autoPlay="true"
              muted
              controls
              src={Media}
              width="420"
              height="220"
            />
          ) : (
            <img src={Media} width="420" alt="projectImage" />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

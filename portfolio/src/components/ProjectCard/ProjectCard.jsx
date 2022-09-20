import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  imageURL,
  imageAlt,
  description,
  technology,
  projectUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <span className="project-card-title">{title}</span>
      <div className="project-card-inner">
        <div className="project-card-image-container">
          <img className="project-card-image" src={imageURL} alt={imageAlt} />
          <div className="project-card-button-container">
            <a href={codeUrl} target="_blank" rel="noreferrer">
              Code
            </a>
            <a href={projectUrl} target="_blank" rel="noreferrer">
              Project
            </a>
          </div>
        </div>

        <div className="project-card-content">
          <div>Description</div>
          <div className="project-card-description">
            <p>{description}</p>
          </div>
          <div>Technology</div>
          <div className="project-card-technology">
            {technology.map((tech) => {
              return <div>&gt; {tech}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

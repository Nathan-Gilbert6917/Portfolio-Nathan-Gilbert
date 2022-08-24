import React from "react";

import "./Portfolio.css";

import ChevronIcon from "../Icons/ChevronIcon";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = ({ isOpen, stateToggle }) => {
  let portfolioClassName = isOpen ? "portfolio open" : "portfolio";

  const projects = [
    {
      title: "Project 1",
      imageURL: "./background.jpg",
      imageAlt: "Project 1 Image",
      description:
        "Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id. Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id.",
      technology: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    },
    {
      title: "Project 2",
      imageURL: "./background.jpg",
      imageAlt: "Project 2 Image",
      description:
        "Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id. Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id.",
      technology: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    },
    {
      title: "Project 3",
      imageURL: "./background.jpg",
      imageAlt: "Project 3 Image",
      description:
        "Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id. Et non est est reprehenderit ad. Enim ea aliquip reprehenderit enim sunt eu ut quis laboris in veniam ullamco officia. Exercitation labore qui magna irure voluptate proident. Nostrud dolore nisi ullamco id.",
      technology: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    },
  ];

  return (
    <div className={portfolioClassName}>
      <div className="portfolio-content-container">
        <div className="portfolio-content-header">Portfolio</div>
        <div className="portfolio-projects-container">
          <div className="wrapper">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  imageURL={project.imageURL}
                  imageAlt={project.imageAlt}
                  description={project.description}
                  technology={project.technology}
                />
              );
            })}
          </div>
        </div>
      </div>

      <button className="portfolio-btn-container" onClick={() => stateToggle()}>
        Collapse
        <ChevronIcon isUp={false} />
      </button>
    </div>
  );
};

export default Portfolio;

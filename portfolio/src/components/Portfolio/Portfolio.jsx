import React from "react";

import "./Portfolio.css";

import ChevronIcon from "../Icons/ChevronIcon";
import ProjectCard from "../ProjectCard/ProjectCard";

import projectOneImage from "../../images/portfolio.png";
import projectTwoImage from "../../images/components.png";
import projectThreeImage from "../../images/auth.png";

const Portfolio = ({ isOpen, stateToggle }) => {
  let portfolioClassName = isOpen ? "portfolio open" : "portfolio";

  const projects = [
    {
      title: "Portfolio Website",
      image: projectOneImage,
      imageAlt: "Project 1 Image",
      codeUrl: "https://github.com/Nathan-Gilbert6917/Portfolio-Nathan-Gilbert",
      projectUrl:
        "https://nathan-gilbert6917.github.io/Portfolio-Nathan-Gilbert/",
      description:
        "Portfolio Website, all in one spot to view multiple projects as well as access my Resume and media links. Built using React.js while I was visiting my father in California over the Summer of 2022.",
      technology: ["React.js", "HTML", "JS", "CSS"],
    },
    {
      title: "React Components",
      image: projectTwoImage,
      imageAlt: "Project 2 Image",
      codeUrl:
        "https://github.com/Nathan-Gilbert6917/Nathan-Gilbert-React-Components",
      projectUrl: "https://heartfelt-concha-e7eece.netlify.app/",
      description:
        "A library of sorts of React components built by me. I use this project to test out new react components. These components can be easily moved to a project I am working on.",
      technology: ["React.js", "HTML", "JS", "CSS"],
    },
    {
      title: "KillTeamManager WIP",
      image: projectThreeImage,
      imageAlt: "Project 3 Image",
      codeUrl: "https://github.com/Nathan-Gilbert6917/KillTeamManager",
      projectUrl: "https://github.com/Nathan-Gilbert6917/KillTeamManager",
      description:
        "Summer 2022 project that is still a work in progress. The web app is for managing your teams for a table top game called Kill Team. This web app utilizes the MERN stack in addition to Mongoose and Redux. Currently the only working features is user account creation and user authentication. I am working on having the user have access to CRUD abilities for their collections of teams, operatives, weapons, rules, abilities and actions. After this I plan to implement a system to track the traits and values of the users operatives during a match.",
      technology: [
        "React.js",
        "node.js",
        "express",
        "MongoDB",
        "Mongoose",
        "Redux",
        "HTML/JS/CSS",
      ],
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
                  image={project.image}
                  imageAlt={project.imageAlt}
                  description={project.description}
                  technology={project.technology}
                  codeUrl={project.codeUrl}
                  projectUrl={project.projectUrl}
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

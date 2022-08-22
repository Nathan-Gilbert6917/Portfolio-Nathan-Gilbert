import React, { useState } from 'react'
import './App.css';

import Portfolio from "../Portfolio/Portfolio"
import { saveAs } from "file-saver";

// Icons 
import GitHubIcon from "../Icons/GitHubIcon";
import MailIcon from "../Icons/MailIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import ChevronIcon from "../Icons/ChevronIcon";

function App() {

  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + "/Nathan_Gilbert_Resume.pdf",
      "Nathan_Gilbert_Resume.pdf"
    );
  }

  const [isOpen, setOpen] = useState(false);

  const togglePortfolio = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  }

  return (
    <div className="app">
      <div className="navbar">
        <span className="name-container">
          <b>
            <span className="first">Nathan</span>
            <span className="last">Gilbert</span>
          </b>
        </span>
        <span className="nav-links">
          <a href="mailto: nag6917@g.rit.edu"><MailIcon/></a>
          <a href="https://www.linkedin.com/in/nathangilbert6917/"><LinkedInIcon/></a>
          <a href="https://github.com/Nathan-Gilbert6917"><GitHubIcon/></a>
        </span>
      </div>
      <div className="page-content-container">
        <div>
          <span className="page-content-header">Hello, I am Nathan</span>
          <div className="divider-container">
            <span className="title"><b>Software Engineer</b></span>
          </div>
        </div>
        <div>
          <button onClick={() => saveFile()} className="resume-btn">Resume</button>
        </div>
      </div>
      <div className="footer">
        <button className="portfolio-btn-container" onClick={() => togglePortfolio()}>
          Portfolio
          <ChevronIcon />
        </button>
      </div>
      <Portfolio isOpen={isOpen} stateToggle={togglePortfolio}/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { saveAs } from "file-saver";

// Icons
import GitHubIcon from "../Icons/GitHubIcon";
import MailIcon from "../Icons/MailIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

function App() {
  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + "/Nathan_Gilbert_Resume.pdf",
      "Nathan_Gilbert_Resume.pdf"
    );
  };
  const path = "https://www.nathangilbert.website";

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
          <a href="mailto: nag6917@g.rit.edu">
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nathangilbert6917/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Nathan-Gilbert6917"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </span>
      </div>
      <div className="page-content-container">
        <div>
          <span className="page-content-header">Hello, I am Nathan</span>
          <div className="divider-container">
            <span className="title">
              <b>&lt;SoftwareEngineer /&gt;</b>
            </span>
          </div>
        </div>
        <div>
          <button onClick={() => saveFile()} className="resume-btn">
            Resume
          </button>
        </div>
      </div>
      <div className="footer">

              <a
                  className="portfolio-btn"
                  href={path}
                  target="_blank"
                  rel="noreferrer"
              >
                  Portfolio
              </a>
      </div>
    </div>
  );
}

export default App;

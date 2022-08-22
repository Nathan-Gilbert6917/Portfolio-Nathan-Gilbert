import React from 'react'

import './Portfolio.css';

import ChevronIcon from "../Icons/ChevronIcon";
import Carousel from "../Carousel/Carousel";

const Portfolio = ({ isOpen, stateToggle }) => {

  let portfolioClassName = isOpen ? "portfolio open" : "portfolio";

  return(
    <div className={portfolioClassName}>

      <div className="page-content-container">
        <span className="page-content-header">Portfolio</span>
        <div>
          <Carousel/>
        </div>
        
      </div>

      <button className="portfolio-btn-container" onClick={() => stateToggle()}>
        Portfolio
        <ChevronIcon isUp={false}/>
      </button>
    </div>
  ) 
}

export default Portfolio
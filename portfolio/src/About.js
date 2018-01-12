import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PortfolioPreview from './PortPreview';

var Col = require('react-bootstrap').Col;

class About extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={10} mdOffset={1}>
        <div className="about--container">
          <h2 className="text-center">Bio</h2>
          <div className="caption">
            WARDROBE. HAIR. MAKEUP.
          </div>
          <Col xs={12} md={10} mdOffset={1}>
            <p className="text-center">Margarita got her start in the industry by designing sets and costumes for local high schools and community colleges in her hometown of Manteca, Ca. She moved to San Francisco in 2012 where she received her Bachelors degree in Technical Theatre and Design from San Francisco State. Since then, her work and designs have been recognized by Theatre Bay Area Awards <i>(In Hollow Times)</i> and Theatre Eddy <i>(Chicago).</i> Recent collborations include: Palo Alto Childrens Theatre, Palo Alto Players, San Jose Stage Company, and most recently American Conservatory Theatre where she is the acting Wardrobe Supervisor for their MFA program.</p>
            <button className="button align-middle mt-2"><a href="images/resume.pdf" download> Download Resume</a></button>
          </Col>
        </div>
      </Col>
        <PortfolioPreview/>
    </div>
    );
  }
}

export default About;

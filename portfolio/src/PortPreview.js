import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Bootstrap Stuff
var Col = require('react-bootstrap').Col;

class PortfolioPreview extends Component {
  render() {
    return (
      <div>
      <Col xs={12} md={10} mdOffset={1} className="container no-padding">
        <hr className="mt-3"/>
      </Col>  
        <Col xs={12} md={10} mdOffset={1} className="container">
            <h2 className="text-center">Portfolio</h2>
            <div className="masonry">
              <div className="item">
                <img src="../images/portfolio/Chicago_1.jpg" alt="portfolio"/>
              </div>
              <div className="item">
                <img src="../images/portfolio/InHollowTime_6.jpg" alt="portfolio"/>
              </div>
              <div className="item">
                <img src="../images/portfolio/ChildrensTheatre_1.jpg" alt="portfolio"/>
              </div>
              <div className="item">
                <img src="../images/portfolio/InHollowTime_5.jpg" alt="portfolio"/>
              </div>
              <div className="item">
                <img src="../images/portfolio/Chicago_4.jpg" alt="portfolio"/>
              </div>
              <div className="item">
                <img src="../images/portfolio/ChildrensTheatre_7.jpg" alt="portfolio image"/>
              </div>
            </div>
      </Col>
    </div>
    );
  }
}

export default PortfolioPreview;

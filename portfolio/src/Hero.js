import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Bootstrap Stuff
var Jumbotron = require('react-bootstrap').Jumbotron;

class Hero extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <img src="../images/hero_img.jpg" alt="hero"/>
          <div className="hero-copy">
            <h1> Dream. Design. Create.</h1>
          </div>
            <div className="container see-more">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
      </Jumbotron>
    </div>
    );
  }
}

export default Hero;

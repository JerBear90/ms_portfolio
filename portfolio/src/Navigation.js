import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Hero from './Hero';
import About from './About';
import Comingup from './Comingup';
import Contact from './Contact';
import Footer from './Footer';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="container">
          <div className="logo-container">
          <h2>Margarita Prado</h2>
          </div>
          <div className="jobtitle-container">
          <h4>Wardrobe Extraordinaire</h4>
          </div>
        </nav>
        <a name="home"></a>
      <div className="nav-subbar">
        <ul className="container">
          <li><a href="/home">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/bio">Bio</a></li>
          <li><a href="/comingup">Coming up</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <Hero/>
      <About/>
      <Comingup/>
      <Contact/>
      <Footer/>
    </div>
    );
  }
}

export default Navigation;

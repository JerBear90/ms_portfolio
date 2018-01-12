import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Bootstrap Stuff
var Col = require('react-bootstrap').Col;

class Footer extends Component {
  render() {
    return (
      <div>
        <Col xs={12} className="black--background">
          <footer className="container text-center">
            <h4>Margarita Prado</h4>
            <p>© 2023 by Margarita Prado. Proudly created by <a href="http://jf-wd.com">Jf-wd.com</a></p>
          </footer>
        </Col>
    </div>
    );
  }
}

export default Footer;

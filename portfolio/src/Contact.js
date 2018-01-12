import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
var Col = require('react-bootstrap').Col;

class Contact extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={10} mdOffset={1} className="container no-padding">
          <hr className="mt-3"/>
        </Col> 
          <Col xs={12} className="text-center">
            <div className="container">
              <div>
                <h2>Contact Me</h2>
                <p>For promotional and business collaborations, or for any personal questions, you can reach me here:</p>
                <p><a href="mailto:missmaggie143@gmail.com"> missmaggie143@gmail.com</a></p>
              </div>
              <div className="mt-2">
                <a href="#home">
                  <span className="glyphicon glyphicon-menu-up"></span>
                <h4 className="back-to-top">Back to top</h4>
              </a>
              </div>
            </div>
          </Col>

      </div>
    );
  }
}

export default Contact;

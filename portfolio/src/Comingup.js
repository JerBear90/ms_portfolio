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
        <Col xs={12} md={10} mdOffset={1}>
          <Col xs={12} md={6} className="">
            <div className="">
              <div>
                <h2>Contact Me</h2>
                <p>For promotional and business collaborations, or for any personal questions, you can reach me here:</p>
                <p><a href="mailto:missmaggie143@gmail.com"> missmaggie143@gmail.com</a></p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="">
            <div className="">
              <div>
                <h2>Contact Me</h2>
                <p>For promotional and business collaborations, or for any personal questions, you can reach me here:</p>
                <p><a href="mailto:missmaggie143@gmail.com">missmaggie143@gmail.com</a></p>
              </div>
            </div>
          </Col>
        </Col>    
      </div>
    );
  }
}

export default Contact;

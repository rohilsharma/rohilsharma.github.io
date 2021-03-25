import React, { Component } from 'react';
import './App.css';
import Birthday from './Components/Birthday';

class BirthdayApp extends Component {

  render() {
    return (
      <div className="BirthdayApp">
        <Birthday />
      </div>
    );
  }
}

export default BirthdayApp;

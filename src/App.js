import React, { Component } from 'react';
import './App.css';
import API from './api/axios';
import Cat from './components/Cat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kissa Omistaja</h1>
        <h3>Sovellus kissoille ja omistajille</h3>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import API from './api/axios';
import Cat from './components/Cat';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar>
        <Nav>
          <MenuItem>Home</MenuItem>
          <MenuItem>Kissat</MenuItem>
          <MenuItem>Omistajat</MenuItem>
        </Nav>
      </Navbar>
        <h1>Kissa Omistaja</h1>
        <h3>Sovellus kissoille ja omistajille</h3>
      </div>
    );
  }
}

export default App;

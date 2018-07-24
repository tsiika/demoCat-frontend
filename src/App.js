import React, { Component } from 'react';
import './styles/index.css';
import Navi from './components/Navi';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navi />
      </div>
    );
  }
}

export default App;

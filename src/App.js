import React, { Component } from 'react';
import './styles/index.css';
import Navi from './components/Navi';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

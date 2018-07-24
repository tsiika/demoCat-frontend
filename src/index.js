import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Home from './modules/Home';
import Cat from './components/Cat';
import Owner from './components/Owner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <App />
        </div>
    </Router>, 
    
    document.getElementById('root')
);
registerServiceWorker();

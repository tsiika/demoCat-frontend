import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';
import './index.css';
import App from './App';
import Cat from './components/Cat';
import Owner from './components/Owner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Cat />
            <Owner />
        </div>
    </Router>, 
    
    document.getElementById('root')
);
registerServiceWorker();

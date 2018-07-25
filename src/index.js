import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  } from 'react-router-dom';
import './styles/index.css';
import App from './App';

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

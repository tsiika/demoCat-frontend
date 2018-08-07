import React, { Component } from 'react';
import '../styles/index.css';
import Home from '../modules/Home';
import Cat from '../components/Cat/Cat';
import Owner from '../components/Owner/Owner';
import User from '../components/User/User';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class Navi extends Component {
render() {
    return (
        <div className="container">
            <Navbar>
                <Nav>
                    <MenuItem><Link to="/">Koti</Link></MenuItem>
                    <MenuItem><Link to="/kissa">Kissa</Link></MenuItem>
                    <MenuItem><Link to="/omistaja">Omistaja</Link></MenuItem>
                    <MenuItem><Link to="/kayttaja">Käyttäjä</Link></MenuItem>
                </Nav>
            </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/kissa" component={Cat} />
                    <Route path="/omistaja" component={Owner} />
                    <Route path="/kayttaja" component={User} />
                </Switch>
        </div>
        );
    }
}

export default Navi;

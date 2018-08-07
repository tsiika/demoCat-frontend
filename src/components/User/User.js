import React, { Component } from 'react';
import axios from 'axios';
/*
import oNew from './oNew';
import oEdit from './oEdit.js';
import oDelete from './oDelete.js';
*/

import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
        user_data: []
        };
    }

    componentDidMount() {
    axios.get('/demo/users/')
        .then(res => {
            this.setState({ user_data: res.data });
            console.log(this.state.user_data);
        })
        .catch((error) => {
            if(error.response.status === 401) {
                console.log(401);
            }
        });
    }

    render() {
    return (
        <div className="container">
        <h2>Omistajat: </h2>
            <table>
            <tbody>
                <tr>
                    <th>Nimimerkki</th>
                    <th>Luotu</th>
                    <th>Omistaja tiedot</th>
                    <th>Kissat</th>
                </tr>
                {this.state.user_data.map((user) =>
                    <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.created}</td>
                        <td>{user.ownerInfo}</td>
                        <td>{user.catInfo}</td>
                    </tr>
                )}
            </tbody>
            </table><br/>
            {/*
            <Link to='/omistaja/new/'><FontAwesomeIcon icon={faPlusCircle} /> Lisää omistaja</Link>
            <Switch>
                <Route path="/omistaja/new/" component={oNew} />
                <Route path="/omistaja/edit/:id" component={oEdit} />
                <Route path="/omistaja/delete/:id" component={oDelete} />
            </Switch>*/}
    </div>
    );
    }
}

export default User;

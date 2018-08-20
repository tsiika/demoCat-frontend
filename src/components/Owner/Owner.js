import React, { Component } from 'react';
import axios from 'axios';
import oNew from './oNew';
import oEdit from './oEdit.js';
import oDelete from './oDelete.js';

import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


class Owner extends Component {

    constructor(props) {
        super(props);
        this.state = {
        owner_data: []
        };
    }

    componentDidMount() {
      axios.get('/demo/owners/')
        .then(res => {
            this.setState({ owner_data: res.data });
            console.log(this.state.owner_data);
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
                    <th>Omistajan ID</th>
                    <th>Nimi</th>
                    <th>Kaupunki</th>
                    <th>Työkalut</th>
                </tr>
                {this.state.owner_data.map((owner) =>
                    <tr key={owner._id}>
                        <td>{owner._id}</td>
                        <td>{owner.fullname}</td>
                        <td>{owner.city}</td>
                        <td>
                          <Link to={`/omistaja/edit/${owner._id}`}>Muokkaa</Link> &nbsp;
                          <Link to={`/omistaja/delete/${owner._id}`}>Poista</Link>
                        </td>
                    </tr>
                )}
            </tbody>
            </table><br/>
            <Link to='/omistaja/new/'><FontAwesomeIcon icon={faPlusCircle} /> Lisää omistaja</Link>
            <Switch>
                <Route path="/omistaja/new/" component={oNew} />
                <Route path="/omistaja/edit/:id" component={oEdit} />
                <Route path="/omistaja/delete/:id" component={oDelete} />
            </Switch>
    </div>
    );
    }
}

export default Owner;

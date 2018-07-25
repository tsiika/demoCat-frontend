import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import oEdit from './oEdit.js';
import oDelete from './oDelete.js';


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
        <p>Omistajat: </p>
            <table>
                <tr>
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>Kaupunki</th>
                    <th>Työkalut</th>
                </tr>
                {this.state.owner_data.map((owner) =>
                    <tr key={owner._id}>
                        <td>{owner.first_name}</td>
                        <td>{owner.family_name}</td>
                        <td>{owner.city}</td>
                        <td>
                        <Link to={`/omistaja/edit/${owner._id}`}>Muokkaa</Link> &nbsp;
                        <Link to={`/omistaja/delete/${owner._id}`}>Poista</Link>
                        </td>
                    </tr>
                )}
            </table><br/>
            <Switch>
                <Route path="/omistaja/edit/:id" component={oEdit} />
                <Route path="/omistaja/delete/:id" component={oDelete} />
            </Switch>
    </div>
    );
    }
}

export default Owner;
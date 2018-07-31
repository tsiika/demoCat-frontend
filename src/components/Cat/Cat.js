import React, { Component } from 'react';
import axios from 'axios';
import cNew from './cNew';
import cEdit from './cEdit';
import cDelete from './cDelete';

import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';



class Cat extends Component {

    constructor(props) {
        super(props);
        this.state = {
        cat_data: []
        };
    }

    componentDidMount() {
      axios.get('/demo/cats/')
        .then(res => {
            this.setState({ cat_data: res.data });
            console.log(this.state.cat_data);
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
        <h2>Kissat: </h2>
        <table>
          <tbody>
            <tr>
                <th>Nimi</th>
                <th>Ikä</th>
                <th>Työkalut</th>
            </tr>
            {this.state.cat_data.map((cat) =>
                <tr key={cat._id}>
                    <td>{cat.name}</td>
                    <td>{cat.age}</td>
                    <td>
                        <Link to={`/kissa/edit/${cat._id}`}>Muokkaa</Link> &nbsp;
                        <Link to={`/kissa/delete/${cat._id}`}>Poista</Link>
                    </td>
                </tr>
            )}
          </tbody>
        </table><br/>
        <Link to='/kissa/new/'><FontAwesomeIcon icon={faPlusCircle} /> Lisää kissa</Link>
        <Switch>
            <Route path="/kissa/new/" component={cNew} />
            <Route path="/kissa/edit/:id" component={cEdit} />
            <Route path="/kissa/delete/:id" component={cDelete} />
        </Switch>
        </div>
    );
    }
}

export default Cat;

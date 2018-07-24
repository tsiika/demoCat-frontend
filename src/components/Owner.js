import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



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
                        <td>X</td>
                    </tr>
                )}
            </table>
    </div>
    );
    }
}

export default Owner;
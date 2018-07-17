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
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>City</th>
            </tr>
            {this.state.owner_data.map((owner) =>
                <tr key={owner._id}>
                    <td>{owner.first_name}</td>
                    <td>{owner.family_name}</td>
                    <td>{owner.city}</td>
                </tr>
            )}
    </div>
    );
    }
}

export default Owner;
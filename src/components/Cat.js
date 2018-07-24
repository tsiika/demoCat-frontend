import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



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
        <p>Kissat: </p>
            <table>
            <tr>
                <th>Nimi</th>
                <th>Ikä</th>
                <th>Työkalut</th>
            </tr>
            {this.state.cat_data.map((cat) =>
                <tr key={cat._id}>
                    <td>{cat.name}</td>
                    <td>{cat.age}</td>
                    <td>X</td>
                </tr>
                )}
            </table>
        </div>
    );
    }
}

export default Cat;
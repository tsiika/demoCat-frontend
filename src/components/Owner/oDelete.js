import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';




class oDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
        owner_data: []
        };
    }

    componentDidMount() {
        axios.get('/demo/owners/'+this.props.match.params.id)
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
        
        delete(id){
            console.log(id);
            axios.delete('/demo/owners/'+this.props.match.params.id)
                .then((result) => {
                    this.props.history.push('/omistaja')
                });
        }

        

    render() {
    return (
        <div className="container">
            <h2>Olet poistamassa käyttäjää:</h2>
            {this.state.owner_data.map((owner) =>
            <dl key={owner._id}>
                    <dt>Nimi:</dt>
                    <dd>{owner.first_name}&nbsp;{owner.family_name}</dd><br/>

                    <dt>Kaupunki:</dt>
                    <dd>{owner.city}</dd><br/>

                    <dt>ID-tunnus:</dt>
                    <dd>{owner._id}</dd><br/>


            <h3>Oletko varma? <b>Poistamista ei voi perua!</b></h3>

            <Button onClick={this.delete.bind(this, this.state.owner_data._id)} className="btn btn-danger">Poista</Button>
            </dl>
            )}
        </div>

        );
    }
}

export default oDelete;
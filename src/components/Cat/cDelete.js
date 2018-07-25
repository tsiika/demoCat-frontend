import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';




class cDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
        cat_data: []
        };
    }

    componentDidMount() {
        axios.get('/demo/cats/'+this.props.match.params.id)
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
        
        delete(id){
            console.log(id);
            axios.delete('/demo/cats/'+this.props.match.params.id)
                .then((result) => {
                    this.props.history.push('/kissa')
                });
        }

        

    render() {
    return (
        <div className="container">
            <h2>Olet poistamassa seuraavaa kissaa:</h2>
            {this.state.cat_data.map((cat) =>
            <dl key={cat._id}>
                    <dt>Nimi:</dt>
                    <dd>{cat.name}</dd><br/>

                    <dt>Ikä:</dt>
                    <dd>{cat.age}</dd><br/>

                    <dt>ID-tunnus:</dt>
                    <dd>{cat._id}</dd><br/>


            <h3>Oletko varma? <b>Poistamista ei voi perua!</b></h3>

            <Button onClick={this.delete.bind(this, this.state.cat_data._id)} className="btn btn-danger">Poista</Button>
            </dl>
            )}
        </div>

        );
    }
}

export default cDelete;
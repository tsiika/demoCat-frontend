import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class cEdit extends Component {

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
        
        onChange = (e) => {
            var state = this.state.cat_data
            state[e.target.name] = e.target.value;
            this.setState({cat_data: state});
            }
    
        onSubmit = (e) => {
            e.preventDefault();

            var { name, age } = this.state.cat_data;

            axios.put('/demo/cats/'+this.props.match.params.id, { name, age })
                .then((result ) => {
                    console.log(result);
                })
                .catch((error) => {
                    if(error.response.status === 500) {
                        console.log(500);
                    }
                });
        }

    render() {
    return (
        <div className="container">
        {this.state.cat_data.map((cat) =>

        <p>Muokkaa kissaa "{cat.name}"</p>
            )}
            <form onSubmit={this.onSubmit}>
                <label for="name">Nimi:</label><br/>
                <input type="text" name="name" value={this.state.cat_data.name} onChange={this.onChange} /><br/>

                <label for="age">Ikä:</label><br/>
                <input type="number" name="age" value={this.state.cat_data.age} onChange={this.onChange} /><br/>

                <button type="submit">Lähetä</button>
            </form>
            

        </div>

        );
    }
}

export default cEdit;
import React, { Component } from 'react';
import axios from 'axios';




class oNew extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            city: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { first_name, family_name, city } = this.state;

        axios.post('/demo/owners', { first_name, family_name, city })
            .then((result) => {
                this.props.history.push('/omistaja');
            });
    }

    render() {
        const { first_name, family_name, city } = this.state;
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="first_name">Etunimi:</label>
                    <input type="text" class="form-control" name="first_name" value={first_name} onChange={this.onChange} placeholder="Etunimi" />
                </div>

                <div class="form-group">
                    <label for="family_name">Sukunimi:</label>
                    <input type="text" class="form-control" name="family_name" value={family_name} onChange={this.onChange} placeholder="Sukunimi" />
                </div>

                <div class="form-group">
                    <label for="city">Ikä:</label>
                    <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="Kaupunki" />
                </div>
    
                <button type="submit" class="btn btn-default">Lähetä</button>
            </form>
        </div>

        );
    }
}

export default oNew;
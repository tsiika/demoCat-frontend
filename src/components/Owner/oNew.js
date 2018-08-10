import React, { Component } from 'react';
import axios from 'axios';


class oNew extends Component {

    constructor() {
        super();
        this.state = {
            fullname: '',
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

        const { fullname, city } = this.state;

        axios.post('/demo/owner', { fullname, city })
            .then((result) => {
                this.props.history.push('/omistaja');
            });
    }

    render() {
        const { fullname, city } = this.state;
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nimi:</label>
                    <input type="text"
                      class="form-control"
                      name="fullname"
                      value={fullname}
                      onChange={this.onChange}
                      placeholder="Nimi"
                    />
                </div>

                <div className="form-group">
                    <label>Kaupunki:</label>
                    <input type="text"
                      class="form-control"
                      name="city"
                      value={city}
                      onChange={this.onChange}
                      placeholder="Kaupunki"
                    />
                </div>

                <button type="submit" class="btn btn-default">Lähetä</button>
            </form>
        </div>

        );
    }
}

export default oNew;

import React, { Component } from 'react';
import axios from 'axios';


class cNew extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, age } = this.state;

        axios.post('/demo/cats', { name, age})
            .then((result) => {
                this.props.history.push('/kissa');
            });
    }

    render() {
        const { name, age } = this.state;
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nimi:</label>
                    <input type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      placeholder="Nimi"
                    />
                </div>

                <div className="form-group">
                    <label for="age">Ikä:</label>
                      <input type="text"
                      className="form-control"
                      name="age"
                      value={age}
                      onChange={this.onChange}
                      placeholder="Ikä"
                    />
                </div>

                <button type="submit" class="btn btn-default">Lähetä</button>
            </form>
        </div>

        );
    }
}

export default cNew;

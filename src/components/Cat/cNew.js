import React, { Component } from 'react';
import axios from 'axios';


class cNew extends Component {

    constructor() {
        super();
        this.state = {
            cName: '',
            cAge: '',
            cat_owner: '5b7a8b3925cd7e296497591b'
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { cName, cAge, cat_owner } = this.state;

        axios.post('/demo/cat', { cName, cAge, cat_owner })
            .then((result) => {
                this.props.history.push('/kissa');
            });
    }

    render() {
      const { cName, cAge, cat_owner } = this.state;
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nimi:</label>
                    <input type="text"
                      className="form-control"
                      name="cName"
                      value={cName}
                      onChange={this.onChange}
                      placeholder="Nimi"
                    />
                </div>

                <div className="form-group">
                    <label>Ikä:</label>
                      <input type="text"
                      className="form-control"
                      name="cAge"
                      value={cAge}
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

/* kolmas kenttä: omistajien alasvetovalikko (nimet) - valitaan _id -> cat_owner(id) */

export default cNew;

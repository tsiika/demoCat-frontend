import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


class cEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        cat_data: []
        };
    }

    componentDidMount() {
        axios.get('/demo/cat/'+this.props.match.params.id)
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

        var { cName, cAge, cat_owner } = this.state.cat_data;    // JV +owner

        axios.put('/demo/cat/'+this.props.match.params.id, { cName, cAge, cat_owner })    // JV
            .then((result ) => {
                console.log(result);
                this.props.history.push('/kissa');
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

          <p>Muokkaa kissaa "{cat.cName}"</p>

        )}
        <form onSubmit={this.onSubmit}>
            <label>Nimi:</label><br/>
              <input type="text"
                name="name"
                value={this.state.cat_data.cName}
                onChange={this.onChange}
              /><br/>

            <label>Ikä:</label><br/>
              <input type="number"
                name="age"
                value={this.state.cat_data.cAge}
                onChange={this.onChange}
              /><br/>

            <label>Omistaja_id:</label><br/>
              <input type="text"
                name="owner"
                value={this.state.cat_data.cat_owner}
                onChange={this.onChange}
              /><br/>

            <button type="submit">Lähetä</button>
        </form>

        </div>

        );
    }
}

/* cat_owner / omistaja_id pitäisi olla [array] - mikä input type=? */

export default cEdit;

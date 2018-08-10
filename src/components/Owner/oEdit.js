import React, { Component } from 'react';
import axios from 'axios';


class oEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        owner_data: []
        };
    }

    componentDidMount() {
        axios.get('/demo/owner/'+this.props.match.params.id)
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

    onChange = (e) => {
        var state = this.state.owner_data
        state[e.target.name] = e.target.value;
        this.setState({owner_data: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        var { fullname, city } = this.state.owner_data;

        axios.put('/demo/owner/'+this.props.match.params.id, { fullname, city })
          .then((result ) => {
            console.log(result);
            this.props.history.push('/omistaja');   // ?
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
        {this.state.owner_data.map((owner) =>

        <p>Muokkaa omistajaa "{owner.fullname}"</p>

        )}
        <form onSubmit={this.onSubmit}>
            <label>Nimi:</label><br/>
                <input
                  type="text"
                  name="fullname"
                  value={this.state.owner_data.fullname}
                  onChange={this.onChange}
                /><br/>

            <label>Kaupunki:</label><br/>
                <input
                  type="text"
                  name="city"
                  value={this.state.owner_data.city}
                  onChange={this.onChange}
                /><br/>

            <button type="submit">Lähetä</button>
        </form>

        </div>

        );
    }
}

export default oEdit;

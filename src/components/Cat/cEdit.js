import React, { Component } from 'react';
import axios from 'axios';




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
        

        

    render() {
    return (
        <div className="container">
        {this.state.cat_data.map((cat) =>

        <p>Muokkaa kissaa "{cat.name}"</p>
            )}
            <form>
                <label>Nimi:</label><br/>
                <input type="text" /><br/>
                <label>Ikä:</label><br/>
                <input type="number"/><br/>
                <button type="submit">Lähetä</button>
            </form>
            

        </div>

        );
    }
}

export default cEdit;
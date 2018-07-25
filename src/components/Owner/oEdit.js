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
        

        

    render() {
    return (
        <div className="container">
        {this.state.owner_data.map((owner) =>

        <p>Muokkaa omistajaa "{owner.first_name}&nbsp;{owner.family_name}"</p>
            )}
            <form>
                <label>Etunimi:</label><br/>
                <input type="text" /><br/>

                <label>Sukunimi:</label><br/>
                <input type="text" /><br/>
                
                <label>Kaupunki:</label><br/>
                <input type="text" /><br/>

                <button type="submit">Lähetä</button>
            </form>
            

        </div>

        );
    }
}

export default oEdit;
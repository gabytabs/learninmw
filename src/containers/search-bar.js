import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        //Binding this Searchbar
        this.onInputChange = this.onInputChange.bind(this);
    }

    //METHODS
    onInputChange(event) {
        this.setState({ term: event.target.value })
    }
    onFormSubmit(event) {
        event.preventDefault();

        //Fetch weather Data
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5 day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
import React, { Component } from 'react';
import logo from '../logo.png';
import youtubeAPI from './api/youtubeAPI';

export default class VideoSearch extends Component {

    constructor() {
        super();

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const searchText = this.props.searchText;
        // //make an API request.
        // youtubeAPI
        //     .get(`/search?q=${searchText}&maxResults=25&part=snippet`)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    onChange = (e) => {
        const searchText = e.target.value;
        this.props.onTextChange(searchText);
    }

  render() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand"><img src={logo} alt="viewTube logo" width="70px"/></span>
                <form className="form-inline" onSubmit={this.onFormSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input type="text" className="form-control" id="search" placeholder="Search" onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-2" disabled={!this.props.isFormValid} >Search</button>
                </form>
            </div>
        </div>
    )
  }
}

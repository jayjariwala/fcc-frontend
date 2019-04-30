import React, { Component } from 'react';
import logo from '../logo.png'

export default class VideoSearch extends Component {

  render() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand"><img src={logo} alt="viewTube logo" width="70px"/></span>
                <div className="input-group mb-3 mt-4">
                    <form>
                        <input type="text" className="form-control" placeholder="Search video" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

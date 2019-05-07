import React, { Component } from 'react'

export default class VideoPlayer extends Component {
  render() {
    return (
    <div className="col-sm-8">
        <div className="embed-responsive embed-responsive-16by9 video-player mt-2">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
        </div>
        <div className="jumbotron jumbotron-fluid pl-3 mt-2">
            <h4 className="display-8">Fluid jumbotron</h4>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
    )
  }
}

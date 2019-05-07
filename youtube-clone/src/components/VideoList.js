import React, { Component } from 'react'

export default class VideoList extends Component {
  render() {
    return (
        <div className="col-sm">
            <div className="list-group mt-2">
                <ul className="list-unstyled">
                    <a href="#" className="list-group-item list-group-item-action active" >
                        <li className="media" >
                            <img src="https://videopromotion.club/assets/images/default-video-thumbnail.jpg" width="150px" className="mr-3" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        </div>

    )
  }
}

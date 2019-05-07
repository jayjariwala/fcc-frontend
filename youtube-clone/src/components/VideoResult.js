import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

export default class VideoResult extends Component {
  render() {
    return (
        <div className="row">
            <VideoPlayer />
            <VideoList />
        </div>
    )
  }
}

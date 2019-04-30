import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


//import components
import VideoSearch from './components/VideoSearch';

class App extends Component {
  render() {
    return (
      <div>
        <VideoSearch />
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));
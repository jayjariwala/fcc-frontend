import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

//import components
import VideoSearch from './components/VideoSearch';
import NoVideoSearch from './components/NoVideoSearch';
import VideoResult from './components/VideoResult';

class App extends Component {
  state = {
    searchText:'',
    videoList : [],
    currentVideo: '',
    formValid: false
  }

  renderMainView = (videoList) => {
    if(videoList.length === 0) {
      return <NoVideoSearch />
    }
    return <VideoResult />
  }

  searchTermChange = (text) => {
    //check for white space
    let onlyWhiteSpace = false;
    if(!text.replace(/\s/g,'').length) {
      onlyWhiteSpace = !onlyWhiteSpace;
    }
    if(!text === '' || !text === null | !onlyWhiteSpace) {
      this.setState({
        searchText:text,
        formValid:true
      })
    } else {
      this.setState({
        searchText: text,
        formValid:false
      })
    }
  }

  render() {
    return (
      <div>
        <VideoSearch  onTextChange={this.searchTermChange} searchText={this.state.searchText} isFormValid={this.state.formValid}/>
        <div className="container-fluid">
          {this.renderMainView(['abc','xyz`'])}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));
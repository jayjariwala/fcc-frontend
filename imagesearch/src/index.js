import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import unsplash from './api/unsplash';

//load components
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';


class App extends Component {

  state = {
    photos: []
  }

  fetchPhotos = async (term) =>  {
    const response =  await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    })

    this.setState({ photos : response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar fetchPhotos={this.fetchPhotos} />
        <ImageList photos={this.state.photos}/>
        <h5>Total Images found: {this.state.photos.length} </h5>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Quotes from './components/Quotes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuote: { quote: '', author: ''}
    }
    //method binding
    this.quoteCounter = 0;
    this.fetchQuote = this.fetchQuote.bind(this);
    this.nextQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    fetch(`https://talaikis.com/api/quotes/`)
    .then((res) => {
      if(res.status === 200) return res.json();
    })
    .then((quotes) => {
      this.quotes = quotes;
      this.setState({
        currentQuote: { quote: this.quotes[this.quoteCounter].quote , author:this.quotes[this.quoteCounter].author}
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  nextQuote() {

    if(this.quoteCounter === 99) {
      //fetch the quote again and reset the counter
    }
    this.setState({
      currentQuote: { quote: this.quotes[this.quoteCounter].quote, author: this.quotes[this.quoteCounter].author }
    })
    this.quoteCounter++;
  }

  componentDidMount() {
    this.fetchQuote();
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <Quotes quote={this.state.currentQuote.quote} author={this.state.currentQuote.author} />
        <button id="tweet-quote">Twitter</button>
        <button id="new-quote" onClick={this.nextQuote}>Next</button>
      </div>
    );
  }
}

export default App;

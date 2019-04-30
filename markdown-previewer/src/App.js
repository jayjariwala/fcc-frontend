import React, { Component } from 'react';
import './App.css';
import Marked from 'marked';

class App extends Component {
  constructor() {
    super();
    this.state = {
      markedOutput:''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    let textInput = this.textInput.value;
    let markedOutput = Marked(textInput);
    this.setState({ markedOutput });
    this.previewBox.innerHTML = markedOutput;
  }

  componentDidMount() {
    const defaultTextValue =
`Marked - Markdown Parser
========================

[marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`;

    this.textInput.value = defaultTextValue;
    const markedValue = Marked(defaultTextValue);
    this.previewBox.innerHTML = markedValue;
  }

  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Markdown Previewer</h1>
        <div className="row">
          <div className="column">
          <textarea id='editor' rows='50' ref={(input) => {this.textInput = input}} onChange={this.handleOnChange}></textarea>
          </div>
          <div className="column">
          <div id="preview" ref={(input) => { this.previewBox = input}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

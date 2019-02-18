import React, { Component } from 'react'
import './App.css'
import Status from '../status/Status'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sintax: {
        preposition: {
          words: []
        },
        verbs: {
          words: []
        },
        subjuntiveVerbs: {
          words: []
        },
        vocabulary: {
          words: []
        },
        prettyNumbers: {
          words: []
        }
      }
    }
  }

  handleBoxChange(event) {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea
            className="code"
            type="text-area"
            rows="20"
            cols="50"
            onChange={this.handleBoxChange.bind(this)}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            <Status values={this.state.sintax} />
          </a>
        </header>
      </div>
    )
  }
}

export default App

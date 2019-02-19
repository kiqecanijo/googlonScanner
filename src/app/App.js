import React, { Component } from 'react'
import './App.css'
import Status from '../status/Status'

export const fooLetters = ['u', 'd', 'x', 's', 'm', 'p', 'f']
export const alphabet = 'sxocqnmwpfyheljrdgui'

export const order = (a, b) => {
  const aHead = alphabet.indexOf(a.slice(0, 1))
  const bHead = alphabet.indexOf(b.slice(0, 1))
  return aHead === bHead && a.substr(1).length > 0 && b.substr(1).length > 0
    ? order(a.substr(1), b.substr(1))
    : aHead >= bHead
      ? 1
      : -1
}

export const orderText = text => text.sort((a, b) => order(a, b))
export const getVerbs = text =>
  text.filter(
    word => word.length >= 6 && fooLetters.every(foo => foo !== word.slice(-1))
  )

export const getPrepos = text =>
  text.filter(
    word =>
      word.length === 6 &&
      !word.includes('u') &&
      fooLetters.some(foo => foo === word.slice(-1))
  )

export const getSubjuntives = verbs =>
  verbs.filter(
    word =>
      word.length >= 6 &&
      fooLetters.every(foo => foo !== word.slice(0, 1)) &&
      fooLetters.every(foo => foo !== word.slice(-1))
  )

export const getValues = text =>
  text.map(el => {
    return el
      .split('')
      .reduce(
        (acc, current, index) => acc + 20 ** index * alphabet.indexOf(current),
        0
      )
  })

export const getPrettyUniques = values => {
  const temp = values.filter(value => value >= 81827 && value % 3 === 0)
  return [...new Set(temp)]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleBoxChange = this.handleBoxChange.bind(this)
    this.state = {
      text: ''
    }
  }

  // HANDLERS
  handleBoxChange(event) {
    //remove jumplines and split
    const text = event.target.value.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')
    //Prepositions
    const prepositions = getPrepos(text)
    //verbs
    const verbs = getVerbs(text)
    //verbs subjuntive
    const subjuntiveVerbs = getSubjuntives(verbs)
    //list ordered text
    const orderedText = orderText(text)
    //list values
    const values = getValues(text)
    //pretty unique numbers
    const filteredValues = getPrettyUniques(values)
    this.setState({
      ...this.state,
      text: event.target.value,
      output: {
        prepositions,
        verbs,
        subjuntiveVerbs,
        orderedText,
        filteredValues
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Googlon text scanner</h1>

        <textarea
          placeholder={'put you googlon text here'}
          className="code"
          type="text-area"
          rows="20"
          cols="50"
          onChange={this.handleBoxChange}
          value={this.state.text}
        />
        <Status output={this.state.output} />
      </div>
    )
  }
}

export default App

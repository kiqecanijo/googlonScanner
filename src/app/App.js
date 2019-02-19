import React, { Component } from 'react'
import './App.css'
import Status from '../status/Status'

const fooLetters = ['u', 'd', 'x', 's', 'm', 'p', 'f']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
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

  // HANDLERS
  handleBoxChange(event) {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }

  //LIFECICLE
  componentDidMount() {
    this.setState({
      ...this.state,
      text:
        'shoce pq podciy nfwh phfer epgdc dgsloqe do rhfl qhmoixw cmfur qdrulxogji whc ermjdhsx py en yco ienqm wjuln dwuch qinhmjul mjxdqfrnlg iygsex qihmu grewyluhfs ucf us xclpedqmi yrx qinexwo qx rqw wxflpdn rsogxd cpqmxj lgchqdin fdw nwcrus coj nj qplfjnwidg fwdmslqn cwj hysucxdqm ms hdmwpe igxweo sqflo ycqlinro ghu hgecdfj mw xrpmyenq fgixsr fpwcnguieh fclgj ghepqyd jxhwe cejfugn ujxqh ihncrl mlceo udr fm ocxfsjdng sfoqmd pdoymnwxei spqinedf ql ncsepfl icmqsdj chwjlg yiq ifl syejrqd lwnepmcg xlmnfqry ghlyopuncw qx iw sionpux cop dmqpchuyf ojxfqhernm ignpeyf rseoyl emjocsild rfimdy mwd oewgjfr uo irmcunfgx ylduwpsnh xrdng gcxr ng prfmjicud srdueqhgiy nmodwsqijh dcnql'
    })
  }

  //LIFECICLE
  componentDidUpdate() {
    const alphabet = 'sxocqnmwpfyheljrdgui'
    const text = this.state.text.split(' ')

    const order = (a, b) => {
      const aIndex = alphabet.indexOf(a.slice(0, 1))
      const bIndex = alphabet.indexOf(b.slice(0, 1))

      return aIndex === bIndex &&
        a.substr(1).length > 0 &&
        b.substr(1).length > 0
        ? order(a.substr(1), b.substr(1))
        : aIndex >= bIndex
          ? 1
          : -1
    }

    const orderedText = text.sort((a, b) => order(a, b))

    console.log(orderedText)

    //Prepositions
    console.log(
      this.state.text
        .split(' ')
        .filter(
          word =>
            word.length === 6 &&
            !word.includes('u') &&
            fooLetters.some(foo => foo === word.slice(-1))
        )
    )
    //verbs
    console.log(
      this.state.text
        .split(' ')
        .filter(
          word =>
            word.length >= 6 && fooLetters.every(foo => foo !== word.slice(-1))
        )
    )
    //verbs subjuntive
    console.log(
      this.state.text
        .split(' ')
        .filter(
          word =>
            word.length >= 6 &&
            fooLetters.every(foo => foo !== word.slice(0, 1)) &&
            fooLetters.every(foo => foo !== word.slice(-1))
        )
    )
  }

  render() {
    return (
      <div className="App">
        <textarea
          className="code"
          type="text-area"
          rows="20"
          cols="50"
          onChange={this.handleBoxChange.bind(this)}
          value={this.state.text}
        />

        <Status values={this.state.sintax} />
      </div>
    )
  }
}

export default App

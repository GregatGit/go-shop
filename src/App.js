import React, { Component } from 'react'
import HomePage from './components/HomePage'

class App extends Component {
  state = {display: 'HomePage', user: 'Greg'}
  render () {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App
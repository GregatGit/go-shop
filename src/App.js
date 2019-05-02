import React from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <div>
      <div>
        <h2>GO SHOP</h2>
        <div>
          <i aria-hidden="true" className="red huge cart icon" />
          <div />
        </div>
      </div>
      <HomePage />
      <i aria-hidden="true" className="home huge icon" />
      <br />
    </div>
  )
}

export default App

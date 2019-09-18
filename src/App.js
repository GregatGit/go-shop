import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MyList from './components/MyList'
import FinalShop from './components/FinalShop'
import NewItem from './components/NewItem'
import NewItemForm from './components/NewItemForm'

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
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/page2" component={MyList} />
            <Route path="/shopping" component={FinalShop} />
            <Route path="/newItem" component={NewItem} />
            <Route path="/new" component={NewItemForm} />
          </div>
        </BrowserRouter>
      </div>
      <br />
    </div>
  )
}

export default App

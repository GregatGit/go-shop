import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Lists from './Lists'
import Header from './Header'
import Welcome from './Welcome'
import MyList from './MyList'
import List from './List'
import ShoppingList from './ShoppingList'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Welcome} />
          <Route path="/go-shop/" exact component={Welcome} />
          <Route path="/go-shop/lists" exact component={Lists} />
          <Route path="/go-shop/lists/:id" component={List} />
          <Route path="/go-shop/myList" component={MyList} />
          <Route path="/go-shop/shoppingList" component={ShoppingList} />
        </BrowserRouter>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(HomePage)

import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Lists from './Lists'
import Footer from './Footer'
import Welcome from './Welcome'
import List from './List'
import ShoppingList from './ShoppingList'
import './styles.scss'

class HomePage extends Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Route path="/" exact component={Welcome} />
          <Route path="/go-shop/" exact component={Welcome} />
          <Route path="/go-shop/lists" exact component={Lists} />
          <Route path="/go-shop/lists/:id" component={List} />
          <Route path="/go-shop/shoppingList" component={ShoppingList} />
          <Footer />
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

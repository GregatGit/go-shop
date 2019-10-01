import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Lists from './Lists'
import Header from './Header'
import Welcome from './Welcome'
import MyList from './MyList'
import List from './List'
import TheList from './TheList'
import ShoppingList from './ShoppingList'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

function HomePage() {
  const classes = useStyles()
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Paper className={classes.root}>
          <Route path="/" exact component={Welcome} />
          <Route path="/go-shop/" exact component={Welcome} />
          <Route path="/go-shop/lists" exact component={Lists} />
          <Route path="/go-shop/lists/:id" component={TheList} />
          <Route path="/go-shop/myList" component={MyList} />
          <Route path="/go-shop/shoppingList" component={ShoppingList} />
        </Paper>
      </BrowserRouter>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(HomePage)

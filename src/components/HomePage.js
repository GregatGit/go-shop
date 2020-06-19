import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import Lists from './Lists'
import Header from './Header'
import Welcome from './Welcome'
import MyList from './MyList'
import TheList from './TheList'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 50,
    marginBottom: 40
  },
}))

function HomePage() {
  const classes = useStyles()
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Paper elevation={0} className={classes.paper}>
          <Route path="/" exact component={Welcome} />
          <Route path="/go-shop/" exact component={Welcome} />
          <Route path="/go-shop/lists" exact component={Lists} />
          <Route path="/go-shop/lists/:id" component={TheList} />
          <Route path="/go-shop/myList" component={MyList} />
          <Route path="/go-shop/shoppingList" component={ShoppingList} />
        </Paper>
        <Footer />
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

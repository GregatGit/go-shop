import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import Lists from './Lists'
import Header from './Main/Header'
import Home from './Home'
import MyList from './MyList'
import TheList from './TheList'
import LetsShop from './LetsShop'
import Footer from './Main/Footer'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 50,
    marginBottom: 40
  },
}))

function Main() {
  const classes = useStyles()
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Paper elevation={0} className={classes.paper}>
          <Route path="/" exact component={Home} />
          <Route path="/go-shop/" exact component={Home} />
          <Route path="/go-shop/lists" exact component={Lists} />
          <Route path="/go-shop/lists/:id" component={TheList} />
          <Route path="/go-shop/myList" component={MyList} />
          <Route path="/go-shop/shoppingList" component={LetsShop} />
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

export default connect(mapStateToProps)(Main)

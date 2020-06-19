import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, CssBaseline } from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    margin: 3,
  },
}))

function Footer({ amount = 0 }) {
  const classes = useStyles()

  return (
    <Fragment >
    <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Tabs value={false} aria-label="simple tabs example">
        <Tab label="your list has" />
        <Tab label={amount + " items"} />
        </Tabs>
      </AppBar>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.shoppingList.length
  }
}

export default connect(mapStateToProps)(Footer)

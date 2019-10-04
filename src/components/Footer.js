import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

function Footer({ amount = 0 }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs aria-label="simple tabs example">
        <Tab label="your list has" />
        <Tab label={amount + " items"} />
        </Tabs>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.shoppingList.length
  }
}

export default connect(mapStateToProps)(Footer)

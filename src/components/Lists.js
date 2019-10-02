import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayName } from '../helpers'
import { makeStyles } from '@material-ui/core/styles'
import { Button, List, ListItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

const Lists = ({ lists, amount }) => {
  const classes = useStyles()

  const createListButton = list => {
    const listOfList = Object.keys(list)
    return listOfList.map(name => {
      const display = displayName(lists[name].name)
      return (
        <ListItem key={name}>
          <Link to={`/go-shop/lists/${name}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {display}
            </Button>
          </Link>
        </ListItem>
      )
    })
  }

  return (
    <div>
      <h1>LISTS</h1>
      <h3>press to see items in list</h3>
      <p>items won't show if they are already on your list</p>
      <List>{createListButton(lists)}</List>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    amount: state.shoppingList.length,
  }
}

export default connect(mapStateToProps)(Lists)

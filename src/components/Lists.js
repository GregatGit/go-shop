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

const Lists = ({ lists, categories }) => {
  const classes = useStyles()

  const createListButtons = (list) => {
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

  const createCategoryButtons = (cats) => {
    return cats.map(name => {
      const display = displayName(name)
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
      <List>{createListButtons(lists)}</List>
      <List>{createCategoryButtons(categories)}</List>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    amount: state.shoppingList.length,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Lists)

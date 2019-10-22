import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayName } from '../helpers'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Create from './Dialog/Create'
import Search from './Dialog/Search'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  bottomButton: {
    paddingLeft: 10
  }
}))

const Lists = ({ lists, categories }) => {
  const classes = useStyles()
  const listOfList = Object.keys(lists)

  const createCategoryButtons = cats => {
    return cats.map(name => {
      const display = displayName(name)
      return (
        <span key={name}>
          <Link to={`/go-shop/lists/${name}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {display}
            </Button>
          </Link>
        </span>
      )
    })
  }

  return (
    <div>
      <h1>LISTS</h1>
      <h3>press to see items in list</h3>
      <p>items won't show if they are already on your list</p>
      <div>{createCategoryButtons(listOfList)}</div>
      <div>{createCategoryButtons(categories)}</div>
      <div className={classes.bottomButton}>
        <Create />
        <span className={classes.bottomButton}></span>
        <Search />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    amount: state.shoppingList.length,
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(Lists)

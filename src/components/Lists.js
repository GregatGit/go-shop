import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayName } from '../helpers'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Create from './Dialog/Create'
import SearchBar from 'material-ui-search-bar'

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
  const [search, setSearch] = useState('')
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
      <Button >ADD MY OWN ITEM</Button>
      <Create />
      <SearchBar
        value={search}
        onChange={newValue => setSearch(newValue)}
        onRequestSearch={() => console.log(search)}
      />
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

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addList, homePage } from '../actions'
import { makeStyles } from '@material-ui/core/styles'
import { Button, List } from '@material-ui/core'
import TheListItem from './TheListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  checkbox: {
    color: 'red',
    margin: '10px',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

const TheList = props => {
  const classes = useStyles()
  const { items, lists, addList, mainList } = props
  const id = props.match.params.id
  const [checked, setChecked] = useState(true)
  const alreadyInList = mainList.map(item => item.name)
  const listsArr = Object.keys(lists)
  function showItems(list, key, list2, typeOfList) {
    let type = 'lists'
    if (typeOfList.indexOf(key) === -1) {
      type = 'category'
    }
    return list
      .filter(item => list2.indexOf(item.name) === -1) // not if already on shopping list
      .filter(item => item[type].indexOf(key) !== -1) // only from list
      .map(({ name }) => {
        return <TheListItem name={name} />
      })
  }

  function handleAddRemoveAll() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => (input.checked = checked))
    setChecked(!checked)
  }

  function addSelectedItems() {
    const inputs = document.querySelectorAll('input')
    const arrInputs = Array.from(inputs)
      .filter(item => item.checked)
      .map(a => a.name)
    const shoppingList = items.filter(
      item => arrInputs.indexOf(item.name) !== -1
    )
    addList(shoppingList)
  }

  const buttonTitle = checked ? 'Select' : 'Unselect'
  return (
    <div>
      <h2> LIST</h2>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleAddRemoveAll}
        >
          {buttonTitle} All
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={addSelectedItems}
        >
          Add Selected
        </Button>
      </div>
      <List dense className={classes.root}>
        {showItems(items, id, alreadyInList, listsArr)}
      </List>

      <Link to="/go-shop/lists/">
        <Button variant="contained" className={classes.button}>
          BACK
        </Button>
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    lists: state.lists,
    mainList: state.shoppingList,
  }
}

export default connect(
  mapStateToProps,
  { addList, homePage }
)(TheList)

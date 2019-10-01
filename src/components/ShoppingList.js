import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  itemBought,
  homePage,
  completedList,
  emptyShoppingList,
  undo,
} from '../actions'
import { displayName } from '../helpers'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

function ShoppingList(props) {
  const classes = useStyles()
  const {
    list,
    itemBought,
    homePage,
    completedList,
    emptyShoppingList,
    undo,
  } = props
  const [count, setCount] = useState(list.length)
  const [bought, setBought] = useState(0)
  const [showBought, setShowBought] = useState(false)
  const [lastItem, setLastItem] = useState('')

  useEffect(() => {
    let amount = 0
    for (let i = 0; i < list.length; i++){
      if (!list[i].done){
        amount++
      }
    }
    setCount(amount)
    setBought(list.length - amount)
  }, [])

  const displayList = sList => {
    return sList
      .filter(item => !item.done)
      .map(({ name }) => {
        return (
          <Fragment>
            <ListItem button key={name} onClick={() => itemClick(name)}>
              <ListItemText primary={displayName(name)} />
            </ListItem>
            <Divider />
          </Fragment>
        )
      })
  }
  const itemClick = name => {
    setLastItem(name)
    itemBought(name)
    setCount(count - 1)
    setBought(bought + 1)
  }
  const done = () => {
    completedList(list)
    emptyShoppingList()
    homePage()
  }

  function handleUndo() {
    if (lastItem !== ''){
      undo(lastItem)
      setLastItem('')
      setCount(count + 1)
    }
  }

  return (
    <Fragment>
    <h1>SHOPPING TIME</h1>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {list && displayList(list)}
      {count > 0 ? (
        <p>
          items left: <b>{count}</b>
        </p>
      ) : (
        <Button onClick={done}>DONE</Button>
      )}
    </List>
    <div>
    <Button onClick={handleUndo}>undo</Button>
    <Button >You bought {bought}</Button>
  </div>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList,
  }
}

export default connect(
  mapStateToProps,
  { itemBought, homePage, completedList, emptyShoppingList, undo }
)(ShoppingList)

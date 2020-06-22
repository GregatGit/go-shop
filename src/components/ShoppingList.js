import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  itemBought,
  completedList,
  emptyShoppingList,
  undo,
} from '../actions'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
  Divider,
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { displayName } from '../helpers'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function ShoppingList(props) {
  const { list, itemBought, completedList, emptyShoppingList, undo } = props
  const classes = useStyles()
  const [count, setCount] = useState(list.length)
  const [bought, setBought] = useState(0)
  const [lastItem, setLastItem] = useState('')
  const categories = list.map(item => item.category)
  const unqCat = [...new Set(categories)]
  const openArr = unqCat.map(cat => false)
  const [open, setOpen] = useState(openArr)
  const [oneList, setOneList] = useState(false)

  useEffect(() => {
    const itemsToBuy = list.reduce((acc, todo) => todo.done ? acc + 1 : acc + 0, 0)
    setCount(itemsToBuy)
    setBought(list.length - itemsToBuy)
  }, [])

  const handleClick = index => { // expand func
    const temp = [...open]
    temp[index] = !temp[index]
    setOpen(temp)
  }
  const itemClick = name => {
    setLastItem(name)
    itemBought(name)
    setCount(count - 1)
    setBought(bought + 1)
  }
  function handleUndo() {
    if (lastItem !== '') {
      undo(lastItem)
      setLastItem('')
      setCount(count + 1)
    }
  }
  const done = () => {
    completedList(list)
    emptyShoppingList()
  }

  const displayCategories = (cats, itemsArr, expandFunc, itemBought) => {
    return cats.map((cat, index) => {
      return (
        <Fragment>
          <ListItem key={cat} button onClick={() => expandFunc(index)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={displayName(cat)} />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {itemsArr.map(item => {
                if (item.category === cat && item.done === false) {
                  return (
                    <ListItem
                      key={item.name}
                      button
                      onClick={() => itemBought(item.name)}
                      className={classes.nested}
                    >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={displayName(item.name)} />
                    </ListItem>
                  )
                }
              })}
            </List>
          </Collapse>
        </Fragment>
      )
    })
  }

  const displayList1 = sList => {
    return sList
      .filter(item => !item.done)
      .map(({ name }) => {
        return (
          <Fragment>
            <ListItem
              className={classes.items}
              button
              key={name}
              onClick={() => itemClick(name)}
            >
              <ListItemText primary={displayName(name)} />
            </ListItem>
            <Divider />
          </Fragment>
        )
      })
  }

  return (
    <Fragment>
      <h1>SHOPPING LIST</h1>
      <Button variant="outlined" onClick={() => setOneList(!oneList)}>{oneList ? 'show folders' : 'show items'}</Button>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {!oneList ? "Press folders to expand" : ""}
          </ListSubheader>
        }
        className={classes.root}
      >
        {oneList
          ? displayList1(list)
          : displayCategories(unqCat, list, handleClick, itemClick)}
      </List>
      <Button onClick={handleUndo}>undo</Button>
      {count > 0 ? (
        <p>
          items left: <b>{count}</b>
        </p>
      ) : (
        <Button onClick={done}>DONE</Button>
      )}
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
  { itemBought, completedList, emptyShoppingList, undo }
)(ShoppingList)

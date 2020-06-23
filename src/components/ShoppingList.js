import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  itemBought,
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

import DisplayList from './DisplayList'
import DisplayCategories from './DisplayCategories'

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
  const { list, itemBought, undo } = props
  const classes = useStyles()
  const [bought, setBought] = useState(0)
  const [lastItem, setLastItem] = useState('')
  const categories = list.map(item => item.category)
  const unqCat = [...new Set(categories)]
  const openArr = unqCat.map(cat => false)
  const [open, setOpen] = useState(openArr)
  const [oneList, setOneList] = useState(false)

  useEffect(() => {
    const itemsToBuy = list.reduce((acc, todo) => todo.done ? acc + 1 : acc + 0, 0)
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
    setBought(bought + 1)
  }
  function handleUndo() {
    if (lastItem !== '') {
      undo(lastItem)
      setLastItem('')
    }
  }
  
  const displayCategories = (cats, itemsArr, expandFunc, itemBought) => {
    return cats.map((cat, index) => {
      return (
        <Fragment>
          <ListItem key={index} button onClick={() => expandFunc(index)}>
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

  return (
    <Fragment>
      <h1>SHOPPING LIST</h1>
      <DisplayCategories 
        categories={unqCat} 
        list={list}
        itemClick={itemClick} 
      />
      <Button 
        variant="outlined" 
        onClick={() => setOneList(!oneList)}>{oneList ? 'show folders' : 'show items'}     
      </Button>
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
          ? <DisplayList list={list} func={itemClick} />
          : displayCategories(unqCat, list, handleClick, itemClick)}
      </List>
      <Button onClick={handleUndo}>undo</Button>
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
  { itemBought, undo }
)(ShoppingList)

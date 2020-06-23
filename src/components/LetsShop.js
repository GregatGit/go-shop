import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { itemBought, undo } from '../actions'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListSubheader,
  List,
  Button,
} from '@material-ui/core'

import DisplayList from './LetsShop/DisplayList'
import DisplayCategories from './LetsShop/DisplayCategories'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function LetsShop(props) {
  const { list, itemBought, undo } = props
  const classes = useStyles()
  const [bought, setBought] = useState(0)
  const [lastItem, setLastItem] = useState('')
  const categories = list.map((item) => item.category)
  const unqCat = [...new Set(categories)]
  const [oneList, setOneList] = useState(false)

  useEffect(() => {
    const itemsToBuy = list.reduce(
      (acc, todo) => (todo.done ? acc + 1 : acc + 0),
      0
    )
    setBought(list.length - itemsToBuy)
  }, [])

  const itemClick = (name) => {
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

  return (
    <Fragment>
      <h1>SHOPPING LIST</h1>

      <Button variant="outlined" onClick={() => setOneList(!oneList)}>
        {oneList ? 'show folders' : 'show items'}
      </Button>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {!oneList ? 'Press folders to expand' : ''}
          </ListSubheader>
        }
        className={classes.root}
      >
        {oneList ? (
          <DisplayList list={list} func={itemClick} />
        ) : (
          <DisplayCategories
            categories={unqCat}
            list={list}
            itemClick={itemClick}
          />
        )}
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

export default connect(mapStateToProps, { itemBought, undo })(LetsShop)

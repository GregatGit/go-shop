import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core/'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

import { displayName, getInitialCount, returnIcon } from '../../helpers'

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

const DisplayCategories = (props) => {
  const { categories, list, itemClick } = props
  const classes = useStyles()

  const openArr = categories.map((cat) => false)
  const [open, setOpen] = useState(openArr)
  const [catCount, setCatCount] = useState(getInitialCount(list, categories))

  const handleClick = (index) => {
    const temp = [...open]
    temp[index] = !temp[index]
    setOpen(temp)
  }

  const handleItemClick = (name, cat) => {
    itemClick(name)
    const obj = { ...catCount }
    obj[cat].count = catCount[cat].count - 1
    setCatCount(obj)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      {categories &&
        categories.map((cat, index) => (
          <Fragment key={index}>
            <ListItem key={index} button onClick={() => handleClick(index)}>
              <ListItemIcon>
                {returnIcon(catCount[cat].count)}
              </ListItemIcon>
              <ListItemText
                primary={`${displayName(cat)}`}
              />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {list
                  .filter((item) => !item.done && item.category === cat)
                  .map((item, index) => {
                    return (
                      <ListItem
                        key={item.name}
                        button
                        className={classes.nested}
                        onClick={() => handleItemClick(item.name, cat)}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={displayName(item.name)} />
                      </ListItem>
                    )
                  })}
              </List>
            </Collapse>
          </Fragment>
        ))}
    </List>
  )
}

export default DisplayCategories

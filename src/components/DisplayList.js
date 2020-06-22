import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, Divider } from '@material-ui/core'
import { displayName } from '../helpers'
const useStyles = makeStyles({
  items: {

  }
})

const DisplayList = ({ list, func }) => {
  const classes = useStyles()
  return list
    .filter(item => !item.done)
    .map(({ name }) => {
      return (
        <Fragment>
          <ListItem
            className={classes.items}
            button
            key={name}
            onClick={() => func(name)}
          >
            <ListItemText primary={displayName(name)} />
          </ListItem>
          <Divider />
        </Fragment>
      )
    })
}

export default DisplayList

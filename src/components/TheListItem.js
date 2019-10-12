import React from 'react'
import { displayName } from '../helpers'
import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

const TheListItem = ({ name }) => {
  const classes = useStyles()
  return (
    <ListItem key={name}>
      <input
        className={classes.checkbox}
        type="checkbox"
        id={name}
        name={name}
      />
      <label htmlFor={name}>
        {' '}
        <ListItemText id={name} primary={displayName(name)} />
      </label>
    </ListItem>
  )
}

export default TheListItem

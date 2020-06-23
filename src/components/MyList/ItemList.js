import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import {Radio, Button, Divider} from '@material-ui/core/'
import { displayName } from '../../helpers'
import { toggleItemDone, itemDelete } from '../../actions'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

function ItemList( { done, name, toggleItemDone, itemDelete, index }) {
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = useState('green')


  useEffect(() => {
    if (done){
      setSelectedValue('red')
    }
  }, [])

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    toggleItemDone(index)
  }

  return (
    <Fragment>
    <li key={index}>
      <h3>{displayName(name)}</h3>
      <div>
      <GreenRadio
        checked={selectedValue === 'green'}
        onChange={handleChange}
        value="green"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'GREEN' }}
      />
      <Radio
        checked={selectedValue === 'red'}
        onChange={handleChange}
        value="red"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'red' }}
      />
      
    </div>
    <Button variant="contained" className={classes.button} color="secondary" onClick={() => itemDelete(index)}>Remove</Button>
    </li>
    <Divider />
    </Fragment>
  )
}

export default connect(null, { toggleItemDone, itemDelete })(ItemList)
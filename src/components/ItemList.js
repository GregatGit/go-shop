import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import {Radio, Button} from '@material-ui/core/'
import { displayName } from '../helpers'
import { toggleItemDone, itemDelete } from '../actions'

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

function ItemList( { status = true, name = 'Beans', toggleItemDone, itemDelete, index }) {
  const [selectedValue, setSelectedValue] = useState('green')


  useEffect(() => {
    if (status){
      setSelectedValue('red')
    }
  }, [])

  // function toggle(i) {
  //   toggleItemDone(i)
  // }

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    toggleItemDone(index)
  }

  return (
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
    <Button onClick={() => itemDelete(index)}>Remove</Button>
    </li>
  )
}

export default connect(null, { toggleItemDone, itemDelete })(ItemList)
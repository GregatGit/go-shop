import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { displayName } from '../../helpers'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

const Create = ({ items, categories }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    name: '',
    chosen: 'other',
  })
  const takenNames = items.map(item => item.name)

  const handleChange = name => event => {
    const newValues = { ...values }
    newValues.chosen = event.target.value
    setValues(newValues)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNameChange = e => {
    const newValues = { ...values }
    newValues.name = e.target.value
    setValues(newValues)
  }

  const handleAdd = () => {
    // make name format the same
    let name = values.name.toLowerCase()
    // check name is ok
    // create object
    // add it items
    // add it to shopping list
  }

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <Add />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add a new item to your shopping list. You will find it in
            which ever category you choose. The item name has to be orginal.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add name"
            type="name"
            fullWidth
            onChange={handleNameChange}
          />
          <TextField
            id="standard-select-category"
            select
            label="Select"
            className={classes.textField}
            value={values.chosen}
            onChange={handleChange('category')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your category"
            margin="normal"
          >
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {displayName(cat)}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(Create)

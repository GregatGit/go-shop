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
  Tooltip
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { displayName, checkName } from '../../helpers'
import { addItem, addItemToShoppinglist } from '../../actions'

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

const Create = ({ items, categories, addItem, addItemToShoppinglist }) => {
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

  const handleAdd = (open) => {
    let name = values.name.trim().replace(/ /g, "_").toLowerCase()
    const check = checkName(name)
    if (check.errorStatus){
      alert(check.message)
      return
    }
    if (takenNames.indexOf(name) !== -1){
      let message = `${name} is already on your list`
      alert(message)
      return
    }
    const newItem = {name, category: values.chosen, lists: ["quick_shop"]}
    addItem(newItem)
    addItemToShoppinglist(newItem)
    
      const newValues = { ...values }
      newValues.name = ''
      setValues(newValues)
    
    setOpen(open)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleAdd(true)
  }

  return (
    <Fragment>
    <Tooltip title="Add New Item" aria-label="add">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <Add />
      </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can add a new item to your shopping list. You will find it in
            which ever category you choose. The item name has to be unique.
            ADD will add and close the window, Add + will add and keep this window open.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add name"
            type="name"
            fullWidth
            onChange={handleNameChange}
            value={values.name}
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
            helperText="Please select your category (others by default)"
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
          <Button onClick={() => handleAdd(false)} color="primary">
            Add
          </Button>
          <Button onClick={() => handleAdd(true)} color="primary">
            Add +
          </Button>
        </DialogActions>
        </form>
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

export default connect(mapStateToProps, { addItem, addItemToShoppinglist })(Create)

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
  MenuItem
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

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
}));

const Create = ({ items, categories }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    chosen: 'other'
  })

  const handleChange = name => event => {
    const change = event.target.value
    setValues({chosen: change });
  };

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <Button variant="fab" color="primary" onClick={handleClickOpen}>
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
            You can add a new item to your shopping list. You will find it in which ever category you choose. The item name has to be orginal.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add name"
            type="name"
            fullWidth
          />
          <TextField
            margin="dense"
            id="category"
            label="choose category"
            type="name"
            fullWidth
          />
          <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={values.chosen}
          onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {categories.map(cat => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
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
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Create)
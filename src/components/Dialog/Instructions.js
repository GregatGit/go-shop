import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

function Instructions() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <span>
      <Fab
        onClick={handleClickOpen}
        color="secondary"
        aria-label="edit"
        className={classes.fab}
      >
        Help
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Go-Shop:'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Use the navbar above to navigate around the app.<br />
          <b>LISTS:</b> Here you choose categories to look through add items.
          Once an item is on the list it won’t show in these lists any more.
          You create your own item here.<br />
          <b>MY LIST:</b> This has all the items on the list you are creating.<br />
          You can mark an item as bought or remove from your list completely.<br />
          You can even put it back on the list to be bought.<br />
          <b>LET’S SHOP:</b> This is the list for when you are shopping.  The items are
          all sorted into categories. When you press an item it is marked as done
          and off this section. You can see the count beside LET’S SHOP.
          You can go back to my list to put an item back on the list or even
          add some items.      
          </DialogContentText>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default Instructions

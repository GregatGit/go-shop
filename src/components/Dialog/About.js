import React from 'react'
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

function About() {
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
        about
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
          {'Go-Shop by Greg Duncan'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            I built Go-Shop to practice my react and material-ui skills. And it
            makes shopping easier. You can see some of my other projects at my
            GitHub profile. If you have any issues please email me at
            mygoshop101@gmail.com. <br />
            Please enjoy.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a href="mailto:mygoshop101@gmail.com?subject=contact_from_website&body=Hello">
            <Button onClick={handleClose} color="primary">
              Email
            </Button>
          </a>
          <Button
            onClick={() =>
              window.open(
                'https://github.com/GregatGit?tab=repositories',
                '_blank'
              )
            }
            color="primary"
          >
            github profile
          </Button>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default About

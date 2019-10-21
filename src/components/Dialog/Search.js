import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import SearchIcon from '@material-ui/icons/Search'
import SearchBar from 'material-ui-search-bar'

function Search({ yourList, items}) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = useState('')

  const handleOnRequestSearch = (str) =>{
    if (search === '') return
    console.log(str)

    setSearch('')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <SearchIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Search the Go-Shop for an Item."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will find an item for you and tell you where it is.
          </DialogContentText>
        </DialogContent>
        <SearchBar
        value={search}
        onChange={newValue => setSearch(newValue)}
        onRequestSearch={() => handleOnRequestSearch(search)}
        onClick={() => {
          handleOnRequestSearch(search)
        }}
      />
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    yourList: state.shoppingList,
    items: state.items
  }
}

export default connect(mapStateToProps)(Search)

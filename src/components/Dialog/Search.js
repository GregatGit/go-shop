import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Tooltip, DialogActions, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SearchBar from 'material-ui-search-bar'
import { displayName } from '../../helpers'

function Search({ yourList, items }) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')

  const handleOnRequestSearch = str => {
    let theStr = str.trim().replace(/ /g, '_').toLowerCase()
    if (search === '') return
    let mess = `${theStr} is not in go shop - you can add it`
    const shopListNames = items.map(item => item.name)
    let inList = shopListNames.indexOf(theStr)
    if (inList !== -1) {
      let inYourList = ''
      for (let i = 0; i < yourList.length; i++) {
        if (yourList[i].name === theStr) {
          inYourList = 'and is already in your list'
          break
        }
      }
      mess = `${displayName(theStr)} is in the category: ${displayName(
        items[inList].category
      )} ${inYourList}`
    }

    setMessage(mess)
    setSearch('')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setMessage('')
    setOpen(false)
  }

  return (
    <span>
      <Tooltip title="Search for Item" aria-label="search">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          <SearchIcon />
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Search the Go-Shop for an Item.'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
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
    </span>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    yourList: state.shoppingList,
    items: state.items,
  }
}

export default connect(mapStateToProps)(Search)

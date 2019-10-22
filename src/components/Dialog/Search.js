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
  const [message, setMessage] = useState('')

  const handleOnRequestSearch = (str) =>{
    let theStr = str.trim().replace(/ /g, "_")
    if (search === '') return
    let mess = `${theStr} is not in go shop - you can add it`
    const shopListNames = items.map(item => item.name)
    let inList = shopListNames.indexOf(theStr)
    console.log(inList)
    if (inList !== -1){
      let inYourList = ''
      for (let i = 0; i < yourList.length; i++){
        if(yourList[i].name === theStr){
          inYourList = 'and is already in your list'
          break
        }
      }
      mess = `${theStr} is in the category: ${items[inList].category} ${inYourList}`
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

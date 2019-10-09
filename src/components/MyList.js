import React from 'react'
import { connect } from 'react-redux'
import {  emptyShoppingList } from '../actions'
import ItemList from './ItemList'
import { List, Button } from '@material-ui/core'

const MyList = ({ list, emptyShoppingList }) => {

  function displayItems(list) {
    return list.map(({ name, done }, index) => {
      return (
        
          <ItemList key={index} name={name} status={done} index={index} /> 
        
      )
    })
  }
  return (
    <div>
      <h1>YOUR LIST</h1>
      <p>Here you can edit your list.</p>
      <p>
        <b>Green:</b> On list and needs to be bought
      </p>
      <p>
        <b>Red:</b> Have it already
      </p>
      <p>
        <b>Remove:</b> deletes them completely.
      </p>

      <List>{list.length ? displayItems(list) : <p><u>your list is empty</u></p>}</List>
      <h3>warning: this will clear your list</h3>
      <Button variant="contained" onClick={emptyShoppingList}>DELETE ALL</Button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList,
  }
}
export default connect(mapStateToProps, {  emptyShoppingList })(MyList)

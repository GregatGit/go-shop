import React from 'react'
import { connect } from 'react-redux'
import { emptyShoppingList } from '../actions'
import { List, Button } from '@material-ui/core'

import ItemList from './MyList/ItemList'

const MyList = ({ list, emptyShoppingList }) => {
  function displayItems(list) {
    return list.map((item, index) => (
      <ItemList key={index} index={index} {...item} />
    ))
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
      <List>
        {list.length ? (
          displayItems(list)
        ) : (
          <h3>
            <u>YOUR LIST IS EMPTY</u>
          </h3>
        )}
      </List>
      <h3>warning: this will clear your list</h3>
      <Button variant="contained" onClick={emptyShoppingList}>
        DELETE ALL
      </Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.shoppingList,
  }
}
export default connect(mapStateToProps, { emptyShoppingList })(MyList)

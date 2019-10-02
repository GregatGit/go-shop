import React from 'react'
import { connect } from 'react-redux'
import { toggleItemDone, itemDelete, emptyShoppingList } from '../actions'

const MyList = ({ list, toggleItemDone, itemDelete, emptyShoppingList }) => {

  function displayItems(list, funcCheckbox, funcBttn) {
    return list.map(({ name, done }, index) => {
      return (
        <li key={index}>
          <p>{name}</p>
          <div>
            <input onChange={() => funcCheckbox(index)} type="checkbox" id={name} name={name} defaultChecked={done} />
            <label htmlFor={name}>done</label>
          </div>

          <div>
            <button onClick={() => funcBttn(index)}>remove</button>
          </div>
        </li>
      )
    })
  }
  return (
    <div>
      <h1>YOUR LIST</h1>
      <p>Here you can edit your list.</p>
      <p>
        Items can be marked as bought or not.
      </p>
      <p>
        Remove deletes them completely.
      </p>

      <ul>{list.length ? displayItems(list, toggleItemDone, itemDelete) : <p><u>your list is empty</u></p>}</ul>
      <h3>warning: this will clear your list</h3>
      <button onClick={emptyShoppingList}>DELETE ALL</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList,
  }
}
export default connect(mapStateToProps, { toggleItemDone, itemDelete, emptyShoppingList })(MyList)

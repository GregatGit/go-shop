import React from 'react'
import { connect } from 'react-redux'
import { toggleItemDone, itemDelete } from '../actions'

const MyList = ({ list, toggleItemDone, itemDelete }) => {

  function displayItems(list, funcCheckbox, funcBttn) {
    return list.map(({ name, done }, index) => {
      return (
        <li key={index}>
          <p>{name}</p>
          <div>
            <input onChange={() => funcCheckbox(index)} type="checkbox" id="done" name="done" defaultChecked={done} />
            <label htmlFor="done">done</label>
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
      <h2>YOUR LIST</h2>
      <p>Use the buttons to remove items or mark them as done.</p>
      <p>
        Remove deletes them completely.
      </p>
      <p>Done chang the status of the item</p>
      <ul>{list.length ? displayItems(list, toggleItemDone, itemDelete) : 'your list is empty'}</ul>
      <button>UPDATE LIST</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList,
  }
}
export default connect(mapStateToProps, { toggleItemDone, itemDelete })(MyList)
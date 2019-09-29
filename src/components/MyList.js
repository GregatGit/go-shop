import React from 'react'
import { connect } from 'react-redux'

const MyList = ({ list }) => {
  function displayItems(list) {
    return list.map(({ name, done }, index) => {
      return (
        <li key={index}>
          <p>{name}</p>
          <div>
            <input type="checkbox" id="done" name="done" defaultChecked={done} />
            <label htmlFor="done">done</label>
          </div>

          <div>
            <input type="checkbox" id="remove" name="remove" />
            <label htmlFor="remove">remove </label>
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
        Remove takes them off the list completely and will put it into your done
        items or put back on list to get.
      </p>
      <p>You must click on UPDATE LIST before you leave this page</p>
      <ul>{list.length ? displayItems(list) : 'your list is empty'}</ul>
      <button>UPDATE LIST</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList,
  }
}
export default connect(mapStateToProps)(MyList)

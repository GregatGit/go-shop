import React from 'react'
import { connect } from 'react-redux'

const MyList = ({list}) => {
  function displayItems(list) {
    return list.map(item => {
      return (
        <li key={item}>{item.name}</li>
      )
    })
  }
  return (
    <div>
      <h2>YOUR LIST</h2>
      <p>Use the buttons to remove items or mark them as done.</p>
      <p>You must click on CHANGE LIST before you leave this page</p>
      <ul>
        {list.length ? displayItems(list) : 'your list is empty'}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList
  }
}
export default connect(mapStateToProps)(MyList)

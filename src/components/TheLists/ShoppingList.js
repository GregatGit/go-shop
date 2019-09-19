import React from 'react'
import { connect } from 'react-redux'

const ShoppingList = ({ list }) => {
  const displayList = sList => {
    return sList.map(item => {
      return (
        <li className="sList" key={item.name}>
          {item.name}
        </li>
      )
    })
  }
  return (
    <div>
      <h2>SHOPPING LIST</h2>
      {list && displayList(list)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList
  }
}

export default connect(mapStateToProps)(ShoppingList)

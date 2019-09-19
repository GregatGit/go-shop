import React from 'react'
import { connect } from 'react-redux'
import { itemBought } from '../../actions'

const ShoppingList = ({ list, itemBought }) => {
  const displayList = sList => {
    return sList
      .filter(item => !item.done)
      .map(({ name }) => {
        return (
          <li className="sList" key={name}>
            <button onClick={() => itemBought(name)}>{name}</button>
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
    list: state.shoppingList,
  }
}

export default connect(
  mapStateToProps,
  { itemBought }
)(ShoppingList)

import React, { useState} from 'react'
import { connect } from 'react-redux'
import { itemBought, homePage, completedList, emptyShoppingList } from '../../actions'

const ShoppingList = ({ list, itemBought, homePage, completedList, emptyShoppingList }) => {
  const [count, setCount] = useState(list.length)

  const itemClick = (name) => {
    itemBought(name)
    setCount(count - 1)
  }

  const done = () => {
    completedList(list)
    emptyShoppingList()
    homePage()
  }
  const displayList = sList => {
    return sList
      .filter(item => !item.done)
      .map(({ name }) => {
        return (
          <li className="sList" key={name}>
            <button onClick={() => itemClick(name)}>{name}</button>
          </li>
        )
      })
  }
  return (
    <div>
      <h2>SHOPPING LIST</h2>
      <ul>
      {list && displayList(list)}
      </ul>
      {count > 0 ? <p>items left: <b>{count}</b></p>
        : <button onClick={done}>DONE</button>}
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
  { itemBought, homePage, completedList, emptyShoppingList }
)(ShoppingList)

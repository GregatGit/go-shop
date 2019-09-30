import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  itemBought,
  homePage,
  completedList,
  emptyShoppingList,
  undo
} from '../actions'
import { displayName } from '../helpers'

const ShoppingList = (props) => {
  const {
    list,
    itemBought,
    homePage,
    completedList,
    emptyShoppingList,
    undo
  } = props
  const [count, setCount] = useState(list.length)
  const [bought, setBought] = useState(0)
  const [showBought, setShowBought] = useState(false)
  const [lastItem, setLastItem] = useState('')

  useEffect(() => {
    let amount = 0
    for (let i = 0; i < list.length; i++){
      if (!list[i].done){
        amount++
      }
    }
    setCount(amount)
    setBought(list.length - amount)
  }, [])

  const itemClick = name => {
    setLastItem(name)
    itemBought(name)
    setCount(count - 1)
    setBought(bought + 1)
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
            <button onClick={() => itemClick(name)}>{displayName(name)}</button>
          </li>
        )
      })
  }
  const displayBought = list => {
    return list
      .filter(item => item.done)
      .map(item => {
        return <li key={item.name}>{displayName(item.name)}</li>
      })
  }
  function handleBought() { 
    setShowBought(!showBought)
  }

  function handleUndo() {
    if (lastItem !== ''){
      undo(lastItem)
      setLastItem('')
    }
  }
  return (
    <div id="shoppingList">
      <h1>SHOPPING LIST</h1>
      <ul>{list && displayList(list)}</ul>
      {count > 0 ? (
        <p>
          items left: <b>{count}</b>
        </p>
      ) : (
        <button onClick={done}>DONE</button>
      )}
      <div>
        <button onClick={handleUndo}>undo</button>
        <button onClick={handleBought}>You bought {bought}</button>
      </div>
      <div>
        {showBought ? displayBought(list) : 'click to see items bought'}
      </div>
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
  { itemBought, homePage, completedList, emptyShoppingList, undo }
)(ShoppingList)

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayName } from '../helpers'

const Lists = ({ lists, amount }) => {
  const createListButton = list => {
    const listOfList = Object.keys(list)
    return listOfList.map(name => {
      const display = displayName(lists[name].name)
      return (
        <li key={name}>
          <Link to={`/go-shop/lists/${name}`}>
            <button className="myButton">{display}</button>
          </Link>
        </li>
      )
    })
  }

  return (
    <div>
      <h2>LISTS</h2>
      <h3>press to see items in list</h3>
      <p>they won't show if they are already on your list</p>
      {createListButton(lists)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    amount: state.shoppingList.length,
  }
}

export default connect(mapStateToProps)(Lists)

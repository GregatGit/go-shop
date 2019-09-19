import React from 'react'
import { connect } from 'react-redux'

const YourLists = ({ lists }) => {

  const createListButton = (list) => {
    const listOfList = Object.keys(list)
    return listOfList.map(name => {
      return (
        <li key={name}>
          <button className="myButton">{lists[name].name}</button>
        </li>
      )
    })
  }
  return (
    <ul>
      {lists && createListButton(lists)}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(YourLists)

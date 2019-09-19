import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { displayName } from '../helpers'

const YourLists = ({ lists }) => {
  const [choosen, setChoosen] = useState(null)

  function handleListClick(name){
    setChoosen(name)
  }

  function loadList(list){
    console.log(list)
  }

  const createListButton = list => {
    const listOfList = Object.keys(list)
    return listOfList.map(name => {
      const display = displayName(lists[name].name)
      return (
        <li key={name}>
          <button onClick={() => handleListClick(name)} className="myButton">{display}</button>
        </li>
      )
    })
  }
  return (
    <Fragment>
      <h2>Choose A List</h2>
      <ul>{lists && createListButton(lists)}</ul>
      {choosen && <button onClick={() => loadList(choosen)}>LOAD {displayName(lists[choosen].name)}</button>}
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(YourLists)

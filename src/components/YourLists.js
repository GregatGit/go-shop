import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { selectChosen } from '../actions'
import { displayName } from '../helpers'

const YourLists = ({ lists, selectChosen, home }) => {
  const [choosen, setChoosen] = useState(null)

  function handleListClick(name){
    setChoosen(name)
  }

  function loadList(list){
    selectChosen(list)
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
      <h2>Choose a List</h2>
      <ul>{lists && createListButton(lists)}</ul>
      {choosen && 
        <div>
          <h3>Hit the button below see the list items</h3>
          <button onClick={() => loadList(choosen)}>LOAD {displayName(lists[choosen].name)}</button>
        </div>}
        <button onClick={home}>HOME</button>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps, { selectChosen })(YourLists)

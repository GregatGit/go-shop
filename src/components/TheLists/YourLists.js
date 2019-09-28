import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { selectChosen } from '../actions'
import { displayName } from '../helpers'

const YourLists = ({ lists, selectChosen, home, amount }) => {
  const [choosen, setChoosen] = useState(null)

  function handleListClick(name) {
    setChoosen(name)
  }

  function loadList(list) {
    selectChosen(list)
  }

  const createListButton = list => {
    const listOfList = Object.keys(list)
    return listOfList.map(name => {
      const display = displayName(lists[name].name)
      return (
        <li key={name}>
          <button onClick={() => handleListClick(name)} className="myButton">
            {display}
          </button>
        </li>
      )
    })
  }
  return (
    <Fragment>
      <h2>CHOOSE A LIST</h2>
      <ul id="yourList">{lists && createListButton(lists)}</ul>
      {choosen && (
        <div>
          <h3>Hit the button below see the list items</h3>
          <button onClick={() => loadList(choosen)}>
            LOAD {displayName(lists[choosen].name)}
          </button>
        </div>
      )}
      <h3>ITEM IN YOUR LIST: {amount}</h3>
      <button className="homeButton" onClick={home}>HOME</button>
      {amount ? <button className="homeButton" >GO SHOP</button> : ''}
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    amount: state.shoppingList.length
  }
}

export default connect(
  mapStateToProps,
  { selectChosen }
)(YourLists)

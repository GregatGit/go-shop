import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { addList, homePage } from '../../actions'
import { displayName } from '../../helpers'

const ListToSort = ({ chosen, items, lists, addList, func, homePage }) => {
  const [checked, setChecked] = useState(true)
  const title = lists[chosen].name

  function goShopping() {
    const inputs = document.querySelectorAll('input')
    const arrInputs = Array.from(inputs)
      .filter(item => item.checked)
      .map(a => a.name)
    const shoppingList = items.filter(item => arrInputs.indexOf(item.name) !== -1)
    addList(shoppingList)
    func()
  }

  function handleAddRemoveAll() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.checked = checked)
    setChecked(!checked)
  }

  function showItems(list, key) {
    return list
      .filter(item => item.lists.indexOf(key) !== -1)
      .map(a => {
        return (
          <li key={a.name}>
            <input type="checkbox" id={a.name} name={a.name} />
            <label for={a.name}> {displayName(a.name)}</label>
          </li>
        )
      })
  }
  const buttonTitle = checked ? 'Add' : 'Remove'
  return (
    <Fragment>
      <h2>{title} List</h2>
      <h3>Select items for your shop</h3>
      <p>you can select all if needed</p>
      {showItems(items, chosen)}
      <div>
        <button onClick={handleAddRemoveAll}>{buttonTitle} All</button>
        <button onClick={goShopping}>Let's Shop</button>
      </div>
      <button onClick={homePage}>HOME!</button>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    chosen: state.chosen,
    items: state.items,
    lists: state.lists,
  }
}

export default connect(mapStateToProps, { addList, homePage })(ListToSort)

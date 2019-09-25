import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { addList, homePage } from '../../actions'
import { displayName } from '../../helpers'

const ListToSort = props => {
  const { chosen, items, lists, addList, goShop, homePage, mainList } = props
  const [checked, setChecked] = useState(true)
  const title = lists[chosen].name
  const alreadyInList = mainList.map(item => item.name)
  console.log(alreadyInList)

  function goShopping(go = true) {
    const inputs = document.querySelectorAll('input')
    const arrInputs = Array.from(inputs)
      .filter(item => item.checked)
      .map(a => a.name)
    const shoppingList = items.filter(
      item => arrInputs.indexOf(item.name) !== -1
    )
    addList(shoppingList)
    go && goShop()
  }

  function handleAddRemoveAll() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => (input.checked = checked))
    setChecked(!checked)
  }

  function showItems(list, key, list2) {
    return list
      .filter(item => item.lists.indexOf(key) !== -1)
      .filter(item => list2.indexOf(item.name) === -1)
      .map(({ name }) => {
        return (
          <li className="checkboxFive" key={name}>
            <input type="checkbox" id={name} name={name} />
            <label for={name}> {displayName(name)}</label>
          </li>
        )
      })
  }
  function addMoreItems() {
    goShopping(false)
    homePage()
  }
  const buttonTitle = checked ? 'Select' : 'Unselect'
  return (
    <Fragment>
      <h2>{title} List</h2>
      <h3>Select items for your shop</h3>
      <p>you can select all if needed</p>
      <ul className="toSort">{showItems(items, chosen, alreadyInList)}</ul>
      <div className="shopAndAdd">
        <button onClick={handleAddRemoveAll}>{buttonTitle} All</button>
        <button onClick={goShopping}>Let's Shop</button>
        <button onClick={addMoreItems}>Add more items</button>
      </div>
      <button className="homeButton" onClick={homePage}>
        BACK
      </button>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    chosen: state.chosen,
    items: state.items,
    lists: state.lists,
    mainList: state.shoppingList
  }
}

export default connect(
  mapStateToProps,
  { addList, homePage }
)(ListToSort)

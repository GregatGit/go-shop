import React, { Fragment} from 'react'
import { connect } from 'react-redux'

const ListToSort = ({ chosen, items, lists}) => {
  const title = lists[chosen].name

  function showItems(list, key) {
    return list.filter(item => item.lists.indexOf(key) !== -1).map(a => {
      return (
        <li key={a.name}>{a.name}</li>
      )
    })
  }
  return (
    <Fragment>
      <h2>{title} List!</h2>
      <h3>Select items for your shop</h3>
      <p>you can select all if needed</p>
      {showItems(items, chosen)}
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    chosen: state.chosen,
    items: state.items,
    lists: state.lists
  }
}

export default connect(mapStateToProps,)(ListToSort)

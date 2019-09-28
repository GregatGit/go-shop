import React from 'react'
import { connect } from 'react-redux'

const MyList = ({list}) => {
  return (
    <div>
      My List
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList
  }
}
export default connect(mapStateToProps)(MyList)

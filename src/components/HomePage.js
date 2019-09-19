import React from 'react'
import { connect } from 'react-redux'
import { selectChosen, filterList } from '../actions'
import './styles.scss'

class HomePage extends React.Component {
  state = { user: 'Greg' }

  render() {
    return (
      <div>
        <h2>Hi {this.state.user}</h2>
        <ul className="myList">
          <li>
            <button className="myButton">QUICK LISTS</button>
          </li>
          <li>
            <button className="myButtonOff">YOUR LISTS</button>
          </li>
          <li>
            <button className="myButtonOff">MAKE A LIST</button>
          </li>
          <li>
            <button className="myButtonOff">IMPORT A LIST</button>
          </li>
          <li>
            <button className="myButtonOff">SEND A LIST</button>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(
  mapStateToProps,
  { selectChosen, filterList }
)(HomePage)

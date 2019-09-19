import React from 'react'
import { connect } from 'react-redux'
import { selectChosen, filterList } from '../actions'

class HomePage extends React.Component {
  state = { user: 'Greg' }

  render() {
    return (
      <div>
        <h2>Hi {this.state.user}</h2>
        <ul>
          <li>
            <button>QUICK LISTS</button>
          </li>
          <li>
            <button>YOUR LISTS</button>
          </li>
          <li>
            <button>MAKE A LIST</button>
          </li>
          <li>
            <button>IMPORT A LIST</button>
          </li>
          <li><button>SEND A LIST</button></li>
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

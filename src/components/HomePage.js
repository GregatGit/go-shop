import React from 'react'
import { connect } from 'react-redux'
import { selectChosen, filterList } from '../actions'
import Lists from './Lists'
import './styles.scss'

class HomePage extends React.Component {
  state = { user: 'Greg' }

  render() {
    return (
      <div>
        <Lists name={this.state.user} />
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

import React from 'react'
import { connect } from 'react-redux'
import { selectChosen, filterList } from '../actions'
import Lists from './Lists'
import YourLists from './YourLists'
import './styles.scss'

class HomePage extends React.Component {
  state = { user: 'Greg', show: 'Lists' }

  changeShow = (name) => {
    this.setState({show: name})
  }
  render() {
    return (
      <div>
        {this.state.show === 'Lists' && <Lists func={this.changeShow} name={this.state.user} />}
        {this.state.show === 'YourLists' && <YourLists />}
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

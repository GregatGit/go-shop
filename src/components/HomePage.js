import React from 'react'
import { connect } from 'react-redux'
import { selectChosen, filterList } from '../actions'
import Lists from './Lists'
import YourLists from './YourLists'
import TheList from './TheLists/Index'
import './styles.scss'

class HomePage extends React.Component {
  state = { user: 'Greg', show: 'Lists' }

  changeShow = (name) => {
    this.setState({show: name})
  }
  home = () => {
    console.log('bang')
    this.setState({show: 'Lists'})
  }
  render() {
    const { chosen } = this.props
    if (!chosen){
    return (
      <div>
        {this.state.show === 'Lists' && <Lists func={this.changeShow} name={this.state.user} />}
        {this.state.show === 'YourLists' && <YourLists home={this.home} />}
      </div>
    )} else {
      return <TheList />
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    chosen: state.chosen
  }
}

export default connect(
  mapStateToProps,
  { selectChosen, filterList }
)(HomePage)

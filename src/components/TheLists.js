import React from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'
// import { bindActionCreators } from 'redux';

class TheLists extends React.Component {
  
  render() {
    console.log(this.props.lists)
    return (
      <div>
        <HomePage lists={this.props.lists}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { lists: state.lists }
}

export default connect(mapStateToProps)(TheLists)

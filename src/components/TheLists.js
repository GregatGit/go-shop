import React from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
// import { bindActionCreators } from 'redux';

class TheLists extends React.Component {

  render() {
    return (
      <div>
        <Layout lists={this.props.lists}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { lists: state.lists }
}

export default connect(mapStateToProps)(TheLists)

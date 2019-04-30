import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import Layout from './Layout'
// import { bindActionCreators } from 'redux';

class TheLists extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <Layout lists={this.props.lists}/>
      </div>
    )
  }
}

TheLists.propTypes = {}

function mapStateToProps(state, ownProps) {
  return { lists: state.lists }
}

export default connect(mapStateToProps)(TheLists)

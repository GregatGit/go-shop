import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';

class TheLists extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return <div>the lists will appear here</div>
  }
}

TheLists.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(TheLists)

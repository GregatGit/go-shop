import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { displayName } from '../helpers/helpers'
import Layout from './Layout'
// import { bindActionCreators } from 'redux';

class TheLists extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  showLists = lists => {
    return _.map(lists, list => {
      return <li key={list.code}>{displayName(list.name)}</li>
    })
  }
  render() {
    return (
      <div>
        <ul>{this.showLists(this.props.lists)}</ul>
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

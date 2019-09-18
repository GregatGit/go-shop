import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayName } from '../helpers'

class MyList extends Component {
  displayItems = this.props.items.map(item => {
    return (
      <div>
        <div className="ui checkbox">
          <input type="checkbox" name="example" />
          <label><li key={item.name}>{displayName(item.name)}</li></label>
        </div>
        
      </div>
    )
  })

  render() {
    return (
      <div>
        <ul>{this.displayItems}</ul>
        <br />
        <Link to="/">
          <i aria-hidden="true" className="home huge icon" />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    lists: state.lists,
    chosen: state.chosen,
  }
}

export default connect(mapStateToProps)(MyList)

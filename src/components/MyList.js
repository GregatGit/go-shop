import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MyList extends Component {
  render() {
    return (
      <div>
        <div>My list will come soon!!</div>
        <Link to="/">
          <i aria-hidden="true" className="home huge icon" />
        </Link>
      </div>
    )
  }
}

export default MyList

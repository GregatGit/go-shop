import React from 'react'
import _ from 'lodash'
import { displayName } from '../helpers/helpers'

const Layout = props => {
  console.log(props)
  const listSegments = _.map(props.lists, list => {
    return (
      <div key={list.code} className="ui segment">{displayName(list.name)}</div>
    )
  })
  return (
    <div className="ui equal width grid">
      <div className="stretched row">
        <div className="column">
          {listSegments}
        </div>
        <div className="six wide column">
          <div className="ui segment">
            <img
              src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              className="ui image"
            />
          </div>
        </div>
        <div className="column">
          <div className="ui segment">1</div>
          <div className="ui segment">2</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="ui segment">1</div>
          <div className="ui segment">2</div>
        </div>
        <div className="six wide column">
          <div className="ui segment">
            <img
              src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              className="ui image"
            />
          </div>
        </div>
        <div className="column">
          <div className="ui segment">1</div>
          <div className="ui segment">2</div>
        </div>
      </div>
    </div>
  )
}

export default Layout

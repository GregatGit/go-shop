import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { selectChosen } from '../actions'
import { displayName } from '../helpers/helpers'

class Layout extends React.Component {
  state = { message: 'Pick a list'}

  listSegments = _.map(this.props.lists, list => {
    return (
      <div 
      onClick={() => {
        this.setState({message: list.description})
        this.props.selectChosen(list.code)}}
      key={list.code} className="ui segment">
        {displayName(list.name)}
      </div>
    )
  })
  render() {
    return (
      <div className="ui equal width grid">
        <div className="stretched row">
          <div className="column">{this.listSegments}</div>
          <div className="six wide column">
            <div className="ui segment">
              <div>{this.state.message}</div>
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
}

export default connect(null, { selectChosen })(Layout)

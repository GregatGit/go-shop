import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectChosen, filterList } from '../actions'
import { displayName } from '../helpers'

class HomePage extends React.Component {
  state = { message: 'Pick a list', list: 'none', code: '' }

  listSegments = _.map(this.props.lists, list => {
    return (
      <div
        onClick={() => {
          this.setState({
            message: list.description,
            list: displayName(list.name),
            code: list.code,
          })
          this.props.selectChosen(list.code)
        }}
        key={list.code}
        className="ui segment"
      >
        {displayName(list.name)}
        <button className="ui blue right floated button">O</button>
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
              <br />
              {this.state.list === 'none' ? (
                ''
              ) : (
                <Link to="/page2">
                  <button
                    onClick={() => this.props.filterList(this.state.code)}
                    className="ui fluid button"
                  >
                    LOAD <u>{this.state.list}</u> LIST
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <h3>CREATE A BRAND NEW LIST</h3>
              <br />
              <button className="ui fluid button">NEW LIST</button>
            </div>
            <div className="ui segment">2</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
  }
}

export default connect(
  mapStateToProps,
  { selectChosen, filterList }
)(HomePage)

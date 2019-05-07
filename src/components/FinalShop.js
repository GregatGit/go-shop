import React, { Component } from 'react'
import { connect } from 'react-redux'

class FinalShop extends Component {
  state = { items: [] }

  componentDidMount() {
    const items = Object.keys(this.props.items)
    this.setState({ items })
  }
  showItems = (names, itemList) => {
    return names.map(name => {
      return (
        <div class="ui relaxed items">
          <div class="item">
            <div class="ui small image">
              <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </div>
            <div class="middle aligned content">
              <div class="header">{itemList[name].name}</div>
              <div class="description">
                <img
                  src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                  class="ui image"
                />
              </div>
              <div class="extra">
                <button class="ui right floated button">Action</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <h1>LETS GO SHOPPING</h1>
        <p>your list will apear here</p>
        {this.showItems(this.state.items, this.props.items)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.final,
  }
}

export default connect(mapStateToProps)(FinalShop)

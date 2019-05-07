import React, { Component } from 'react'
import { connect } from 'react-redux'
import { statusIsBought } from '../actions'
import { displayName } from '../helpers/helpers'

class FinalShop extends Component {
  state = { items: [] }

  componentDidMount() {
    const items = Object.keys(this.props.items)
    this.setState({ items })
  }

  itemBought = (name) => {
    this.props.statusIsBought(name)
  }

  showItems = (names, itemList) => {
    return names.map(name => {
      if (itemList[name].status !== 'buy'){
        return
      }
      return (
        <div key={name} className="ui relaxed items">
          <div className="item">
            <div className="ui small image">
              <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </div>
            <div className="middle aligned content">
              <div className="header">{displayName(itemList[name].name)}</div>
              <div className="description">
                <p>{itemList[name].description}</p>
              </div>
              <div className="extra">
                <button onClick={() => this.itemBought(itemList[name].name)} className="ui right floated button">DONE</button>
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

export default connect(mapStateToProps, { statusIsBought })(FinalShop)

import React from 'react'
import { connect } from 'react-redux'

class NewItem extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <b>ADD NEW ITEMS</b>
        </h3>
        <div className="form">
          <p>Item name</p>
          <input type="text" id="newItemName" maxlength="15" />
        </div>
        <div className="form">
          <p>Store or Market</p>
          <select id="storeName">
            <option value="Aldi">Aldi</option>
            <option value="Coles">Coles</option>
            <option value="Fruit_Market">Fruit Market</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form">
          <p>Item Category</p>
          <select id="categoryType">
            <option value="produce">Produce </option>
            <option value="fresh">Fresh </option>
            <option value="canned">Canned </option>
            <option value="cleaning">Cleaning </option>
          </select>
        </div>
        <div className="form">
          <p>Add to choices</p>
          <button onclick="handlers.addNewItem()" className="btn btn-success">
            ADD
          </button>
          <button
            onclick="handlers.removeMakeNewItems()"
            className="btn btn-success"
          >
            X
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(NewItem)

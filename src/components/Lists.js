import React from 'react'

const Lists = ({ name, func }) => {
  return (
    <div>
      <h2>Hi {name}</h2>
      <ul className="myList">
      <li>
          <button className="myButton" onClick={() => func('YourLists')}>YOUR LISTS</button>
        </li>
        <li>
          <button className="myButtonOff">QUICK LISTS</button>
        </li>
        <li>
          <button className="myButtonOff">MAKE A LIST</button>
        </li>
        <li>
          <button className="myButtonOff">IMPORT A LIST</button>
        </li>
        <li>
          <button className="myButtonOff">SEND A LIST</button>
        </li>
      </ul>
    </div>
  )
}

export default Lists

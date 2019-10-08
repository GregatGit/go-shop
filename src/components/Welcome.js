import React from 'react'
import About from './Dialog/About'

const Welcome = () => {
  return (
    <div>
      <div>
        <h1>GO SHOP</h1>
        <p>Welcome to go shop.</p>
        <p>Create your own list for easy shopping.</p>
        <p>You can add and remove items to your list from other lists.</p>
        <p>At MY LIST you can see what is on your list.</p>
        <p>You can remove items or mark them as bought or not bought.</p>
        <p>Once your happy with your list you're ready to shop.</p>
        <p>To start press the LISTS button above</p>
      </div>
      <About />
    </div>
  )
}

export default Welcome

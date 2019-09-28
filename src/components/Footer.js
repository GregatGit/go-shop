import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <button>
        <Link to="/go-shop/">HOME</Link>
      </button>
      <button>
        <Link to="/go-shop/lists">LISTS</Link>
      </button>
      <button>MY LIST</button>
      <button>
        <Link to="/go-shop/shoppingList">LETS SHOP</Link>
      </button>
    </footer>
  )
}

export default Footer

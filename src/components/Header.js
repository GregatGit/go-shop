import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/go-shop/">
        <button>HOME</button>
      </Link>
      <Link to="/go-shop/lists">
        <button>LISTS</button>
      </Link>
      <Link to="/go-shop/myList">
        <button>MY LIST</button>
      </Link>
      <Link to="/go-shop/shoppingList">
        <button>LETS SHOP</button>
      </Link>
    </header>
  )
}

export default Header

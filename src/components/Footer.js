import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <button><Link to="/">HOME</Link></button>
      <button>
        <Link to="/lists">LISTS</Link>
      </button>
      <button>MY LIST</button>
      <button>LETS SHOP</button>
    </footer>
  )
}

export default Footer

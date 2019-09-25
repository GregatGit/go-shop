import React, { useState} from 'react'
import ListToSort from './ListToSort'
import ShoppingList from './ShoppingList'
import './styles.scss'

const TheList = () => {
  const [shopping, setShopping] = useState(false)

  const goShop = () => {
    setShopping(true)
  }

  return (
    <div>
      {!shopping && <ListToSort goShop={goShop} />}
      {shopping && <ShoppingList />}
    </div>
  )
}

export default TheList

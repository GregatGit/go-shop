import React, { useState} from 'react'
import ListToSort from './ListToSort'

const TheList = () => {
  const [shopping, setShopping] = useState(false)
  return (
    <div>
      {!shopping && <ListToSort />}
    </div>
  )
}

export default TheList

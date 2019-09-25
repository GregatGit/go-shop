import { ADD_LIST, ITEM_BOUGHT, EMPTY_SHOPPINGLIST } from '../actions'

export default function (state = [], action) {
  
  switch (action.type) {
    case ADD_LIST:
      return [...state, ...action.payload]

    case ITEM_BOUGHT:
      const keys = state.map(({name}) => name)
      const index = keys.indexOf(action.payload)
      const altered = [...state]
      altered[index].done = true
      return altered

    case EMPTY_SHOPPINGLIST:
      return []
      
    default:
      return state
  }
  
}


import { ADD_LIST, ITEM_BOUGHT, EMPTY_SHOPPINGLIST, UNDO_LIST } from '../actions'

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
    
    case UNDO_LIST:
      console.log(action)
      const newState = [...state]
      console.log(newState)
      for (let i = 0; i < newState.length; i++){
        if (newState[i].name === action.payload){
          newState[i].done = false
          return newState
        }
      }
      return newState
      
    default:
      return state
  }
  
}


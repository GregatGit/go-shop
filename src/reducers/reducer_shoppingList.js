import { ADD_LIST, ITEM_BOUGHT } from '../actions'

export default function (state = [], action) {
  
  switch (action.type) {
    case ADD_LIST:
      const newList = action.payload.map(item => {
        return {...item, done: false, skip: false}
      })
      return newList
    case ITEM_BOUGHT:
      const keys = state.map(({name}) => name)
      const index = keys.indexOf(action.payload)
      const altered = [...state]
      altered[index].done = true
      return altered
    default:
      return state
  }
  
}


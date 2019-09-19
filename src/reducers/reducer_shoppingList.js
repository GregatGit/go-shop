import { ADD_LIST } from '../actions'

export default function (state = [], action) {
  
  switch (action.type) {
    case ADD_LIST:
      const newList = action.payload.map(item => {
        return {...item, done: false, skip: false}
      })
      return newList
      
  
    default:
      return state
  }
  
}


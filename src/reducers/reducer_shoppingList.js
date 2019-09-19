import { ADD_LIST } from '../actions'

export default function (state = [], action) {
  
  switch (action.type) {
    case ADD_LIST:
      return [...action.payload]
      
      break;
  
    default:
      return state
  }
  
}


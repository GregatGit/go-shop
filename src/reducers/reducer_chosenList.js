import { LIST_CHOSEN, HOME_PAGE } from '../actions/index.js'


export default function(state = null, action) {
  switch (action.type) {
    case LIST_CHOSEN:
      return action.payload

    case HOME_PAGE:
      return null 
      
    default:
      break
  }

  return state
}

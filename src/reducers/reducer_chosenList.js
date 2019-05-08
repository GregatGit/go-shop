import { LIST_CHOSEN } from '../actions/index.js'
let message = 'no list selected'

export default function(state = message, action) {
  switch (action.type) {
    case LIST_CHOSEN:
      return action.payload
    default:
      break
  }

  return state
}

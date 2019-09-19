import { LIST_CHOSEN } from '../actions/index.js'


export default function(state = null, action) {
  switch (action.type) {
    case LIST_CHOSEN:
      return action.payload
    default:
      break
  }

  return state
}

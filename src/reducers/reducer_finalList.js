import items from '../data/testData.json'
import { STATUS_IS_BOUGHT } from '../actions'

export default function(state = null, action) {
  if (!state) {
    return items
  }
  switch (action.type) {
    case STATUS_IS_BOUGHT:
      const newState = { ...state }
      newState[action.payload].status = 'bought'
      return newState

    default:
      break
  }

  return state
}

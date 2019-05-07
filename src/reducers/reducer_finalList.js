import items from '../data/testData.json'
import { STATUS_IS_BOUGHT, STATUS_IS_SKIP } from '../actions'

export default function(state = null, action) {
  if (!state) {
    return items
  }
  switch (action.type) {
    case STATUS_IS_BOUGHT:
      const boughtState = { ...state }
      boughtState[action.payload].status = 'bought'
      return boughtState

    case STATUS_IS_SKIP:
      const skipState = { ...state }
      skipState[action.payload].status = 'skip'
      return skipState
    default:
      break
  }

  return state
}

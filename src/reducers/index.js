import { combineReducers } from 'redux'
import items from './reducer_items'
import lists from './reducer_lists'

const rootReducer = combineReducers({
  items,
  lists
})

export default rootReducer

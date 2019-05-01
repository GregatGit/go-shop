import { combineReducers } from 'redux'
import items from './reducer_items'
import lists from './reducer_lists'
import chosen from './reducer_chosenList'

const rootReducer = combineReducers({
  items,
  lists,
  chosen
})

export default rootReducer

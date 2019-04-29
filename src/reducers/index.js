import { combineReducers } from 'redux'
import items from './reducer_items'

const rootReducer = combineReducers({
  items,
})

export default rootReducer

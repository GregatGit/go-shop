import { combineReducers } from 'redux'
import lists from './reducer_lists'

const rootReducer = combineReducers({
  lists,
})

export default rootReducer

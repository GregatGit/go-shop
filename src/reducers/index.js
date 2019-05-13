import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import items from './reducer_items'
import lists from './reducer_lists'
import chosen from './reducer_chosenList'
import final from './reducer_finalList'

const rootReducer = combineReducers({
  items,
  lists,
  chosen,
  final,
  form: formReducer
})

export default rootReducer

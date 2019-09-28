import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import items from './reducer_items'
import lists from './reducer_lists'
import shoppingList from './reducer_shoppingList'
import completed from './reducer_completedList'

const rootReducer = combineReducers({
  shoppingList,
  items,
  lists,
  completed,
  form: formReducer
})

export default rootReducer

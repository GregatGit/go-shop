import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import items from './reducer_items'
import lists from './reducer_lists'
import chosen from './reducer_chosenList'
import shoppingList from './reducer_shoppingList'
import completed from './reducer_completedList'

const rootReducer = combineReducers({
  shoppingList,
  items,
  lists,
  chosen,
  completed,
  form: formReducer
})

export default rootReducer

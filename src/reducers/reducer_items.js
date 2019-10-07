import items from '../data/items.json'
//import _ from 'lodash'
import { LIST_FILTER, ADD_ITEM } from '../actions'

export default function(state = null, action) {
  if (!state) {
    //return _.mapKeys(items, 'name')
    return items
  }
  switch (action.type) {
    case LIST_FILTER:
     return state.filter(item => {
       return item.lists.indexOf(action.payload) > -1
     })

     case ADD_ITEM:
       return [...state, action.payload]
     default:
       return state
  }
}

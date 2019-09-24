import items from '../data/items.json'
//import _ from 'lodash'
import { LIST_FILTER } from '../actions'

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
     default:
       return state
  }
}

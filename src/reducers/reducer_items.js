import items from '../data/items.json'
import _ from 'lodash'

export default function(state = null, action) {
  if (!state) {
    state = _.mapKeys(items, 'store')
  }

  return state
}

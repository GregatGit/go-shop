import lists from '../data/lists.json'
import _ from 'lodash'

export default function(state = null, action) {
  if (!state) {
    state = _.mapKeys(lists, 'name')
  }

  return state
}

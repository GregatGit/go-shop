import items from '../data/testData.json'

export default function(state = null, action) {
  if (!state) {
    return items
  }

  return state
}
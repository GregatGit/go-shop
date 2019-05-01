
//  capitalize and remove underscore
export const displayName = (name) => {
  return name.replace(/_/g, " ").toUpperCase()
}

// returns an array of items that have matching code
export const getItems = (list, code) => {
  return list.filter(item => {
    return item.lists.indexOf(code) > -1
  })
}
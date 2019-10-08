
//  capitalize and remove underscore
export const displayName = (name) => {
  return name.replace(/_/g, " ").toUpperCase()
}

// returns an array of items that have matching list-code
export const getItems = (list, code) => {
  return list.filter(item => {
    return item.lists.indexOf(code) > -1
  })
}

// checks that name is acceptable
export function checkName(name) {
  let str = name.trim()
  const error = { errorStatus: false, message: ''}
  if (str.length < 3){
    error.errorStatus = true
    error.message = 'name must be 3 letters or more'
    return error
  }

  return error
}
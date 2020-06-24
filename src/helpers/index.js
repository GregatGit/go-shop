import React from 'react'
// returns an array that has counter
import FilterNoneRoundedIcon from '@material-ui/icons/FilterNoneRounded'
import Filter1RoundedIcon from '@material-ui/icons/Filter1Rounded'
import Filter2RoundedIcon from '@material-ui/icons/Filter2Rounded'
import Filter3RoundedIcon from '@material-ui/icons/Filter3Rounded'
import Filter4RoundedIcon from '@material-ui/icons/Filter4Rounded'
import Filter5RoundedIcon from '@material-ui/icons/Filter5Rounded'
import Filter6RoundedIcon from '@material-ui/icons/Filter6Rounded'
import Filter7RoundedIcon from '@material-ui/icons/Filter7Rounded'
import Filter8RoundedIcon from '@material-ui/icons/Filter8Rounded'
import Filter9RoundedIcon from '@material-ui/icons/Filter9Rounded'
import Filter9PlusRoundedIcon from '@material-ui/icons/Filter9PlusRounded'
export function indexHelper(arr, name){
  const obj = {}
  arr.forEach((str, index) => {
    obj[index] = {[name]: str, count: 0, index} 
  })
  return obj
}

export function getInitialCount(list, catList){
  const obj = {}
  catList.forEach((cat, index) => {
    obj[cat] = { name: cat, count: 0, index} 
  })
  list.filter(item => !item.done).forEach(item => {
    obj[item.category].count++
  })
  return obj
}

export function nameToIndex(arr){
  const obj = {}
  arr.forEach((name, index) => {
    obj[name] = index
  })
  return obj
}

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

// export function returnIcon1(num){
  
//   switch (num) {
//     case 0:
//       return `<FilterNoneRoundedIcon /`
//     case 1 - 9:
//       return `<Filter${num}RoundedIcon />`
  
//     default:
//       return `<Filter9PlusRoundedIcon />`
//   }
// }



export function returnIcon(num) {
  switch (num) {
    case 0:
      return <FilterNoneRoundedIcon />
    case 1:
      return <Filter1RoundedIcon />
    case 2:
      return <Filter2RoundedIcon />
    case 3:
      return <Filter3RoundedIcon />
    case 4:
      return <Filter4RoundedIcon />
    case 5:
      return <Filter5RoundedIcon />
    case 6:
      return <Filter6RoundedIcon />
    case 7:
      return <Filter7RoundedIcon />
    case 8:
      return <Filter8RoundedIcon />
    case 9:
      return <Filter9RoundedIcon />
    default:
      return <Filter9PlusRoundedIcon />
  }
}
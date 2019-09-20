
export const LIST_CHOSEN = 'LIST_CHOSEN'
export const LIST_FILTER = 'LIST_FILTER'
export const STATUS_IS_BOUGHT = 'STATUS_IS_BOUGHT'
export const STATUS_IS_SKIP = 'STATUS_IS_SKIP'
export const ADD_LIST = 'ADD_LIST'
export const ITEM_BOUGHT = 'ITEM_BOUGHT'
export const HOME_PAGE = 'HOME_PAGE'
export const COMPLETED_LIST = 'COMPLETED_LIST'

export function completedList(list) {
  return { 
    type: COMPLETED_LIST,
    payload: list
  }
}

export function homePage() {
  return {
    type: HOME_PAGE
  }
}

export function itemBought(name) {
  return {
    type: ITEM_BOUGHT,
    payload: name
  }
}

export function addList(list) {
  return {
    type: ADD_LIST,
    payload: list
  }
}

export const selectChosen = (listName) => {
  return {
    type: LIST_CHOSEN,
    payload: listName
  }
}

export const filterList = (listCode) => {
  return {
    type: LIST_FILTER,
    payload: listCode
  }
}

export const statusIsBought = (name) => {
  return {
    type: STATUS_IS_BOUGHT,
    payload: name
  }
}

export const statusIsSkip = (name) => {
  return {
    type: STATUS_IS_SKIP,
    payload: name
  }
}

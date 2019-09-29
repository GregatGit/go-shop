
export const LIST_FILTER = 'LIST_FILTER'
export const STATUS_IS_BOUGHT = 'STATUS_IS_BOUGHT'
export const STATUS_IS_SKIP = 'STATUS_IS_SKIP'
export const ADD_LIST = 'ADD_LIST'
export const HOME_PAGE = 'HOME_PAGE'
export const ITEM_BOUGHT = 'ITEM_BOUGHT'
export const ITEM_DELETE = 'ITEM_DELETE'
export const TOGGLE_ITEM_DONE = 'TOGGLE_ITEM_DONE'
export const COMPLETED_LIST = 'COMPLETED_LIST'
export const EMPTY_SHOPPINGLIST = 'EMPTY_SHOPPINGLIST'
export const UNDO_LIST = 'UNDO_LIST'

export function itemDelete(index) {
  return {
    type: ITEM_DELETE,
    payload: index
  }
}

export function toggleItemDone(index) {
  return {
    type: TOGGLE_ITEM_DONE,
    payload: index
  }
}

export function undo(name) {
  return {
    type: UNDO_LIST,
    payload: name
  }
}

export function emptyShoppingList() {
  return {
    type: EMPTY_SHOPPINGLIST
  }
}

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
  const newList = list.map(item => {
    return {...item, done: false, skip: false}
  })
  return {
    type: ADD_LIST,
    payload: newList
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

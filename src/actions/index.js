
export const LIST_CHOSEN = 'LIST_CHOSEN'
export const LIST_FILTER = 'LIST_FILTER'
export const STATUS_IS_BOUGHT = 'STATUS_IS_BOUGHT'

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

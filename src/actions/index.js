
export const LIST_CHOSEN = 'LIST_CHOSEN'

export const selectChosen = (listName) => {
  return {
    type: LIST_CHOSEN,
    payload: listName
  }
}

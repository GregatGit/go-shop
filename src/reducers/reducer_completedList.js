import { COMPLETED_LIST } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case COMPLETED_LIST:
        return [...state, action.payload]
  
    default:
      return state
  }
};




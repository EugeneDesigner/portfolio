import * as actionTypes from '../constants/actionTypes'

const initialState = {
  category: '',
  works: []
}


export default function MainReducer(state= initialState, action) {
  switch (action.type) {
    case actionTypes.CHOOSE_CATEGORY:
      return {...state, category: action.payload}
    case actionTypes.DISPLAY_WORKS:
      return {...state, works: action.payload}
    default:
      return state
  }
}

import { SHOW_SHIRTS } from '../actions/showShirts'

const initialState = {
  list: []
}

export function showShirts(state = initialState, action){
  switch(action.type){
    case SHOW_SHIRTS:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state;
  }
}
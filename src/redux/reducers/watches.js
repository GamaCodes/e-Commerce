import { SHOW_WATCHES } from '../actions/showWatches'

const initialState = {
  list: []
}

export function showWatches(state = initialState, action){
  switch(action.type){
    case SHOW_WATCHES:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state;
  }
}
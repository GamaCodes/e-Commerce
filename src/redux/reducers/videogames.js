import { SHOW_VIDEOGAMES } from '../actions/showVideogames'

const initialState = {
  list: []
}

export function showVideogames(state = initialState, action){
  switch(action.type){
    case SHOW_VIDEOGAMES:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state;
  }
}
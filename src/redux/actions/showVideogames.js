import axios from 'axios'

export const SHOW_VIDEOGAMES = 'SHOW_VIDEOGAMES'


export function showVideogames(){
    return (dispatch) => {
        axios.get('https://node-red-nxdup.mybluemix.net/productos/videojuego/1')
        .then((response) => {
            dispatch({ type: SHOW_VIDEOGAMES, payload: response.data.data.products })
        })
    }

}
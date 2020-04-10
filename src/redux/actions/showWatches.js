import axios from 'axios'

export const SHOW_WATCHES = 'SHOW_WATCHES'


export function showWatches(){
    return (dispatch) => {
        axios.get('https://node-red-nxdup.mybluemix.net/productos/reloj/1')
        .then((response) => {
            dispatch({ type: SHOW_WATCHES, payload: response.data.data.products })
        })
    }

}
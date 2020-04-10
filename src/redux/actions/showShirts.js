import axios from 'axios'

export const SHOW_SHIRTS = 'SHOW_SHIRTS'


export function showShirts(){
    return (dispatch) => {
        axios.get('https://node-red-nxdup.mybluemix.net/productos/camisa/1')
        .then((response) => {
            dispatch({ type: SHOW_SHIRTS, payload: response.data.data.products })
        })
    }
}
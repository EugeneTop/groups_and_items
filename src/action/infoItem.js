import axios from 'axios';

export const getInfoItem = (id) => dispatch => {
    return axios.get('https://webilesoft-backend.herokuapp.com/items/' + id)
        .then(response => {
            dispatch({ type: 'GET_INFO_ITEM', payload: response.data.item})
        })
}
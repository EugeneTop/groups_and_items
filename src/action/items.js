import axios from 'axios';

export const getItems = (id) => dispatch => {
    return axios.get('https://webilesoft-backend.herokuapp.com/groups/items/' + id)
        .then(response => {
            dispatch({ type: 'GET_ITEMS', payload: response.data.items })
        })
}
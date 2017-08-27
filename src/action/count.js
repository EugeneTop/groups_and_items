import axios from 'axios';

export const getCount = (id) => dispatch => {
    return axios.get('https://webilesoft-backend.herokuapp.com/groups/items/' + id)
        .then(response => {
            dispatch({ type: 'COUNT', payload: response.data.items.length});
        });
}
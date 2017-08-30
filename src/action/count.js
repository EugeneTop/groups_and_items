import axios from 'axios';

var obj = {};

export const getCount = (id) => dispatch => {
    return axios.get('https://webilesoft-backend.herokuapp.com/groups/items/' + id)
        .then(response => {
            obj ={
              name: id,
              length: response.data.items.length
            };
            dispatch({ type: 'COUNT', payload: obj});
        });
}
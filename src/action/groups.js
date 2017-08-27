import axios from 'axios';

export const getGroups = () => dispatch => {
    return axios.get('https://webilesoft-backend.herokuapp.com/groups')
        .then(response => {
            dispatch({ type: 'GROUPS', payload: response.data.groups })
        });
}
const initialState = [];

export default function items(state = initialState, action) {
    if (action.type === 'GET_ITEMS') {
        return action.payload;
    }
    return state;
}

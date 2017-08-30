const initialState = [];

export default function count(state = initialState, action) {
    if (action.type === 'COUNT') {
        return action.payload
    }
    return state;
}

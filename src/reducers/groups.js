const initialState = [];

export default function groups(state = initialState, action) {
    if (action.type === 'GROUPS') {
        return action.payload;
    }
    return state;
}

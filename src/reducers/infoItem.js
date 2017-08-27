const initialState = [];

export default function infoItem(state = initialState, action) {
    if (action.type === 'GET_INFO_ITEM') {
        return action.payload;
    }
    return state;
}

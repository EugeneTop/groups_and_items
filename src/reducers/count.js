const initialState = [

];

export default function count(state = initialState, action) {
    if (action.type === 'COUNT') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

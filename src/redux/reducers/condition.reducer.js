

const conditionReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CONDITION':
            return action.payload;
        default:
            return state;
    }
}
export default conditionReducer;
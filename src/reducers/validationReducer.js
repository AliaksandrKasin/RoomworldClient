export default function validationReducer(state = initialState, action) {
    switch (action.type) {


        case 'DESCRIPTION':
            return Object.assign({}, state, {validateDescription: action.state})


        default:
            return state;
    }
}
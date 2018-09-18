import selectFlat from "../actions/selectFlat";

const initialState = {
    flats: []
};


export default function flatReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIST_FLATS':
            return Object.assign({}, state, {flats: action.flats});

        case 'SELECTED_FLAT':
            return Object.assign({}, state, {selectedFlat: action.id});

        default:
            return state;
    }
}
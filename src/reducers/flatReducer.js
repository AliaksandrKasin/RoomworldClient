import selectFlat from "../actions/idSelectedFlat";

const initialState = {
    flats: []
};


export default function flatReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIST_FLATS':
            return Object.assign({}, state, {flats: action.flats});

        case 'ID_SELECTED_FLAT':
            return Object.assign({}, state, {idSelectedFlat: action.id});

        case 'SELECTED_FLAT':
            return Object.assign({}, state, {selectedFlat: action.flat});

        case 'SEARCH':
            return Object.assign({}, state, {searchParams: action.searchParams});


        default:
            return state;
    }
}
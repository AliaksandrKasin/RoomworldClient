import selectFlat from "../actions/idSelectedFlat";

const initialState = {
    flats: [],
    selectedFlat: {
        location: {
            country: "",
            city: ""
        },
        houseRuleses: [],
        amentieses: []
    },

    searchParams: {
        country: "",
        city: ""
    },

    page: {
        skip: 0,
        take: 2
    }
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

        case 'PAGE':
            return Object.assign({}, state, {searchParams: action.pageProps});


        default:
            return state;
    }
}
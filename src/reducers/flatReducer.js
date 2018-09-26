import selectFlat from "../actions/idSelectedFlat";

const initialState = {
    flats: [],
    selectedFlat: {
        placeTitle: "",
        placeDescription: "",

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
    },
    modalWindow: false,

    selectedMenu: "Profile"
};
/* case 'ID_SELECTED_FLAT':
            return Object.assign({}, state, {idSelectedFlat: Object.assign({}, state.idSelectedFlat.id, action.id) action.id});*/

export default function flatReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIST_FLATS':
            return Object.assign({}, state, {flats: action.flats});

        case 'ID_SELECTED_FLAT':
            return Object.assign({}, state, {idSelectedFlat: action.id});

        case 'SELECTED_FLAT':
            return Object.assign({}, state, {selectedFlat: action.flat});

        case 'ADD_RULES':
            return Object.assign({}, state, {selectedFlat: {houseRuleses: [...state.selectedFlat.houseRuleses, action.rule]}});

        case 'DELETE_RULES':
            return Object.assign({}, state, {selectedFlat: {houseRuleses: state.selectedFlat.houseRuleses.filter(value => value.title !== action.title)}});

        case 'SEARCH':
            return Object.assign({}, state, {searchParams: action.searchParams});

        case 'PAGE':
            return Object.assign({}, state, {searchParams: action.pageProps});

        case 'MODAL_WINDOW':
            return Object.assign({}, state, {modalWindow: action.state})

        case 'SELECT_PROFILE_MENU':
            return Object.assign({}, state, {selectedMenu: action.state})


        default:
            return state;
    }
}
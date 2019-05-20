import {
    SET_PROFILE,
    SET_CHANGED_PROFILE,
    SET_PHONE_NUMBER,
    SET_PROFILE_NAME,
    SET_PROFILE_SURNAME
} from "../actions/profileAction";

const initialState = {
    user: {},
    profile: {},
    changedProfile: {}
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return Object.assign({}, state, {profile: action.profile});

        case SET_CHANGED_PROFILE:
            return Object.assign({}, state, {changedProfile: action.changedProfile});

        case SET_PROFILE_NAME:
            return Object.assign({}, state, Object.assign(state.changedProfile, {name: action.name}));

        case SET_PROFILE_SURNAME:
            return Object.assign({}, state, Object.assign(state.changedProfile, {surname: action.surname}));
        case SET_PHONE_NUMBER:
            return Object.assign({}, state, Object.assign(state.changedProfile, {phoneNumber: action.phoneNumber}));


        default:
            return initialState;
    }
}

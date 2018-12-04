const initialState = {
    user: {
        name: "",
        surname: "",
        role: "1",
        email: "",
        password: "",
        phoneNumber: ""
    }
}

export default function userRegistrationReducer(state = initialState, action) {
    switch (action.type) {

        case 'ADD_USER':
            return Object.assign({}, state, {user: action.state})

        case 'NAME':
            return Object.assign({}, state,   Object.assign(state.user,{name: action.state}))

        case 'SURNAME':
            return Object.assign({}, state,   Object.assign(state.user,{surname: action.state}))

        case 'EMAIL':
            return Object.assign({}, state,   Object.assign(state.user,{email: action.state}))

        case 'PASSWORD':
            return Object.assign({}, state,   Object.assign(state.user,{password: action.state}))

        case 'PHONE_NUMBER':
            return Object.assign({}, state,   Object.assign(state.user,{phoneNumber: action.state}))

        case 'CONFIRM':
            return Object.assign({}, state,   Object.assign(state.user,{confirmPassword: action.state}))


        default:
            return state;
    }
}
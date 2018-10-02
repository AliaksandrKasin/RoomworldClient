
const initialState = {
    user:{},
    changedProfile: {}
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {


        case 'name':
            return Object.assign({}, state, Object.assign(state.changedProfile,{name: action.state}));

        case 'surname':
            return Object.assign({}, state, Object.assign(state.changedProfile,{surname: action.state}));

        case 'phoneNumber':
            return Object.assign({}, state, Object.assign(state.changedProfile,{phoneNumber: action.state}));


        case 'changeProfile':
            return Object.assign({}, state, {changedProfile: action.state});

        case 'user':
            return Object.assign({}, state, {user: action.state});

        case 'valid':
            return Object.assign({}, state, {valid: action.state});


        default:
            return state;
    }
}
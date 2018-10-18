const initialState = {
    chat: {
        isOpen: false
    }
}

export default function chatReducer(state = initialState, action) {

    switch (action.type) {

        case 'CHAT_IS_OPEN':
            return Object.assign({}, state, {chat: Object.assign(state.chat, {isOpen: action.state})});

        default:
            return state;
    }
}
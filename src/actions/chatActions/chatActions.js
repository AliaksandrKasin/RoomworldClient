export function initialState() {
    return {
        type: 'INITIAL'
    }
}

export function chatState(state) {
    return {
        type: 'CHAT_IS_OPEN',
        state
    }
}


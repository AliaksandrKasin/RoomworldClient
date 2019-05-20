import {combineReducers, createStore} from 'redux';
import chatReducer from "./reducers/chatReducer";
import apartmentReducer from "./reducers/apartmentReducer";
import profileReducer from "./reducers/profileReducer";

const localStorageKey = 'room-world-storage';
const reducers = combineReducers({apartmentReducer, chatReducer, profileReducer});

const oldState = loadState();
const STORE = createStore(reducers, oldState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default STORE;

STORE.subscribe(() => {
    saveState(STORE.getState());
});

function loadState() {
    try {
        const serializedState = window.sessionStorage.getItem(localStorageKey);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

function saveState(state) {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem(localStorageKey, serialisedState);
    } catch (e) {
    }
}


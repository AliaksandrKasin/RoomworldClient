import {createStore, applyMiddleware, combineReducers} from 'redux';
import chatReducer from "./reducers/chatReducer";
import apartmentReducer from "./reducers/apartmentReducer";
import createEngine from 'redux-storage-engine-localstorage';
import * as storage from 'redux-storage'

const localStorageKey = 'room-world-storage';

const reducers = combineReducers({apartmentReducer, chatReducer});
const engine = createEngine(localStorageKey);
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const oldState = loadFromLocalStorage(localStorageKey);
const STORE = createStoreWithMiddleware(reducers, oldState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default STORE;

export function loadFromLocalStorage(localStorageKey) {
    try {
        const serializedState = localStorage.getItem(localStorageKey);
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return null;
    }
}
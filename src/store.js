import {createStore} from 'redux';
import {combineReducers} from 'redux'
import chatReducer from "./reducers/chatReducer";
import apartmentReducer from "./reducers/apartmentReducer";

const reducers = combineReducers({
    apartmentReducer,
    chatReducer
});

const STORE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default STORE;
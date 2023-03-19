
import { createStore } from 'redux';
import { createStoreHook } from "react-redux";
import rootReducer from "./reducer";

const store= createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
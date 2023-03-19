import {todoReducer} from './Todoreducer';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    todoReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import authReducer from "./Auth/authReducers";

const reducers = combineReducers({
    auth: authReducer
})

export default reducers;

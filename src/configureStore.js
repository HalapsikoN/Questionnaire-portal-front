import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./store/reducer";
import thunkMiddleware from "redux-thunk"

export const rootReducer = combineReducers({
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
import {applyMiddleware, createStore} from "redux";
import {userReducer} from "./store/reducer";
import thunkMiddleware from "redux-thunk"

export const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
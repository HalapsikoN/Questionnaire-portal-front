import {AUTH_KEY, USER_EMAIL, USER_ID} from "../constants";
import {ACTION_ERROR, ACTION_LOG_IN} from "./storeConstatns";

const initialState = {
    id: localStorage.getItem(USER_ID) || '',
    authKey: localStorage.getItem(AUTH_KEY) || '',
    email: localStorage.getItem(USER_EMAIL) || '',
    firstName: '',
    lastName: '',
    phone: '',
    error: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_LOG_IN:
            localStorage.setItem(AUTH_KEY, action.payload.token);
            localStorage.setItem(USER_ID, action.payload.id);
            localStorage.setItem(USER_EMAIL, action.payload.email);
            return {
                ...state,
                id: action.payload.id,
                authKey: action.payload.token,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phone: action.payload.phone,
                email: action.payload.email
            };
        case ACTION_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
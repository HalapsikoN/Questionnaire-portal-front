import {AUTH_KEY, USER_ID} from "../constants";
import {ACTION_ERROR, ACTION_SIGN_IN} from "./storeConstatns";

const initialState = {
    id: localStorage.getItem(USER_ID) || '',
    authKey: localStorage.getItem(AUTH_KEY) || '',
    firstName: '',
    lastName: '',
    phone: '',
    error: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_SIGN_IN:
            localStorage.setItem(AUTH_KEY, action.payload.token);
            localStorage.setItem(USER_ID, action.payload.id);
            return {
                ...state,
                id: action.payload.id,
                authKey: action.payload.token,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phone: action.payload.phone
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
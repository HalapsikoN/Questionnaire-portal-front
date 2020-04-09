import {AUTH_KEY, EDIT_USER_INFO, EDIT_USER_PASSWORD, FIELD_PAGE, LOG_IN, LOG_UP, RESPONSE_PAGE} from "../constants";
import {CHECKBOX, COMBOBOX, RADIO_BUTTON} from "./heleperConstants";

export function authHeader() {
    let authKey = JSON.parse(localStorage.getItem(AUTH_KEY));

    if (authKey) {
        return {'Authorization': 'Bearer_' + authKey};
    } else {
        return {};
    }
}

export function getToken() {
    return localStorage.getItem(AUTH_KEY);
}

export function isAuth() {
    return !!localStorage.getItem(AUTH_KEY);
}

export function isPathnameLogInOrLogUp(pathname) {
    return pathname === LOG_IN || pathname === LOG_UP;
}

export function isPathnameIsPrivate(pathname) {
    return pathname === FIELD_PAGE || pathname === EDIT_USER_PASSWORD || pathname === EDIT_USER_INFO;
}

export function isFieldPage(pathname) {
    return pathname === FIELD_PAGE;
}

export function isResponsePage(pathname) {
    return pathname === RESPONSE_PAGE;
}

export function isEditPage(pathname) {
    return pathname === EDIT_USER_INFO || pathname === EDIT_USER_PASSWORD;
}

export function isNeedOptions(select) {
    return select === COMBOBOX || select === RADIO_BUTTON || select === CHECKBOX;
}
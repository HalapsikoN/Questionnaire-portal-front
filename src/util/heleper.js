import {
    AUTH_KEY,
    EDIT_USER_INFO,
    EDIT_USER_PASSWORD,
    FIELD_PAGE,
    HOME_PAGE,
    LOG_IN,
    LOG_UP,
    RESPONSE_PAGE
} from "../constants";

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

export function isFieldPage(pathname) {
    return pathname === FIELD_PAGE;
}

export function isResponsePage(pathname) {
    return pathname === RESPONSE_PAGE;
}

export function isEditPage(pathname) {
    return pathname === EDIT_USER_INFO || pathname === EDIT_USER_PASSWORD;
}


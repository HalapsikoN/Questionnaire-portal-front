import {AUTH_KEY, LOG_IN, LOG_UP} from "../constants";

export function authHeader() {
    let authKey = JSON.parse(localStorage.getItem(AUTH_KEY));

    if (authKey) {
        return {'Authorization': 'Bearer_' + authKey};
    } else {
        return {};
    }
}

export function isAuth() {
    return !!localStorage.getItem(AUTH_KEY);
}

export function withNavigation(pathname) {
    return pathname !== LOG_IN && pathname !== LOG_UP
}
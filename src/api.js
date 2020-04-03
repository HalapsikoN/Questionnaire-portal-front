import {
    API_URL,
    GET,
    GET_CURRENT_USER_INFO,
    LOG_IN,
    LOG_OUT,
    LOG_UP,
    POST,
    UPDATE_USER_INFO,
    UPDATE_USER_PASSWORD,
    USER,
    USER_ID
} from "./constants";
import {getToken} from "./util/heleper";

const handleResponse = resp => {
    console.log(resp);
    return resp.text().then(text => {
        console.log(JSON.parse(text));
        if (!resp.ok)
            return Promise.reject(JSON.parse(text));
        else
            return Promise.resolve(JSON.parse(text));
    })
        .catch(error => Promise.reject(error));
};

const handleEmptyResponse = resp => {
    console.log(resp);
    return resp.text().then(text => {
        if (!resp.ok) {
            return Promise.reject(JSON.parse(text));
        } else
            return Promise.resolve('');
    })
        .catch(error => Promise.reject(error));
};

const signInUser = data =>
    fetch(
        `${API_URL + LOG_IN}`,
        {
            method: POST,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(handleResponse);

const signUpUser = data =>
    fetch(
        `${API_URL + LOG_UP}`,
        {
            method: POST,
            body: JSON.stringify({...data, role: USER}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(handleResponse);

const loadCurrentUserInfo = () =>
    fetch(
        `${API_URL + GET_CURRENT_USER_INFO}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    ).then(handleResponse);

const signOutUser = () =>
    fetch(
        `${API_URL + LOG_OUT}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    ).then(handleEmptyResponse);

const updateCurrentUserInfo = (data) =>
    fetch(
        `${API_URL + UPDATE_USER_INFO + localStorage.getItem(USER_ID)}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(handleResponse);

const updateCurrentUserPassword = (data) =>
    fetch(
        `${API_URL + UPDATE_USER_PASSWORD + localStorage.getItem(USER_ID)}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(handleEmptyResponse);

export const api = {
    signInUser,
    signUpUser,
    signOutUser,
    loadCurrentUserInfo,
    updateCurrentUserInfo,
    updateCurrentUserPassword,
};


import {
    ADD_USER_FIELD,
    API_URL,
    DELETE,
    DELETE_USER_FIELD,
    GET,
    GET_CURRENT_USER_INFO,
    GET_USER_FIELDS,
    GET_USER_FIELDS_ANAUTHORIZED,
    GET_USER_RESPONSES,
    LOG_IN,
    LOG_OUT,
    LOG_UP,
    POST,
    PUT,
    SEND_ANSWER,
    UPDATE_USER_FIELD,
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

const signInUser = async data => {
    let response = await fetch(
        `${API_URL + LOG_IN}`,
        {
            method: POST,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};


const signUpUser = async (data) => {
    let response = await fetch(
        `${API_URL + LOG_UP}`,
        {
            method: POST,
            body: JSON.stringify({...data, role: USER}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};

const loadCurrentUserInfo = async () => {
    let response = await fetch(
        `${API_URL + GET_CURRENT_USER_INFO}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    );
    return response.json();
};


const signOutUser = async () => {
    let response = await fetch(
        `${API_URL + LOG_OUT}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    );
    return response.json();
};


const updateCurrentUserInfo = async (data) => {
    let response = await fetch(
        `${API_URL + UPDATE_USER_INFO + localStorage.getItem(USER_ID)}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    return response.json();
};

const updateCurrentUserPassword = async (data) => {
    let response = await fetch(
        `${API_URL + UPDATE_USER_PASSWORD + localStorage.getItem(USER_ID)}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    return response.json();
};


const loadUserFields = async () => {
    let response = await fetch(
        `${API_URL + GET_USER_FIELDS}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    );
    return response.json();
};


const addUserField = async (data) => {
    let resp = await fetch(
        `${API_URL + ADD_USER_FIELD}`,
        {
            method: PUT,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data, userId: localStorage.getItem(USER_ID)})
        }
    );
    return await resp.json();
};

const updateUserField = async (data) => {
    let resp = await fetch(
        `${API_URL + UPDATE_USER_FIELD + data.id}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data, userId: localStorage.getItem(USER_ID)})
        }
    );
    return await resp.json();
};

const deleteUserField = async (id) => {
    let resp = await fetch(
        `${API_URL + DELETE_USER_FIELD + id}`,
        {
            method: DELETE,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
            }
        }
    );
    return resp;
};

const loadUserFieldByUserId = async (userId) => {
    let response = await fetch(
        `${API_URL + GET_USER_FIELDS_ANAUTHORIZED + userId}`,
        {
            method: GET
        }
    );
    return await response.json();
};

const sendAnswer = async (data) => {
    let response = await fetch(
        `${API_URL + SEND_ANSWER}`,
        {
            method: POST,
            headers: {
                'Authorization': `Bearer_${getToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({answer: data})
        }
    );
    return response;
};

const loadUserResponse = async () => {
    let response = await fetch(
        `${API_URL + GET_USER_RESPONSES}`,
        {
            method: GET,
            headers: {
                'Authorization': `Bearer_${getToken()}`
            }
        }
    );
    return response.json();
}

export const api = {
    signInUser,
    signUpUser,
    signOutUser,
    loadCurrentUserInfo,
    updateCurrentUserInfo,
    updateCurrentUserPassword,
    loadUserFields,
    addUserField,
    updateUserField,
    deleteUserField,
    loadUserFieldByUserId,
    sendAnswer,
    loadUserResponse
};


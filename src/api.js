import {API_URL, LOG_IN, LOG_UP, POST, USER} from "./constants";

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

const signInUser = data =>
    fetch(
        `${API_URL + LOG_IN}`,
        {
            method: POST,
            body: JSON.stringify(data)
        }
    ).then(handleResponse);

const signUpUser = data =>
    fetch(
        `${API_URL + LOG_UP}`,
        {
            method: POST,
            body: JSON.stringify({...data, role: USER})
        }
    ).then(handleResponse);

export const api = {
    signInUser, signUpUser
};


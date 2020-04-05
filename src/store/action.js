import {ACTION_ERROR, ACTION_LOAD_CURRENT_USER, ACTION_LOG_IN, ACTION_UPDATE_CURRENT_USER} from "./storeConstatns";
import {api} from "../api"
import {AUTH_KEY, FORBIDDEN_ERROR, HOME_PAGE, LOG_IN, USER_EMAIL} from "../constants";

const errorFunction = (errorMessage) => {
    if (errorMessage.error === FORBIDDEN_ERROR) {
        logOut();
    }
};

export const signIn = (data) => {

    return dispatch => {
        api.signInUser(data).then(
            userData => {
                console.log('signUp: ', userData);
                dispatch({
                    type: ACTION_LOG_IN,
                    payload: userData
                });
                window.location.replace(HOME_PAGE);
            },
            errorMessage => {
                console.log('signUp: ', errorMessage.error);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};

export const signUp = (data) => {

    return dispatch => {
        api.signUpUser(data).then(
            userData => {
                console.log('signUp: ', userData);
                dispatch({
                    type: ACTION_LOG_IN,
                    payload: userData
                });
                window.location.replace(HOME_PAGE);
            },
            errorMessage => {
                console.log('signUp: ', errorMessage.error);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};

export const logOut = () => {
    api.signOutUser().then(
        () => {
            localStorage.clear();
            window.location.replace(LOG_IN);
        },
        errorMessage => {
            console.log('logOut2: ', errorMessage.error);
        }
    );

};


export const loadCurrentUserInfo = () => {
    return dispatch => {
        api.loadCurrentUserInfo().then(
            userData => {
                console.log('load: ', userData);
                dispatch({
                    type: ACTION_LOAD_CURRENT_USER,
                    payload: userData
                });
            },
            errorMessage => {
                console.log('load2: ', errorMessage.error);
                errorFunction(errorMessage);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};

export const updateCurrentUserInfo = (data) => {
    return dispatch => {
        api.updateCurrentUserInfo(data).then(
            userData => {
                console.log('updateCurrentUserInfo: ', userData);
                localStorage.setItem(AUTH_KEY, userData.token);
                localStorage.setItem(USER_EMAIL, userData.email);
                dispatch({
                    type: ACTION_UPDATE_CURRENT_USER,
                    payload: userData
                });
                window.location.replace(HOME_PAGE);
            },
            errorMessage => {
                console.log('updateCurrentUserInfo2: ', errorMessage.error);
                errorFunction(errorMessage);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};

export const changeCurrentUserPassword = (data) => {
    return dispatch => {
        api.updateCurrentUserPassword(data).then(
            () => {
                window.location.replace(HOME_PAGE);
            },
            errorMessage => {
                console.log('changeCurrentUserPassword2: ', errorMessage.error);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};
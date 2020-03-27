import {ACTION_ERROR, ACTION_LOG_IN} from "./storeConstatns";
import {api} from "../api"

export const signIn = (data) => {

    return dispatch => {
        api.signInUser(data).then(
            userData => {
                console.log('1111', userData);
                dispatch({
                    type: ACTION_LOG_IN,
                    payload: userData
                });
                window.location.replace('/');
            },
            errorMessage => {
                console.log('2222', errorMessage.error);
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
                console.log('3333', userData);
                dispatch({
                    type: ACTION_LOG_IN,
                    payload: userData
                });
                window.location.replace('/');
            },
            errorMessage => {
                console.log('4444', errorMessage.error);
                dispatch({
                    type: ACTION_ERROR,
                    payload: errorMessage
                })
            }
        );
    }
};
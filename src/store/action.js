import {ACTION_SIGN_IN, ACTION_ERROR} from "./storeConstatns";
import {api} from "../api"

export const signIn = (data) => {

    return dispatch => {
        api.signInUser(data).then(
            userData => {
                console.log('1111', userData);


                dispatch({
                    type: ACTION_SIGN_IN,
                    payload: userData
                });
                //window.location.replace('/');
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
import {api} from "../api";
import {FORBIDDEN_ERROR} from "../constants";
import {logOut} from "../store/action";

const errorFunction = (errorMessage) => {
    if (errorMessage.error === FORBIDDEN_ERROR) {
        logOut();
    }
};

export const loadUserFields = () => {

    console.log("loadUserFields start");

    return api.loadUserFields();
    // return api.loadUserFields();.then(
    //     data => {
    //         console.log('loadUserFields:', data);
    //         setStateFunction({
    //             data
    //         });
    //     },
    //     errorMessage => {
    //         console.log('loadUserFields2:', errorMessage.error);
    //         errorFunction(errorMessage);
    //     }
    // )

};
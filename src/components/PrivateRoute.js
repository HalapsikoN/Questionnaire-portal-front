import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {isAuth, isPathnameLogInOrLogUp} from "../util/heleper";

export const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route exact {...rest} render={props => (
            isPathnameLogInOrLogUp(window.location.pathname) ?
                null
                : (isAuth() ?
                    <Component {...props}/> :
                    <Redirect to="/logIn"/>
                )
        )}/>
    );
};
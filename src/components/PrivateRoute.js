import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../util/heleper";
import {HOME_PAGE} from "../constants";

export const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route exact {...rest} render={props => (
            (isAuth() ?
                    <Component {...props}/>
                    :
                    <Redirect to={HOME_PAGE}/>
            )
        )}/>
    );
};
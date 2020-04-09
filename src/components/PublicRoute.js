import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {isAuth, isPathnameLogInOrLogUp} from "../util/heleper";
import LogIn from "../container/pages/LogIn";
import LogUp from "../container/pages/LogUp";

export const PublicRoute = ({component: Component, restricted, ...rest}) => {


    // restricted = false meaning public route
    // restricted = true meaning restricted route

    if (isPathnameLogInOrLogUp(window.location.pathname)) {
        return (<Route exact {...rest} render={props => (
                isAuth() && restricted ?
                    <Redirect to="/"/>
                    :
                    (Component === LogIn || Component === LogUp) ?
                        <Component {...props} />
                        : null

            )}/>
        )
    } else {
        return (<Route {...rest} render={props => (
                isAuth() && restricted ?
                    <Redirect to="/"/>
                    :
                    <Component {...props} />
            )}/>
        )
    }
    ;

};
import React from 'react';
import LogIn from "../container/pages/LogIn";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import {store} from "../configureStore";
import {Router} from "react-router-dom"
import Navbar from "./Navbar";
import HomePage from "../container/pages/HomePage";
import LogUp from "../container/pages/LogUp";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {
    BLANK_PAGE,
    EDIT_USER_INFO,
    EDIT_USER_PASSWORD,
    FIELD_PAGE,
    HOME_PAGE,
    LOG_IN,
    LOG_UP,
    RESPONSE_PAGE
} from "../constants";
import EditUserPage from "../container/pages/EditUserPage";
import EditPasswordPage from "../container/pages/EditPasswordPage";
import FieldPage from "../container/pages/FieldPage";
import {createBrowserHistory} from 'history';
import BlankPage from "../container/pages/BlankPage";
import ResponsePage from "../container/pages/ResponsePage";

export const history = createBrowserHistory();

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <PublicRoute restricted={true} exact path={LOG_IN} component={LogIn}/>
            <PublicRoute restricted={true} exact path={LOG_UP} component={LogUp}/>
            <PublicRoute restricted={false} path={HOME_PAGE} component={Navbar}/>
            <PublicRoute restricted={false} exact path={HOME_PAGE} component={HomePage}/>
            <PublicRoute restricted={false} path={BLANK_PAGE} component={BlankPage}/>
            <PrivateRoute path={FIELD_PAGE} component={FieldPage}/>
            <PrivateRoute path={RESPONSE_PAGE} component={ResponsePage}/>
            <PrivateRoute path={EDIT_USER_INFO} component={EditUserPage}/>
            <PrivateRoute path={EDIT_USER_PASSWORD} component={EditPasswordPage}/>
        </Router>
    </Provider>
)

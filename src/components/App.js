import React from 'react';
import LogIn from "../container/pages/LogIn";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import {store} from "../configureStore";
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./Navbar";
import HomePage from "../container/pages/HomePage";
import LogUp from "../container/pages/LogUp";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {EDIT_USER_INFO, EDIT_USER_PASSWORD, HOME_PAGE, LOG_IN, LOG_UP} from "../constants";
import EditUserPage from "../container/pages/EditUserPage";
import EditPasswordPage from "../container/pages/EditPasswordPage";


export default () => (
    <Provider store={store}>
        <Router>
            <PublicRoute restricted={true} exact path={LOG_IN} component={LogIn}/>
            <PublicRoute restricted={true} exact path={LOG_UP} component={LogUp}/>
            <PrivateRoute component={Navbar}/>
            <PrivateRoute path={HOME_PAGE} component={HomePage}/>
            <PrivateRoute path={EDIT_USER_INFO} component={EditUserPage}/>
            <PrivateRoute path={EDIT_USER_PASSWORD} component={EditPasswordPage}/>
        </Router>
    </Provider>
)

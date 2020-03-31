import React from 'react';
import LogIn from "../container/pages/LogIn";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import {store} from "../configureStore";
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from "react-router-dom"
import Navbar from "./Navbar";
import HomePage from "../container/pages/HomePage";
import LogUp from "../container/pages/LogUp";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";


export default () => (
    <Provider store={store}>
        <Router>
            {/*<Navbar/>*/}
            {/*<Route path="/">*/}
            {/*    <HomePage/>*/}
            {/*</Route>*/}
            {/*<Route path="/logIn">*/}
            {/*    <LogIn/>*/}
            {/*</Route>*/}
            {/*<Route path="/logUp">*/}
            {/*    <LogUp/>*/}
            {/*</Route>*/}
            <PublicRoute restricted={true} exact path="/logIn" component={LogIn}/>
            <PublicRoute restricted={true} exact path="/logUp" component={LogUp}/>
            <PrivateRoute component={Navbar}/>
            <PrivateRoute path="/" component={HomePage}/>
        </Router>
    </Provider>
)

import React, {Component} from 'react';
import LogIn from "../container/pages/LogIn";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {store} from "../configureStore";
import {BrowserRouter as Router, Route} from "react-router-dom"


export default () => (
    <Provider store={store}>
        <Router>
            <Route path="/">
                <LogIn/>
            </Route>
        </Router>
    </Provider>
)

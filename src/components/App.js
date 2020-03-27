import React from 'react';
import LogIn from "../container/pages/LogIn";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {store} from "../configureStore";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./Navbar";
import HomePage from "../container/pages/HomePage";
import LogUp from "../container/pages/LogUp";


export default () => (
    <Provider store={store}>
        <Router>
            <Navbar/>
            <Route path="/">
                <HomePage/>
            </Route>
            <Route path="/logIn">
                <LogIn/>
            </Route>
            <Route path="/logUp">
                <LogUp/>
            </Route>
        </Router>
    </Provider>
)

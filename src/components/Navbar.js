import {connect} from "react-redux";
import React, {Component} from "react";
import "../style/pages/logIn.css"
import {isAuth, withNavigation} from "../util/heleper";
import {LOG_IN, USER_EMAIL} from "../constants";


class Navbar extends Component {

    render() {

        const {email} = this.props;

        return withNavigation(window.location.pathname) ? (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <s1>LOGO</s1>
                    <s2>TYPE</s2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    {isAuth() ? (
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/*{email}*/}
                                {localStorage.getItem(USER_EMAIL)}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>) : (
                        <a href={LOG_IN}>Log in</a>
                    )
                    }
                </div>
            </nav>
        ) : null;
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        email: state.email
    };
};

export default connect(mapStateToProps)(Navbar);
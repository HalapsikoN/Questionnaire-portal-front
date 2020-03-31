import {connect} from "react-redux";
import React, {Component} from "react";
import "../style/pages/logInAndReigtre.css"
import {isAuth, isPathnameLogInOrLogUp} from "../util/heleper";
import {LOG_IN, USER_EMAIL} from "../constants";
import "../style/components/navbar.css"


class Navbar extends Component {

    render() {

        const {email} = this.props;

        return  (
            <nav className="navbar navbar-expand-lg navbar-light nav-gen">
                <a className="navbar-brand" href="/">
                    <span className="nav-text1">LOGO</span>
                    <span className="nav-text2">TYPE</span>
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
                        <a className="nav-a1" href={LOG_IN}>Log in</a>
                    )
                    }
                </div>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        email: state.email
    };
};

export default connect(mapStateToProps)(Navbar);
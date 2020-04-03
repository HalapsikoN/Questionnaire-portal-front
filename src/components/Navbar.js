import {connect} from "react-redux";
import React, {Component} from "react";
import "../style/pages/logInAndReigtre.css"
import {isAuth, isEditPage, isHomePage, isResponsePage} from "../util/heleper";
import {EDIT_USER_INFO, EDIT_USER_PASSWORD, HOME_PAGE, LOG_IN} from "../constants";
import "../style/components/navbar.css"
import {loadCurrentUserInfo, logOut} from "../store/action";
import {bindActionCreators} from "redux";


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {userData: []};

    }

    componentDidMount() {
        this.props.loadInf();
    }

    handleLogOut = e => {
        e.preventDefault();
        logOut();
    };

    render() {

        const {firstName, lastName} = this.props;

        return (
            <nav className="navbar navbar-expand-lg nav-gen">
                <a className="navbar-brand" href={HOME_PAGE}>
                    <span className="nav-text1">LOGO</span>
                    <span className="nav-text2">TYPE</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent">
                    {isAuth() ? (
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className={isHomePage(window.location.pathname) ? ("nav-link chosen") : ("nav-link a1")}
                                   href={HOME_PAGE}>Fields</a>
                            </li>

                            <li className="nav-item">
                                <a className={isResponsePage(window.location.pathname) ? ("nav-link chosen") : ("nav-link a1")}
                                   href="#">Responses</a>
                            </li>

                            {firstName && lastName ? (
                                <li className="nav-item dropdown">
                                    <a className={isEditPage(window.location.pathname) ? ("nav-link dropdown-toggle chosen") : ("nav-link dropdown-toggle a1")}
                                       href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {firstName + " " + lastName}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right nav-drop"
                                         aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href={EDIT_USER_INFO}>Edit profile</a>
                                        <a className="dropdown-item" href={EDIT_USER_PASSWORD}>Change password</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" href="#" onClick={this.handleLogOut}>Log out</a>
                                    </div>
                                </li>) : (
                                <li className="nav-item spinner-border float-right spin" role="status">
                                    <span className="sr-only">Loading...</span>
                                </li>
                            )
                            }
                        </ul>

                    ) : (
                        <a className="nav-a1" href={LOG_IN}>Log in</a>
                    )
                    }
                </div>
            </nav>
        )
    }
}

const putStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
};

const putActionsToProps = (dispatch) => {
    return {
        loadInf: bindActionCreators(loadCurrentUserInfo, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(Navbar);



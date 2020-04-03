import React, {Component} from "react";
import {signUp} from "../../store/action";
import {LOG_IN} from "../../constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import '../../style/pages/logInAndReigtre.css';
import {isLogUpValid} from "../../util/validator";

class LogUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
        }
    };

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
    };

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    };

    onChangeConfirmPassword = e => {
        this.setState({
            confirmPassword: e.target.value
        })
    };

    onChangeFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    };

    onChangeLastName = e => {
        this.setState({
            lastName: e.target.value
        })
    };

    onChangePhone = e => {
        this.setState({
            phone: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (isLogUpValid(this.state)) {
            this.props.signUp(this.state);
        }
    };

    render() {

        const {email, password, confirmPassword, firstName, lastName, phone} = this.state;

        return (
            <div className="sign-in">
                <div className="form-container">
                    <div className="form-content">

                        <div className="form-title">
                            <h1>
                                <span className="s1">LOGO</span>
                                <span className="s2">TYPE</span>
                            </h1>
                        </div>
                        <div className="form-title2">
                            Sign Up
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="email"
                                       className="form-control form-input-text"
                                       placeholder="Email"
                                       value={email}
                                       onChange={this.onChangeEmail}
                                       required
                                />
                                <input type="password"
                                       className="form-control form-input-text"
                                       placeholder="Password"
                                       value={password}
                                       onChange={this.onChangePassword}
                                       required
                                />
                                <input type="password"
                                       className="form-control form-input-text"
                                       placeholder="Confirm password"
                                       value={confirmPassword}
                                       onChange={this.onChangeConfirmPassword}
                                       required
                                />
                                <input type="text"
                                       className="form-control form-input-text"
                                       placeholder="First Name"
                                       value={firstName}
                                       onChange={this.onChangeFirstName}
                                       required
                                />
                                <input type="text"
                                       className="form-control form-input-text"
                                       placeholder="Last Name"
                                       value={lastName}
                                       onChange={this.onChangeLastName}
                                       required
                                />
                                <input type="text"
                                       className="form-control form-input-text"
                                       placeholder="Phone number"
                                       value={phone}
                                       onChange={this.onChangePhone}
                                       required
                                />
                                <button className="btn btn-primary btn-block form-btn" type="submit">SIGN UP</button>
                                <div className="form-title3">
                                    Already have account? <a href={LOG_IN}>Log In</a>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

const putActionsToProps = (dispatch) => {
    return {
        signUp: bindActionCreators(signUp, dispatch)
    };
};

export default connect(null, putActionsToProps)(LogUp);

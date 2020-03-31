import React, {Component} from "react";
import {signIn} from "../../store/action";
import {LOG_UP} from "../../constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import '../../style/pages/logInAndReigtre.css';
import {isLogInValid} from "../../util/validator";

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'a@a.a',
            password: 'test2N'
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

    handleSubmit = e => {
        e.preventDefault();
        if (isLogInValid(this.state)) {
            this.props.signIn(this.state);
        }
    };

    render() {

        const {email, password} = this.state;

        return (
            <div className="sign-in">
                <div className="form-container">
                    <div className="form-content">

                        <div className="form-title">
                            <h1>
                                <s1>LOGO</s1>
                                <s2>TYPE</s2>
                            </h1>
                        </div>
                        <div className="form-title2">
                            Log In
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
                                <div className="justify-content-between form-checkbox">
                                    <div className="form-group form-check">
                                        <input type="checkbox"
                                               className="form-check-input"
                                               id="remember"/>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <div>
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block form-btn" type="submit">LOG IN</button>
                                <div className="form-title3">
                                    Don't have account? <a href={LOG_UP}>Sign Up</a>
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
        signIn: bindActionCreators(signIn, dispatch)
    };
};

export default connect(null, putActionsToProps)(LogIn);

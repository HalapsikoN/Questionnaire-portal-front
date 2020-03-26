import React, {Component} from "react";
import {signIn} from "../../store/action";
import {LOG_UP} from "../../constants";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

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
        this.props.signIn(this.state);
    };

    render() {

        const {email, password} = this.state;

        return (
            <div className="form-container">
                <div className="form-content">

                    <div className="form-title">
                        LOGOTYPE
                    </div>
                    <div>
                        Log in
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email"
                                   value={email}
                                   onChange={this.onChangeEmail}/>
                            <input type="password"
                                   className="form-control"
                                   placeholder="Password"
                                   value={password}
                                   onChange={this.onChangePassword}/>
                            <div className="form-row container justify-content-between">
                                <div className="form-group form-check">
                                    <input type="checkbox"
                                           className="form-check-input"
                                           id="remember"/>
                                    <label className="form-check-label"
                                           htmlFor="remember">Remember me</label>
                                </div>
                                <div>
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                            <button className="btn btn-primary form-button" type="submit">LOG IN</button>
                            <div>
                                Don't have account? <a href={LOG_UP}>Sign Up</a>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        )
    }
}

// const mapStateToProps=(state)=>{
//   console.log(state);
//   return {
//       test:1
//   }
// };

const putActionsToProps = (dispatch) => {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    };
};

export default connect(null, putActionsToProps)(LogIn);

import React from "react";
import {bindActionCreators} from "redux";
import {changeCurrentUserPassword} from "../../store/action";
import {connect} from "react-redux";
import {isValidPasswords} from "../../util/validator";
import "../../style/pages/editUserPage.css"

class EditPasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPassword: '',
            password: '',
            confirmPassword: '',
        }
    }

    onChangeCurrentPassword = e => {
        this.setState({
            currentPassword: e.target.value
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

    handleSubmit = e => {
        e.preventDefault();
        if (isValidPasswords(this.state)) {
            this.props.changePassword(this.state);
        }
    };

    render() {

        const {currentPassword, password, confirmPassword} = this.state;

        return (
            <div className="editUser-gen">
                <div className="form-container">
                    <div className="edit-header">
                        <div className="edit-title">
                            Change Password
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group editUser-form">
                            <label htmlFor="currentPassword">Current Password </label>
                            <input type="password"
                                   className="form-control edit-input"
                                   placeholder="Current Password"
                                   id="currentPassword"
                                   value={currentPassword}
                                   onChange={this.onChangeCurrentPassword}
                                   required
                            />
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   className="form-control edit-input"
                                   placeholder="Password"
                                   id="password"
                                   value={password}
                                   onChange={this.onChangePassword}
                                   required
                            />
                            <label htmlFor="confirmPassword">Confirm new password</label>
                            <input type="password"
                                   className="form-control edit-input"
                                   placeholder="Confirm new password"
                                   id="confirmPassword"
                                   value={confirmPassword}
                                   onChange={this.onChangeConfirmPassword}
                                   required
                            />
                            <button className="btn btn-primary edit-btn" type="submit">CHANGE</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }

}

const putActionsToProps = (dispatch) => {
    return {
        changePassword: bindActionCreators(changeCurrentUserPassword, dispatch),
    };
};

export default connect(null, putActionsToProps)(EditPasswordPage);
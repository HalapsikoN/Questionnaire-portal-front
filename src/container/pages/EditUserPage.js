import React from "react";
import "../../style/pages/editUserPage.css"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadCurrentUserInfo, updateCurrentUserInfo} from "../../store/action";
import {isUpdateValid} from "../../util/validator";

class EditUserPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
        }
    }

    componentDidMount() {
        this.props.loadInf();
    }

    componentDidUpdate(prevProps) {
        if (this.props.firstName !== prevProps.firstName) {
            this.setState({
                email: this.props.email,
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                phone: this.props.phone,
            })
        }
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
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
        if (isUpdateValid(this.state)) {
            this.props.update(this.state);
        }
    };

    render() {

        const {firstName, lastName, email, phone} = this.state;

        return (
            <div className="editUser-gen">
                <div className="form-container">
                    <div className="edit-header">
                        <div className="edit-title">
                            Edit Profile
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group editUser-form">
                            <label htmlFor="firstName">First Name </label>
                            <input type="text"
                                   className="form-control edit-input"
                                   placeholder="First Name"
                                   id="firstName"
                                   value={firstName}
                                   onChange={this.onChangeFirstName}
                                   required
                            />
                            <label htmlFor="lastName">Last Name </label>
                            <input type="text"
                                   className="form-control edit-input"
                                   placeholder="Last Name"
                                   id="lastName"
                                   value={lastName}
                                   onChange={this.onChangeLastName}
                                   required
                            />
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   className="form-control edit-input"
                                   placeholder="Email"
                                   id="email"
                                   value={email}
                                   onChange={this.onChangeEmail}
                                   required
                            />
                            <label htmlFor="phone">Phone Number </label>
                            <input type="text"
                                   className="form-control edit-input"
                                   placeholder="Phone number"
                                   id="phone"
                                   value={phone}
                                   onChange={this.onChangePhone}
                                   required
                            />
                            <button className="btn btn-primary edit-btn" type="submit">SAVE</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }

}

const putStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email,
        phone: state.user.phone
    };
};

const putActionsToProps = (dispatch) => {
    return {
        loadInf: bindActionCreators(loadCurrentUserInfo, dispatch),
        update: bindActionCreators(updateCurrentUserInfo, dispatch)
    };
};

export default connect(putStateToProps, putActionsToProps)(EditUserPage);
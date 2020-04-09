import React from 'react';
import {connect} from "react-redux";
import "../../style/pages/blankPage.css"
import {api} from "../../api";
import FieldComponent from "../../components/FieldComponent";
import {CHECKBOX} from "../../util/heleperConstants";
import {Modal} from "react-bootstrap";

class BlankPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: [],
            isFetching: true,

            show: false,

            error: null
        }
    }

    componentDidMount() {
        api.loadUserFieldByUserId(this.props.match.params.userId).then(
            fields => {
                console.log('BlankPage:', fields);
                this.setState({
                    fields,
                    isFetching: false,
                    error: fields.error
                });
            },
            error => {
                console.log('BlankPage2:', error);
                this.setState({
                    isFetching: false,
                    error: error
                });
            }
        )
    };

    handleFieldChange = id => (field) => {
        this.setState({
            fields: this.state.fields.map((fld, index) => index === id ? field : fld)
        })
    };

    handleCloseModal = () => {
        this.setState({show: false});
    };

    handleShowModal = () => {
        this.setState({show: true});
    };

    handleSubmit = e => {
        e.preventDefault();
        let answer = [];

        this.state.fields.map(field => {

                let value = field.value;

                let resultValue;

                if (field.type === CHECKBOX && value) {
                    resultValue = [];
                    value.map(val => {
                            if (val.checked) {
                                resultValue.push(val.label);
                            }
                        }
                    )
                    resultValue = resultValue.join(", ");
                } else {
                    resultValue = value ? value : "";
                }

                answer.push({
                    fieldId: field.id,
                    label: field.label,
                    value: resultValue
                })
            }
        );

        console.log("Answer: ", answer);

        api.sendAnswer(answer).then(
            resp => {
                this.setState({
                    error: resp.error
                });
                if (!this.state.error) {
                    //change to congrit
                    //history.push(HOME_PAGE);
                    this.handleShowModal()
                }
            }
        )
    };

    render() {

        const {fields, isFetching, error} = this.state;

        const fieldList = (!isFetching && !error ? (fields.map((field, index) =>
            <div key={field.id}>
                <FieldComponent field={field} onFieldChange={this.handleFieldChange(index)}/>
            </div>
        )) : null);

        return (
            <div className="blank-gen">
                <div className="form-container">
                    <div className="form-content">

                        {fieldList ? (
                            <form onSubmit={this.handleSubmit}>
                                {fieldList}
                                <button type="submit" className="btn btn-primary btn-blank">SUBMIT</button>
                            </form>
                        ) : null}
                    </div>
                </div>


                <Modal show={this.state.show} onHide={this.handleCloseModal}>

                    <Modal.Header closeButton>
                        <Modal.Title>Successfully send. Thank you for answer!</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer>

                        <button type="button" className="btn btn-secondary"
                                onClick={this.handleCloseModal}>Cancel
                        </button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

export default connect(null)(BlankPage);
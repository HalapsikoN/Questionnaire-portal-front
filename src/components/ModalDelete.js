import React from "react";
import {Modal} from "react-bootstrap";
import {
    CHECKBOX, COMBOBOX,
    convertFieldTypeToStringText, DATE,
    MULTILINE_TEXT,
    RADIO_BUTTON,
    SINGLE_LINE_TEXT
} from "../util/heleperConstants";
import {isNeedOptions} from "../util/heleper";
import {api} from "../api";
import {FIELD_PAGE} from "../constants";
import {Redirect} from "react-router-dom";

class ModalDelete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id:this.props.field.id,
            label: this.props.field.label,

            error:null
        }

    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state);
        api.deleteUserField(this.state).then(
            () => {

            },
            errorMessage => {
                console.log('deleteModal2:', errorMessage.error);
                this.setState({
                    error: errorMessage.error
                });
            }
        );
    };

    render() {

        const {show, onHide} = this.props;
        const {id, label} = this.state;

        return (
            <Modal show={show===id} onHide={onHide} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Delete (<strong>{label}</strong>) field?</Modal.Title>
                </Modal.Header>
                <form className="field-table-model-gen" onSubmit={this.handleSubmit}>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-danger">Delete</button>
                        <button type="button" className="btn btn-secondary"
                                onClick={onHide}>Cancel
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
            ;
    }

}

export default ModalDelete;
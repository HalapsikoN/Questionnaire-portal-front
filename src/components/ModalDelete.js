import React from "react";
import {Modal} from "react-bootstrap";
import {api} from "../api";
import {history} from "./App";

class ModalDelete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            label: '',

            error: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.field !== this.props.field) {
            this.setState({
                id: this.props.field.id,
                label: this.props.field.label
            });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        api.deleteUserField(this.props.field.id).then(
            () => {
                history.go(0);
            },
            errorMessage => {
                this.setState({
                    error: errorMessage.error
                });
            }
        );
    };

    render() {

        const {show, onHide} = this.props;
        const {label} = this.state;

        return (
            <Modal show={show} onHide={onHide} centered>

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
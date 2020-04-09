import React from "react";
import {Modal} from "react-bootstrap";
import {
    CHECKBOX,
    COMBOBOX,
    convertFieldTypeToStringText,
    DATE,
    MULTILINE_TEXT,
    RADIO_BUTTON,
    SINGLE_LINE_TEXT
} from "../util/heleperConstants";
import {isNeedOptions} from "../util/heleper";
import {api} from "../api";
import {history} from "./App";

class ModalAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: '',
            type: SINGLE_LINE_TEXT,
            options: '',
            required: false,
            active: false,

            error: null
        }

    }

    onChangeLabel = e => {
        this.setState({
            label: e.target.value
        })
    };

    onChangeType = e => {
        this.setState({
            type: e.target.value
        })
    };

    onChangeOptions = e => {
        this.setState({
            options: e.target.value
        })
    };

    onChangeRequired = e => {
        this.setState({
            required: e.target.checked
        })
    };

    onChangeActive = e => {
        this.setState({
            active: e.target.checked
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        api.addUserField({...this.state, options: this.state.options.split("\n")}).then(
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
        const {label, type, options, required, active} = this.state;

        return (
            <Modal show={show} onHide={onHide} centered>

                <Modal.Header closeButton>
                    <Modal.Title>Add Field</Modal.Title>
                </Modal.Header>
                <form className="field-table-model-gen" onSubmit={this.handleSubmit}>
                    <Modal.Body>

                        <div className="field-table-form-group">
                            <div className="row">
                                <label htmlFor="labelAdd">Label</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Input label"
                                       id="labelAdd"
                                       value={label}
                                       onChange={this.onChangeLabel}
                                       required
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="typeAdd">Type</label>
                                <select
                                    className="form-control"
                                    id="typeAdd"
                                    value={type}
                                    onChange={this.onChangeType}
                                >
                                    <option
                                        value={SINGLE_LINE_TEXT}>{convertFieldTypeToStringText(SINGLE_LINE_TEXT)}</option>
                                    <option
                                        value={MULTILINE_TEXT}>{convertFieldTypeToStringText(MULTILINE_TEXT)}</option>
                                    <option
                                        value={RADIO_BUTTON}>{convertFieldTypeToStringText(RADIO_BUTTON)}</option>
                                    <option value={CHECKBOX}>{convertFieldTypeToStringText(CHECKBOX)}</option>
                                    <option value={COMBOBOX}>{convertFieldTypeToStringText(COMBOBOX)}</option>
                                    <option value={DATE}>{convertFieldTypeToStringText(DATE)}</option>
                                </select>
                            </div>
                            <div className="row">
                                <label htmlFor="optionsAdd">Options</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Input options (different options split with ENTER)"
                                    id="optionsAdd"
                                    rows="5"
                                    value={options}
                                    onChange={this.onChangeOptions}
                                    required={isNeedOptions(type)}
                                    disabled={!isNeedOptions(type)}
                                />
                            </div>
                            <div className="row">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input input-check"
                                        id="requiredCheckAdd"
                                        checked={required}
                                        onChange={this.onChangeRequired}
                                    />
                                    <label className="form-check-label label-check"
                                           htmlFor="requiredCheckAdd">Required</label>
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input input-check"
                                        id="activeCheckAdd"
                                        checked={active}
                                        onChange={this.onChangeActive}
                                    />
                                    <label className="form-check-label label-check" htmlFor="activeCheckAdd">Is
                                        Active</label>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary">Save</button>
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

export default ModalAdd;
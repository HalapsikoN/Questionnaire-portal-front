import React from 'react';
import {connect} from "react-redux";
import {loadUserFields} from "../fieldAction";
import {
    CHECKBOX, COMBOBOX,
    convertFieldTypeToStringText, DATE,
    MULTILINE_TEXT,
    RADIO_BUTTON,
    SINGLE_LINE_TEXT
} from "../../util/heleperConstants";
import "../../style/pages/fieldPage.css"
import {api} from "../../api";
import bin from '../../img/bin.png';
import edit from '../../img/edit.png';
import plus from '../../img/plus-512.png';
import {Modal} from 'react-bootstrap';
import ModalAdd from "../../components/ModalAdd";
import ModalUpdate from "../../components/ModalUpdate";
import ModalDelete from "../../components/ModalDelete";

class FieldPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            isFetching: true,
            error: null,

            showAddModal: false,
            showUpdateModal: null,
            showDeleteModal: null,

        }
    }

    componentDidMount() {
        api.loadUserFields().then(
            fields => {
                console.log('loadUserFields:', fields);
                this.setState({
                    fields,
                    isFetching: false
                });
            },
            errorMessage => {
                console.log('loadUserFields2:', errorMessage.error);
                this.setState({
                    isFetching: false,
                    error: errorMessage.error
                });
            }
        )
    };

    handleCloseAddModal = () => this.setState({showAddModal: false});

    handleShowAddModal = () => this.setState({showAddModal: true});

    handleCloseUpdateModal = () => {
        this.setState({showUpdateModal: null});
    };

    handleShowUpdateModal = (id) => {
        this.setState({showUpdateModal: id});
    };

    handleCloseDeleteModal = () => this.setState({showDeleteModal: null});

    handleShowDeleteModal = (id) => this.setState({showDeleteModal: id});


    render() {

        console.log('DATA:', this.state);

        const {fields, isFetching, error, showAddModal, showUpdateModal, showDeleteModal} = this.state;


        const fieldList = (!isFetching ? (fields.map((field) =>
            <tr key={field.id}>
                <td>{field.label}</td>
                <td>{convertFieldTypeToStringText(field.type)}</td>
                <td>{field.required ? "True" : "False"}</td>
                <td>{field.active ? "True" : "False"}</td>
                <td className="field-table-href-icon">
                    <a href="#" onClick={()=>this.handleShowUpdateModal(field.id)}>
                        <img src={edit} alt="edit"/>
                    </a>
                    <a href="#" onClick={()=>this.handleShowDeleteModal(field.id)}>
                        <img src={bin} alt="bin"/>
                    </a>
                </td>

                <ModalUpdate show={showUpdateModal} onHide={this.handleCloseUpdateModal} field={field}/>
                <ModalDelete show={showDeleteModal} onHide={this.handleCloseDeleteModal} field={field}/>
            </tr>
        )) : null);

        return (
            <div className="field-table-gen">
                <div className="form-container w-75">
                    <div className="field-table-header field-table-title">
                        Fields

                        <div>
                            <button type="button" className="btn btn-primary" onClick={this.handleShowAddModal}>
                                <img className="field-table-button-img" src={plus} alt="plus"/><span
                                className="field-table-button-text">ADD FIELD</span>
                            </button>
                        </div>

                    </div>

                    <div className="field-table-table">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Label</th>
                                <th scope="col">Type</th>
                                <th scope="col">Required</th>
                                <th scope="col">Is Active</th>
                                <th className="field-table-lats-td" scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            {fieldList}
                            </tbody>
                        </table>
                    </div>

                    <ModalAdd show={showAddModal} onHide={this.handleCloseAddModal}/>


                </div>
            </div>
        )
    }
}

export default connect(null)(FieldPage);
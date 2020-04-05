import React from 'react';
import {connect} from "react-redux";
import {loadUserFields} from "../fieldAction";
import {convertFieldTypeToStringText} from "../../util/heleperConstants";
import "../../style/pages/fieldPage.css"
import {api} from "../../api";

class FieldPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            isFetching: true,
            error: null
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

    render() {

        console.log('DATA:', this.state);

        const {fields, isFetching} = this.state;

        const fieldList = (!isFetching ? (fields.map((field) =>
            <tr key={field.id}>
                <td>{field.label}</td>
                <td>{convertFieldTypeToStringText(field.type)}</td>
                <td>{field.required?"True":"False"}</td>
                <td>{field.active?"True":"False"}</td>
                <td></td>
            </tr>
        )) : null);

        return (
            <div className="field-table-gen">
                <div className="form-container w-75">
                    <div className="field-table-header field-table-title">
                        Fields
                    </div>

                    <div className="field-table-table">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Label</th>
                                <th scope="col">Type</th>
                                <th scope="col">Required</th>
                                <th scope="col">Is Active</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            {fieldList}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null)(FieldPage);
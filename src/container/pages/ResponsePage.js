import React from 'react';
import {connect} from "react-redux";
import "../../style/pages/fieldPage.css"
import {api} from "../../api";

class ResponsePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            isFetching: true,
            error: null,
        }
    }

    componentDidMount() {
        api.loadUserResponse().then(
            fields => {
                console.log('loadUserResponse:', fields);
                this.setState({
                    fields,
                    isFetching: false,
                    error: fields.error
                });
            },
            errorMessage => {
                console.log('loadUserResponse2:', errorMessage.error);
                this.setState({
                    isFetching: false,
                    error: errorMessage.error
                });
            }
        )
    };


    render() {

        const {fields, isFetching, error} = this.state;

        const responseHead = (!isFetching && !error ? (fields.map((value) =>
            <th scope="col">{value.label}</th>
        )) : null);

        const responseList = (!isFetching && !error ? (fields.map((value, index) =>
            <td key={index} className="resp-td">
                {value.responses.map((resp, index) =>
                    <tr key={index} className="resp-tr">{resp}</tr>
                )}
            </td>
        )) : null);


        return (
            <div className="field-table-gen">
                <div className="form-container w-75">
                    <div className="field-table-header field-table-title">
                        Responses
                    </div>
                    <div className="field-table-table">

                        <table className="table">
                            <div className="response-gen">
                                <thead>
                                <tr>
                                    {responseHead}
                                </tr>
                                </thead>
                                <tbody>

                                {responseList}

                                </tbody>
                            </div>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null)(ResponsePage);
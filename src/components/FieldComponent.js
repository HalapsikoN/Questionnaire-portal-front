import React, {Component} from "react";
import {CHECKBOX, COMBOBOX, DATE, MULTILINE_TEXT, RADIO_BUTTON, SINGLE_LINE_TEXT} from "../util/heleperConstants";
import "../style/components/fieldComponent.css"

class FieldComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',

            error: null
        }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("update: ", this.props);
    //     if (prevProps.field !== this.props.field) {
    //         this.setState({
    //             id: this.props.field.id,
    //             label: this.props.field.label,
    //             type: this.props.field.type,
    //             options: this.props.field.options,
    //             required: this.props.field.required,
    //             active: this.props.field.active,
    //         })
    //     }
    // }

    handleChange = value => {
        this.props.onFieldChange({
            ...this.props.field,
            value
        })
    };

    handleChangeCheckbox = (index, value, arr, options) => {
        const values = [...arr || Array(options.length).fill(false).map((element, index) => ({
            label: options[index],
            checked: element
        }))];
        values[index] = {label: options[index], checked: value};
        this.handleChange(values);
    };

    render() {

        const {field: {id, label, type, options, required, active, value}, onFieldChange} = this.props;

        let element = <div/>;

        switch (type) {
            case SINGLE_LINE_TEXT: {
                element = (
                    <div className="field-element field-single-line-text">
                        <label htmlFor={id}>{label}</label>
                        <input type="text"
                               className="form-control"
                               required={required}
                               disabled={!active}
                               id={id}
                               value={value}
                               onChange={e => this.handleChange(e.target.value)}
                        />
                    </div>
                );
                break;
            }
            case MULTILINE_TEXT: {
                element = (
                    <div className="field-element field-multiline-text">
                        <label htmlFor={id}>{label}</label>
                        <textarea className="form-control"
                                  id={id}
                                  required={required}
                                  disabled={!active}
                                  value={value}
                                  onChange={e => this.handleChange(e.target.value)}
                        />
                    </div>
                );
                break;
            }
            case RADIO_BUTTON: {
                element = (
                    <div className="field-element field-radio">
                        <label>{label}</label>
                        {options.map((option) =>
                            <div key={option}>
                                <input type="radio"
                                       id={option}
                                       name={label + id}
                                       value={option}
                                       required={required}
                                       disabled={!active}
                                       onChange={e => this.handleChange(e.target.value)}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        )}
                    </div>
                );
                break;
            }
            case CHECKBOX: {
                element = (
                    <div className="field-element field-checkbox">
                        <label htmlFor={id}>{label}</label>
                        {options.map((option, index) =>
                            <div key={option}>
                                <input type="checkbox"
                                       id={option}
                                       name={label}
                                       value={option}
                                       required={required}
                                       disabled={!active}
                                       checked={value ? value[index].checked : false}
                                       onChange={event => this.handleChangeCheckbox(index, event.target.checked, value, options)}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        )}
                    </div>
                );
                break;
            }
            case COMBOBOX: {
                element = (
                    <div className="field-element field-combobox">
                        <label htmlFor={id}>{label}</label>
                        <select id={id} required={required} disabled={!active} className="form-control"
                                onChange={e => this.handleChange(e.target.value)}>
                            <option value="" hidden>Select value...</option>
                            {options.map((option) =>
                                <option key={option}
                                        value={option}>
                                    {option}
                                </option>
                            )}
                        </select>
                    </div>
                );
                break;
            }
            case DATE: {
                element = (
                    <div className="field-element field-data">
                        <label htmlFor={id}>{label}</label>
                        <input type="date"
                               className="form-control"
                               required={required}
                               disabled={!active}
                               value={value}
                               onChange={e => this.handleChange(e.target.value)}
                        />
                    </div>
                );
                break;
            }
            default: {
            }
        }


        return element;
    }

}

export default FieldComponent;
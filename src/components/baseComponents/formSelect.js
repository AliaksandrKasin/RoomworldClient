import * as React from "react";

class FormSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            value: props.value
        }
    }

    onChangeSelect = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return <div>
            <div className="text-right bg-white ">
                <label className="label select-placeholder">{this.props.placeholder}</label>
                <select onChange={this.onChangeSelect}
                        value={this.props.value}
                        onChangeCapture={(e) => this.props.onChange(e.target.value, e.target.name)}
                        className="input border input-small form-select pb-0"
                        name={this.props.name}>
                    {
                        this.state.options.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>
                        })
                    }
                </select>
            </div>
        </div>
    }
}

export default FormSelect;
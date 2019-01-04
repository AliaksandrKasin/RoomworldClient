import * as React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            min: props.min || null,
            max: props.max || null,
            charLeft: props.max || null,
            minLength: props.minLength || null
        }
    }

    inputOnChange = (e) => {
        this.setState({value: e.target.value, charLeft: this.state.max - e.target.value.length});
    }

    clearInput = (e) => {
        this.setState({value: "", charLeft: this.state.max});
        if (this.props.onChange) this.props.onChange("");
    }

    printAmountAllowedCharacters = () => {
        let amountCharacters = "";
        if (this.props.type === "text" || this.props.type === undefined) {
            if (this.state.min) {
                amountCharacters += "(minimum: " + this.state.min + ") ";
            }
            if (this.state.max) {
                amountCharacters += this.state.charLeft + "characters left";
            }
        }
        return amountCharacters;
    }

    render() {
        return <div className="position-relative">
            <div className="text-right bg-white ">
                <label className={(!this.state.value) ? "label" : "label label-small"}>{this.props.placeholder}</label>
                <i className="fas fa-backspace back" onClick={this.clearInput}></i>
                <input value={this.state.value}
                       minLength={this.state.minLength}
                       min={this.state.min}
                       max={this.state.max}
                       required={this.props.required}
                       type={this.props.type}
                       autoComplete={this.props.autoComplete}
                       onChange={(e) => (this.props.onChange) ? this.props.onChange(e.target.value) : null}
                       onChangeCapture={this.inputOnChange}
                       className={(!this.state.value) ? "input border" : "input border input-small"}/>
                <span className="text-danger input-counter">{this.printAmountAllowedCharacters()}</span>
            </div>
        </div>
    }
}

export default FormInput;

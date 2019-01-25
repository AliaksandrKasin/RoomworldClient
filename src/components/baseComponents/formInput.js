import * as React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            min: props.min || null,
            max: props.max || null,
            charLeft: props.maxLength || null,
            minLength: props.minLength || null,
            maxLength: props.maxLength || null
        }
    }

    inputOnChange = (e) => {
        this.setState({value: e.target.value, charLeft: this.state.maxLength - e.target.value.length});
    }

    clearInput = (e) => {
        this.setState({value: "", charLeft: this.state.maxLength});
        if (this.props.onChange) this.props.onChange("");
    }

    printAmountAllowedCharacters = () => {
        let amountCharacters = "";
        if (this.props.type === "text" || this.props.type === undefined) {
            if (this.state.minLength) {
                amountCharacters += "(minimum: " + this.state.minLength + ") ";
            }
            if (this.state.maxLength) {
                amountCharacters += this.state.charLeft + " characters left";
            }
        }
        return amountCharacters;
    }

    render() {
        return <div className="position-relative">
            <div className="text-right bg-white">
                <label className={(!this.state.value) ? "label" : "label label-small"}>{this.props.placeholder}</label>
                <i className="fas fa-backspace back" onClick={this.clearInput}></i>
                <input value={this.state.value}
                       minLength={this.state.minLength}
                       maxLength={this.state.maxLength}
                       min={this.state.min}
                       max={this.state.max}
                       required={this.props.required}
                       type={this.props.type}
                       name={this.props.name}
                       autoComplete={this.props.autoComplete}
                       onChange={(e) => (this.props.onChange) ? this.props.onChange(e.target.value, e.target.name) : null}
                       onChangeCapture={this.inputOnChange}
                       className={(!this.state.value) ? "input border" : "input border input-small"}/>
                <span className="text-muted input-counter">{this.printAmountAllowedCharacters()}</span>
            </div>
        </div>
    }
}

export default FormInput;

import * as React from "react";

class FormTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            charLeft: props.maxLength || 10000,
            maxLength: props.maxLength || 10000,
            minLength: props.minLength || 0
        };
        this.textArea = React.createRef();
    }

    inputOnChange = (e) => {
        this.setState({value: e.target.value, charLeft: this.state.maxLength - e.target.value.length});
        let minLength = e.target.minLength;
        let maxLength = e.target.maxLength;
        (e.target.value.length < minLength) ?
            e.target.setCustomValidity("Please lengthen this text to " + minLength
                + " characters or more (you are currently using "
                + e.target.value.length + " characters).") : e.target.setCustomValidity("");
    }

    clearInput = (e) => {
        this.setState({value: "", charLeft: this.state.maxLength});
        if (this.props.onChange) this.props.onChange("");
    }

    render() {
        return <div className="position-relative">
            <div className="text-right">
                <label className={(!this.state.value) ? "label" : "label label-small"}>{this.props.placeholder}</label>
                <i className="fas fa-backspace back" onClick={this.clearInput}></i>
                <textarea value={this.state.value}
                          minLength={this.state.minLength}
                          maxLength={this.state.maxLength}
                          required={this.props.required}
                          name={this.props.name}
                          onChange={(e) => (this.props.onChange) ? this.props.onChange(e.target.value, e.target.name) : null}
                          onChangeCapture={this.inputOnChange}
                          className={(!this.state.value) ? "input border resize-none input-size-5 pt-0" : "input border input-small resize-none input-size-5"}/>
                <span
                    className="text-muted input-counter">(minimum {this.state.minLength}) {this.state.charLeft} characters left</span>
            </div>
        </div>
    }
}

export default FormTextArea;
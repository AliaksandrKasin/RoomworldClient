import * as React from "react";

class FormTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value  || "",
            charLeft: props.maxLength  || 10000,
            maxLength: props.maxLength  || 10000,
            minLength: props.minLength || 0
        }
    }

    inputOnChange = (e) => {
        this.setState({value: e.target.value, charLeft: this.state.maxLength - e.target.value.length});
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
                          onChange={(e) => (this.props.onChange) ? this.props.onChange(e.target.value) : null}
                          onChangeCapture={this.inputOnChange}
                          className={(!this.state.value) ? "input border resize-none input-size-5" : "input border input-small resize-none input-size-5"}/>
                <span className="text-danger input-counter">(minimum {this.state.minLength}) {this.state.charLeft} characters left</span>
            </div>
        </div>
    }
}

export default FormTextArea;
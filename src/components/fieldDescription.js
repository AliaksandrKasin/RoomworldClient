import * as React from "react";

class FieldDescription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            invalidInput: false,
            errorMessage: ""
        }
    }

    checkValidation = (value) => {
        switch (this.props.type) {
            case "number" :
                (value < 1) ? this.setState({invalidInput: true , errorMessage: "This field must be greater"}) : this.setState({invalidInput: false});
                break;

        }
    }

    onBlur = event => {
        this.setState({input: event.target.value});
        this.checkValidation(event.target.value);
    }

    render() {
        return <div className="col-4 text-left">
            <label className="text-muted">{this.props.title}</label><br/>
            <div className="error-message">{(this.state.invalidInput) ? this.state.errorMessage : ""}</div>
            <input className="rounded w-50 h5 " type={this.props.type} min="1" max="20"
                   onChange={this.props.onChange} onBlur={this.onBlur}/>
        </div>
    }
}

export default FieldDescription;
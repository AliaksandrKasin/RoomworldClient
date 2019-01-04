import React from "react";

class FieldRegistration extends React.Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidUpdate = () =>{

    }

    render() {
        return <div className="mb-3">
            <small className="pl-2 text-muted">{this.props.content}</small>
            <input ref={this.inputRef} className={(this.props.errorMessage) ? "form-control invalid-input" : "form-control"}
                   type={this.props.type}
                   onChange={this.props.onChange}
                   placeholder={this.props.placeholder}
                   onBlur={this.props.onBlur}
                   required={this.props.required}
                   name={this.props.name}/>
            <div className="error-message">{this.props.errorMessage}</div>
        </div>
    }
}

export default FieldRegistration
import * as React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();

        this.state = {
            isEmpty: true,
            min: props.min,
            max: props.max,
            charLeft: props.max
        }
    }

    inputKeyPress = () => {
        this.setState({charLeft:this.state.max - this.input.current.value.length});
        if (this.input.current.value.length) {
            this.setState({isEmpty: false});
        } else {
            this.setState({isEmpty: true});
        }
    }


    render() {
        return <div className="mt-5 mb-5 position-relative">
            <div className="text-right">
                <label className={(this.state.isEmpty) ? "label" : "label label-small"}>{this.props.placeholder}</label>
                <i className="fas fa-backspace back"></i>
                <input ref={this.input} onChange={this.inputKeyPress}
                       className={(this.state.isEmpty) ? "input border" : "input border input-small"}/>
                <span className="text-danger input-counter">(minimum {this.state.min}) {this.state.charLeft} characters left</span>
            </div>
        </div>
    }
}

export default FormInput;

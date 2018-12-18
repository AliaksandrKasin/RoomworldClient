import * as React from "react";


class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        }
    }

    increment = () => {
        if (this.state.counter < 9) {
            this.setState({counter: +this.state.counter + 1});
        }
    }

    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({counter: +this.state.counter - 1});
        }
    }

    render() {
        return <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div className="">
                    <i onClick={this.increment}
                       className={(this.state.counter === 9) ? "counter-button__disable fas fa-angle-up fs-2" : "counter-button-up fas fa-angle-up fs-2"}></i>
                </div>
                <div className="mb-2 ">
                    <span className="counter-number">{this.state.counter}</span>
                </div>
                <div className="">
                    <i onClick={this.decrement}
                       className={(this.state.counter === 0) ? "counter-button__disable fas fa-angle-down fs-2" : "counter-button-down fas fa-angle-down fs-2"}></i>
                </div>
            </div>
        </div>
    }
}

export default Counter;
import * as React from "react";

class CounterAmenitiesSmall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return <div className="d-flex mt-3">
            <div className="counter-content mr-1">
                {(this.state.counter === 0) ? <span className="counter-amount">Any</span> :
                    <span className="counter-amount">{this.state.counter}</span>}
                <span className="counter-title">{this.props.title}</span>
            </div>

            <div className="d-flex justify-content-end">
                <div className="counter-button"
                     onClick={() => (this.state.counter > 0) && this.setState({counter: this.state.counter - 1})}>
                    <i className="fas fa-minus counter-button-icon"></i>
                </div>
                <div className="counter-button" onClick={() => this.setState({counter: this.state.counter + 1})}>
                    <i className="fas fa-plus counter-button-icon"></i>
                </div>
            </div>
        </div>
    }
}

export default CounterAmenitiesSmall;
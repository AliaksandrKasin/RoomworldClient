import * as React from "react";

class CounterAmenitiesSmall extends React.Component {
    render() {
        let counter = this.props.value || 1;
        return <div className="d-flex mt-3">
            <div className="counter-content mr-1">
                {(counter === 1) ? <span className="counter-amount">Any</span> :
                    <span className="counter-amount">{counter + ((counter > 1) && "+")}</span>}
                <span className="counter-title">{this.props.title}</span>
            </div>

            <div className="d-flex justify-content-end">
                <div className="counter-button"
                     onClick={() => (counter > 1) && this.props.onChange(counter - 1)}>
                    <i className="fas fa-minus counter-button-icon"></i>
                </div>
                <div className="counter-button" onClick={() => this.props.onChange(counter + 1)}>
                    <i className="fas fa-plus counter-button-icon"></i>
                </div>
            </div>
        </div>
    }
}

export default CounterAmenitiesSmall;
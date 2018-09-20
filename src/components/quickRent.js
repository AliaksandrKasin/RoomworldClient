import * as React from "react";
import DatePicker from "react-date-picker";

class QuickRent extends React.Component {
    render() {
        return <div className="border rounded_10 mt-3 mb-5">
            <h3 className="mt-5 ml-4">${this.props.price} <small className="text-muted">per night</small></h3>

            <div className="ml-3">
                <img className="img_size_5"
                     src="https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check_round-512.png"
                />
                <small className="card-body text-muted">Your dates are Available!</small>
            </div>
            <DatePicker
                className="input_size_s bg-white mt-3"
                value={new Date()}
                onChange={this.onChangeFrom}
                minDate={new Date()}
                locale="en-En"
            />

            <DatePicker
                className="input_size_s bg-white mt-3"
                value={new Date()}
                onChange={this.onChangeTo}
                minDate={new Date()}
                locale="en-En"
            />

            <div className="ml-4 mt-4 text-muted row">
                <h5 className="col-sm-6 pb-3 w-50 pl-0">Total</h5>
                <small className="col-sm-5 text-right h5 w-auto">${this.props.price}</small>
            </div>

            <div className="ml-4 text-muted row">
                <h5 className="col-sm-6 pb-3 small w-50 pl-0">Includes taxes and fees</h5>
                <a className="col-sm-5 text-right text-info small w-auto">View details</a>
            </div>

            <div className="text-center mb-4">
                <button className="btn btn-lg btn-primary" type='button'>Book Now
                </button>
            </div>
        </div>
    }
}

export default QuickRent;
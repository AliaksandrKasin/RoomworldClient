import * as React from "react";
import DatePicker from "react-date-picker";
import ModalWindowBook from "./modalWindowBook";
import STORE from "../store";
import stateWindow from "../actions/visibleModalWindow";
import connect from "react-redux/es/connect/connect";

class QuickRent extends React.Component {

    dateDiff(date1, date2) {
        return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    }

    datePlusDay(date) {
        let datePlusDay = new Date(date);
        return new Date(datePlusDay.setDate(date.getDate() + 1));
    }

    constructor(props) {
        super(props);
        this.state = {
            dateFrom: new Date(props.dateFrom),
            dateTo: new Date(props.dateTo),
            flat: this.props.flat,
            dateNotOrdered: true
        }
    }

    onChangeFrom = dateFrom => {
        this.setState({dateFrom});
        this.setState({dateTo: this.datePlusDay(dateFrom)});
        if (this.props.flat.orders.length) this.checkDates(dateFrom, this.datePlusDay(dateFrom));
    }
    onChangeTo = dateTo => {
        this.setState({dateTo});
        if (this.props.flat.orders.length) this.checkDates(this.state.dateFrom, dateTo);
    };

    checkDates(currentDateFrom, currentDateTo) {
        let arrayOrders = this.props.flat.orders;
        let state = null;
        currentDateFrom = currentDateFrom.setHours(0, 0, 0, 0);
        currentDateTo = currentDateTo.setHours(0, 0, 0, 0);
        let count = 0;
        arrayOrders.some((order) => {
            let dateFrom = new Date(order.dateFrom).setHours(0, 0, 0, 0);
            let dateTo = new Date(order.dateTo).setHours(0, 0, 0, 0);
            state = ((dateFrom <= currentDateFrom && dateTo >= currentDateFrom)
                && (dateFrom <= currentDateTo && dateTo >= currentDateTo)
                || (dateFrom > currentDateFrom && dateFrom < currentDateTo));
            return state;
        }) ? this.setState({dateNotOrdered: false}) : this.setState({dateNotOrdered: true});
    }

    render() {
        return <div className="border rounded_10 mt-3 mb-5">
            <ModalWindowBook dateFrom={this.state.dateFrom} dateTo={this.state.dateTo}
                             totalPrice={this.dateDiff(this.state.dateTo, this.state.dateFrom) * this.props.price}/>
            <h3 className="mt-5 ml-4">${this.props.price}
                <small className="text-muted"> per night</small>
            </h3>

            <div className="ml-3">
                <img className="img_size_5"
                     src={(this.state.dateNotOrdered) ? "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check_round-512.png" : "https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/cross-128.png"}
                />
                <small
                    className="card-body text-muted">{(this.state.dateNotOrdered) ? "Your dates are Available!" : "Your dates booked!"}</small>
            </div>
            <DatePicker
                className="input_size_s bg-white mt-3"
                value={this.state.dateFrom}
                onChange={this.onChangeFrom}
                minDate={new Date()}
                locale="en-En"
            />

            <DatePicker
                className="input_size_s bg-white mt-3"
                value={this.state.dateTo}
                onChange={this.onChangeTo}
                minDate={this.datePlusDay(this.state.dateFrom)}
                locale="en-En"
            />

            <div className="ml-4 mt-4 text-muted row">
                <h5 className="col-sm-6 pb-3 w-50 pl-0">Total</h5>
                <small
                    className="col-sm-5 text-right h5 w-auto">${this.dateDiff(this.state.dateTo, this.state.dateFrom) * this.props.price}</small>
            </div>

            {/*<div className="ml-4 text-muted row">
                <h5 className="col-sm-6 pb-3 small w-50 pl-0">Includes taxes and fees</h5>
                <a className="col-sm-5 text-right text-info small w-auto">View details</a>
            </div>
            */}
            <div className="text-center mb-4">
                <button className="btn btn-lg btn-primary" type='button' disabled={!this.state.dateNotOrdered}
                        onClick={() => STORE.dispatch(stateWindow(false))}>Book Now
                </button>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        searchParams: state.flatReducer.searchParams,
    };
}

export default connect(mapStateToProps)(QuickRent);
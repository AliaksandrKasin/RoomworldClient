import * as React from "react";
import DatePicker from "react-date-picker";
import QuickRentAdvice from "./quickRentAdvice";
import ApartmentFooter from "../apartmentFooter";

class ApartmentQuickRent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateNotOrdered: true
        }
    }

    dateDiff = (date1, date2) => {
        return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    }

    datePlusDay = (date) => {
        return new Date(new Date(date).setDate(date.getDate() + 1));
    }

    onChangeFrom = dateFrom => {
        this.setState({dateTo: this.datePlusDay(dateFrom), dateFrom: dateFrom});
        if (this.props.apartment.apartmentReservations.length) this.checkDates(dateFrom, this.datePlusDay(dateFrom));
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
            <div className="row">
                <div className="col-sm">
                    <h3 className="mt-5 ml-4">${this.props.apartment.apartmentRates}
                        <small className="text-muted"> per night</small>
                    </h3>
                    <div className="ml-3 quick-rent_title">
                        <img className="img_size_5"
                             src={(this.state.dateNotOrdered) ? "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check_round-512.png"
                                 : "https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/cross-128.png"}
                        />
                        <small
                            className="card-body text-muted">{(this.state.dateNotOrdered) ? "Your dates are Available!" : "Your dates booked!"}</small>
                    </div>
                    <DatePicker
                        className="input_size_s bg-white mt-3 border"
                        value={this.props.dateFrom}
                        onChange={this.onChangeFrom}
                        minDate={new Date()}
                        locale="en-En"
                    />
                    <DatePicker
                        className="input_size_s bg-white mt-3 border"
                        value={this.props.dateTo}
                        onChange={this.onChangeTo}
                        minDate={this.datePlusDay(this.props.dateFrom)}
                        locale="en-En"
                    />
                </div>
                <div className="col-sm mt-2 container-advice">
                    <QuickRentAdvice title="It's easy"
                                     image="https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/210_vote_like_up_upvote-512.png"
                                     body="We'll do all the hard work of finding guests, while you just enjoy earning money with a spare space."/>

                    <QuickRentAdvice title="It's free"
                                     image="https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/tag_label_shopping_free-128.png"
                                     body="We don't charge you to upload your place, and you get instant access to thousands of guests."/>
                </div>
            </div>
            <div className="mt-4 text-muted d-flex align-items-center border-d-top border-d-bottom m-0 mb-3 p-2 ml-3 mr-3">
                <div className="w-100 pl-3">
                    <h5 className="">Total</h5>
                </div>
                <div className="w-100 d-flex justify-content-end pr-3">
                    <small
                        className="text-right h5">${/*this.dateDiff(this.props.dateTo, this.props.dateFrom)*/2 * this.props.apartment.apartmentRates}</small>
                </div>
            </div>
            <div className="text-center mb-4">
                <button className="btn-next" type='button'>Book Now
                </button>
            </div>
        </div>
    }
}

export default ApartmentQuickRent;
import React from "react";
import DatePicker from "react-date-picker";
import STORE from "../store";
import search from "../actions/search";
import {Link, Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {SERVER} from "../constants/constants";


class SearchBlock extends React.Component {
    constructor() {
        super();
        this.dispatchSearchParams = this.dispatchSearchParams.bind(this);
        this.state = {
            dateFrom: new Date(),
            dateTo: this.datePlusDay(new Date()),
            place: "",
            redirect: false,
        }
    }

    datePlusDay(date) {
        let datePlusDay = new Date(date);
        return new Date(datePlusDay.setDate(date.getDate() + 1));
    }

    onChangeFrom = dateFrom => {
        this.setState({dateFrom});
        this.setState({dateTo: this.datePlusDay(dateFrom)});
    }
    onChangeTo = dateTo => this.setState({dateTo});
    onChangePlace = (e) => this.setState({place: e.target.value});

    placeToObject(place) {
        let splitPlace = place.split(/[, ]/).filter(n => n);
        switch (splitPlace.length) {
            case 0:
                return {country: null, city: null};
            case 1:
                return {country: splitPlace[0], city: null};
            case 2:
                return {country: splitPlace[0], city: splitPlace[1]};
        }
    }


    dispatchSearchParams() {
        let place = this.placeToObject(this.state.place);
        if (!place.country) {
            return;
        }

        STORE.dispatch(search({
            dateFrom: new Date(Date.UTC(this.state.dateFrom.getFullYear(), this.state.dateFrom.getMonth(), this.state.dateFrom.getDate())),
            dateTo: new Date(Date.UTC(this.state.dateTo.getFullYear(), this.state.dateTo.getMonth(), this.state.dateTo.getDate())),
            country: place.country,
            city: place.city,
        }))

        window.location = "/searches";
    }

    stringPlace() {
        let params = this.props.searchParams;
        return (params.city) ? params.country + ", " + params.city : params.country;
    }

    render() {
        return <div className="search">
            <div>
                <div className="row search-container mr-0 ml-0">
                    <div className="col-md-2 ">
                        <input type="text" className="form-control h1 input_size_s bg-white mt-1"
                               placeholder="Where do you want to go?"
                               onChange={this.onChangePlace}/>
                    </div>
                    <div className="date">
                        <DatePicker
                            className="input_size_s bg-white mt-1"
                            value={this.state.dateFrom}
                            onChange={this.onChangeFrom}
                            minDate={new Date()}
                            locale="en-En"
                        />

                        <DatePicker
                            className="input_size_s bg-white mt-1"
                            value={this.state.dateTo}
                            onChange={this.onChangeTo}
                            minDate={this.datePlusDay(this.state.dateFrom)}
                            locale="en-En"
                        />
                    </div>
                    <div className="col-md-1">
                        <button className="btn input_size_s mt-1 btn_size_s rounded_20 bg-white" type='button'
                                onClick={this.dispatchSearchParams}>Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        searchParams: state.flatReducer.searchParams
    };
}

export default connect(mapStateToProps)(SearchBlock);
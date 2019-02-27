import * as React from "react";
import DatePicker from "react-date-picker";
import GuestCounter from "./guestCounter";
import Autocomplete from 'react-google-autocomplete';
import moment from "moment";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        let dateNow = new Date();
        this.state = {
            dateFrom: dateNow,
            dateTo: moment(dateNow).add(1, "days").toDate(),
            guests: 1,
            place: ""
        }
    }

    onChangeDateFrom = (dateFrom) => this.setState({dateFrom: dateFrom, dateTo:moment(dateFrom).add(1, "days").toDate()});
    onChangeDateTo = (dateTo) => this.setState({dateTo: dateTo});

    onChangePlace = (e) => {
        this.setState({place: e.target.value});
    }

    render() {
        let dateNow = new Date();
        return <div className="d-flex flex-wrap align-items-center justify-content-center mb-3 mt-3 pl-3 w-100">
                <div className="search-destination-input d-flex">
                    <div className="position-relative box-place">
                    <span
                        className={(this.state.place) ? "text-muted search-bar__placeholder search-bar__placeholder_small" :
                            "text-muted search-bar__placeholder"}>Were do you want to go?</span>
                        <Autocomplete
                            className={(this.state.place) ? "search-bar__input_active search-bar__input border" : "search-bar__input border"}
                            placeholder=""
                            required={true}
                            value={this.state.place}
                            onChange={this.onChangePlace}
                            onPlaceSelected={(place) => console.log(place)}
                            types={['(regions)']}
                        />
                        {(this.state.place) &&
                        <i className="material-icons position-absolute search-bar__icon-close"
                           onClick={() => this.setState({place: ""})}>clear</i>}
                    </div>
                </div>
                <div className="d-flex flex-wrap box-combined-row">
                    <div className="box-dates ml-3">
                        <DatePicker
                            className="bg-white border date-picker-left"
                            value={this.state.dateFrom}
                            onChange={this.onChangeDateFrom}
                            minDate={dateNow}
                            locale="en-En"
                        />
                        <DatePicker
                            className="bg-white border"
                            value={this.state.dateTo}
                            onChange={this.onChangeDateTo}
                            minDate={moment(this.state.dateFrom).add(1, "days").toDate()}
                            locale="en-En"
                        />
                    </div>
                    <div className="box-guests">
                        <GuestCounter/>
                    </div>
                    <div className="box-btn-search">
                        <button className="search-bar__btn ml-3 mr-3" type='button'>Apply</button>
                    </div>
            </div>
        </div>
    }
}

export default SearchBar;
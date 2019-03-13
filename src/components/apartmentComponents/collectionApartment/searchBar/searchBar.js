import * as React from "react";
import DatePicker from "react-date-picker";
import GuestCounter from "./guestCounter";
import Autocomplete from 'react-google-autocomplete';
import moment from "moment";
import Geocode from "react-geocode";
import {setSearchParams} from "../../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");
        let dateNow = new Date();
        this.state = {
            dateFrom: dateNow,
            dateTo: moment(dateNow).add(1, "days").toDate(),
            guests: 1,
            searchPlace: {},
            displayPlace: ""
        }
    }

    onChangeDateFrom = (dateFrom) => {
        this.setState({dateFrom: dateFrom, dateTo: moment(dateFrom).add(1, "days").toDate()});
    }
    onChangeDateTo = (dateTo) => {
        this.setState({dateTo: dateTo})
    };

    onChangePlace = (e) => {
        this.setState({displayPlace: e.target.value});
        Geocode.fromAddress(e.target.value)
            .then((response) => {
                    debugger
                    let geocode = response.results[0].geometry.location;
                },
                (error) => {
                    console.log(error)
                }
            );
    };

    onPlaceSelected = (place) => {
        this.setState({displayPlace: place.formatted_address})
    }

    placeToObject = (place) => {
        let splitPlace = place.split(/[,]/).filter(n => n);
        return (splitPlace.length === 1) ? {city: null, country: splitPlace[splitPlace.length - 1].trim()} :
            {city: splitPlace[0].trim(), country: splitPlace[splitPlace.length - 1].trim()}
    }

    search = () => {
        let place = this.placeToObject(this.state.place.formatted_address);
        let searchParams = {
            dateFrom: new Date(this.state.dateFrom.getFullYear(), this.state.dateFrom.getMonth(), this.state.dateFrom.getDate()),
            dateTo: new Date(this.state.dateTo.getFullYear(), this.state.dateTo.getMonth(), this.state.dateTo.getDate()),
            country: place.country,
            city: place.city
        };
        this.props.setSearchParams(searchParams);
        this.props.history.push("/search/apartment");
    }

    render() {
        let dateNow = new Date();
        let position = (this.props.position.toUpperCase() === "center".toUpperCase()) ? "justify-content-center"
            : (this.props.position.toUpperCase() === "left".toUpperCase()) ? "justify-content-start" : "";
        return <div className={"d-flex flex-wrap align-items-center mb-3 mt-3 pl-3 w-100 " + position}>
            <div className="search-destination-input d-flex">
                <div className="position-relative box-place">
                    <span
                        className={(this.state.displayPlace) ? "text-muted search-bar__placeholder search-bar__placeholder_small" :
                            "text-muted search-bar__placeholder"}>Were do you want to go?</span>
                    <Autocomplete
                        className={(this.state.displayPlace) ? "search-bar__input_active search-bar__input border" : "search-bar__input border"}
                        placeholder=""
                        required={true}
                        value={this.state.displayPlace}
                        onChange={this.onChangePlace}
                        onPlaceSelected={this.onPlaceSelected}
                        types={['(cities)']}
                    />
                    {(this.state.displayPlace) &&
                    <i className="material-icons position-absolute search-bar__icon-close"
                       onClick={() => this.setState({displayPlace: ""})}>clear</i>}
                </div>
            </div>
            <div className={"d-flex flex-wrap box-combined-row " + position}>
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
                    <button className="search-bar__btn ml-3 mr-3" type='button' onClick={this.search}>Apply</button>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        searchParams: state.apartmentReducer.searchParams,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchParams: details => {
            dispatch(setSearchParams(details));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
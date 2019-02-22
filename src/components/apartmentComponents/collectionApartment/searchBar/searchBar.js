import * as React from "react";
import DatePicker from "react-date-picker";
import GuestCounter from "./guestCounter";
import Autocomplete from 'react-google-autocomplete';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            place: ""
        }
    }

    onChangePlace = (e) => {
        this.setState({place: e.target.value});
    }

    render() {
        return <div className="d-flex flex-wrap align-items-center mb-3 mt-3 pl-3">
            <div className="search-destination-input">
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
                    <i className="material-icons position-absolute search-bar__icon-close" onClick={() => this.setState({place: ""})}>clear</i>}
                </div>
            </div>
            <div className="d-flex flex-wrap box-combined-row">
                <div className="box-dates ml-3">
                    <DatePicker
                        className="bg-white border date-picker-left"
                        value={new Date()}
                        onChange={this.onChangeFrom}
                        minDate={new Date()}
                        locale="en-En"
                    />
                    <DatePicker
                        className="bg-white border"
                        value={new Date()}
                        onChange={this.onChangeTo}
                        minDate={new Date()}
                        locale="en-En"
                        onChangeRaw={this.onChangeRow}
                    />
                </div>
                <div className="box-guests">
                    <GuestCounter/>
                </div>
                <div className="box-btn-search">
                    <button className="search-bar__btn ml-3 mr-3" type='submit'>Apply</button>
                </div>
            </div>
        </div>
    }
}

export default SearchBar;
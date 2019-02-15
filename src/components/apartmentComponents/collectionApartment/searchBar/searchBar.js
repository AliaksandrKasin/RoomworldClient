import * as React from "react";
import DatePicker from "react-date-picker";
import GuestCounter from "./guestCounter";

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
        return <div className="d-flex flex-wrap align-items-center mb-3 mt-3">
            <div className="">
                <div className="position-relative box-place">
                    {/*<i className="fas fa-map-marker-alt search-bar__marker"></i>*/}
                    <span
                        className={(this.state.place) ? "text-muted search-bar__placeholder search-bar__placeholder_small" :
                            "text-muted search-bar__placeholder"}>Were do you want to go?</span>
                    <input type="text"
                           className={(this.state.place) ? "search-bar__input_active search-bar__input border" : "search-bar__input border"}
                           required={true}
                           value={this.state.place}
                           onChange={this.onChangePlace}/>
                </div>
            </div>
            <div className="ml-3">
                <DatePicker
                    className="bg-white border"
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
            <div>
                <GuestCounter/>
            </div>
            <button className="search-bar__btn ml-3 mr-3" type='submit'>Apply</button>
        </div>
    }
}

export default SearchBar;
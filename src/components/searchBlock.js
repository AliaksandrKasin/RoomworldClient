import React from "react";
import DatePicker from "react-date-picker";
import STORE from "../store";
import search from "../actions/search";
import {Link} from "react-router-dom";
import selectedFlat from "../actions/selectedFlat";
import axios from "axios";
import {SERVER} from "../constants/constants";
import listFlat from "../actions/listflat";
import page from "../actions/pageCounter";

class SearchBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            dateFrom: new Date(),
            dateTo: new Date(),
            place: ""
        }
    }

    onChangeFrom = dateFrom => this.setState({dateFrom});
    onChangeTo = dateTo => this.setState({dateTo})
    onChangePlace = (e) => {
        this.setState({place: e.target.value});
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
                            minDate={new Date()}
                            locale="en-En"
                        />
                    </div>
                    <div className="col-md-1">
                        <Link to='/searches' className="underline_none">
                            <button className="btn input_size_s mt-1 btn_size_s rounded_20 bg-white" type='button'
                                    onClick={() => STORE.dispatch(search({
                                        country: "Belarus",
                                        city: "Grodno"
                                    }))}>Search
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default SearchBlock
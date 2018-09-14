import React from "react";
import DatePicker from "react-date-picker";

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
                        <button className="btn input_size_s mt-1 btn_size_s rounded_20 bg-white" type='button'
                                onClick={() => window.location.href = '/searches'}>Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default SearchBlock
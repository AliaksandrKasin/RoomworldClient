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
    onChangePlace = (e) => {this.setState({place: e.target.value});}

    render() {
        return <div className="find">

            <div className="row search-container">
                <div className="col-md-2 ">
                    <input type="text" className="form-control h1 search" placeholder="Where do you want to go?" onChange={this.onChangePlace}/>
                </div>
                <DatePicker
                    className="search"
                    value={this.state.dateFrom}
                    onChange={this.onChangeFrom}
                    minDate={new Date()}
                />

                <DatePicker
                    className="search"
                    value={this.state.dateTo}
                    onChange={this.onChangeTo}
                    minDate={new Date()}
                />

                <div className="col-md-1">
                    <button className="btn btn-secondary btn-primary search btn-search" type='button'>Search
                    </button>
                </div>
            </div>
        </div>
    }

}

export default SearchBlock
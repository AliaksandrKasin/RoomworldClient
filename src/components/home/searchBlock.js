import React from "react";
import DatePicker from "react-date-picker";
import search from "../../actions/search";
import connect from "react-redux/es/connect/connect";


class SearchBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: new Date(),
            dateTo: this.datePlusDay(new Date()),
            place: "",
            redirect: false,
        }
    }

    datePlusDay = (date) => {
        let datePlusDay = new Date(date);
        return new Date(datePlusDay.setDate(date.getDate() + 1));
    }
    onChangeFrom = (dateFrom) => this.setState({dateFrom: dateFrom, dateTo: this.datePlusDay(dateFrom)});
    onChangeTo = (dateTo) => this.setState({dateTo});
    onChangePlace = (e) => this.setState({place: e.target.value});

    placeToObject = (place) => {
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


    search = () => {
        if (!this.state.place.length) {
            return;
        }
        let searchParams = {
            dateFrom: new Date(Date.UTC(this.state.dateFrom.getFullYear(), this.state.dateFrom.getMonth(), this.state.dateFrom.getDate())),
            dateTo: new Date(Date.UTC(this.state.dateTo.getFullYear(), this.state.dateTo.getMonth(), this.state.dateTo.getDate())),
        }
        this.props.history.push("/searches");
    }

    render() {
        return <form onSubmit={search} className="search">
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="row d-flex justify-content-center search-container-max">
                    <div className="col-sm mt-2">
                        <div className="position-relative w-100">
                            <i className="fas fa-map-marker-alt input-label"></i>
                            <input type="text" className="input-search"
                                   placeholder="Where do you want to go?"
                                   onChange={this.onChangePlace}/>
                        </div>
                    </div>
                    <div className="mt-2 search-container-calendar">
                        <DatePicker
                            className="bg-white"
                            value={this.state.dateFrom}
                            onChange={this.onChangeFrom}
                            minDate={new Date()}
                            locale="en-En"
                        />
                        <DatePicker
                            className="bg-white"
                            value={this.state.dateTo}
                            onChange={this.onChangeTo}
                            minDate={this.datePlusDay(this.state.dateFrom)}
                            locale="en-En"
                            onChangeRaw={this.onChangeRow}
                        />
                    </div>
                    <button className="btn btn-search col-sm ml-3 mr-3 mt-2" type='submit'>Search</button>
                </div>
            </div>
        </form>
    }

}

function mapStateToProps(state) {
    return {
        /*searchParams: state.flatReducer.searchParams*/
    };
}

export default connect(mapStateToProps)(SearchBlock);
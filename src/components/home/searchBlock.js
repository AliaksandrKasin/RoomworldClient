import React from "react";
import DatePicker from "react-date-picker";
import Geocode from "react-geocode";


class SearchBlock extends React.Component {
    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");
        this.state = {
            dateFrom: new Date(),
            dateTo: this.datePlusDay(new Date()),
            place: "",
            typePlace: ""
        }
    }

    datePlusDay = (date) => {
        let datePlusDay = new Date(date);
        return new Date(datePlusDay.setDate(date.getDate() + 1));
    }
    onChangeFrom = (dateFrom) => this.setState({dateFrom: dateFrom, dateTo: this.datePlusDay(dateFrom)});
    onChangeTo = (dateTo) => this.setState({dateTo});
    onChangePlace = (e) => {
        Geocode.fromAddress(this.state.place).then(
            (response) => {
                this.setState({typePlace: response.results[0].types[0].toLocaleUpperCase()});
            },
            (error) => {
                console.log(error)
            }
        );
        this.setState({place: e.target.value})
    };

    placeToObject = (place) => {
        let splitPlace = place.split(/[, ]/).filter(n => n);
        switch (splitPlace.length) {
            case 0:
                return {country: null, city: null};
            case 1: {
                if (this.state.typePlace === "country".toLocaleUpperCase()) {
                    return {country: splitPlace[0], city: null};
                } else {
                    return {country: null, city: splitPlace[0]};
                }
            }
            case 2:
                return {country: splitPlace[0], city: splitPlace[1]};
        }
    }


    search = (e) => {
        e.preventDefault();
        let addressObject = this.placeToObject(this.state.place);
        let searchParams = {
            dateFrom: new Date(Date.UTC(this.state.dateFrom.getUTCFullYear(), this.state.dateFrom.getUTCMonth(), this.state.dateFrom.getUTCDate())),
            dateTo: new Date(Date.UTC(this.state.dateTo.getUTCFullYear(), this.state.dateTo.getUTCMonth(), this.state.dateTo.getUTCDate())),
            country: addressObject.country,
            city: addressObject.city
        };
        debugger
        localStorage.setItem("searchParams", JSON.stringify(searchParams));
        this.props.history.push("/search/apartment");
    }

    render() {
        return <form onSubmit={this.search} className="search">
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="row d-flex justify-content-center search-container-max">
                    <div className="col-sm mt-2">
                        <div className="position-relative w-100">
                            <i className="fas fa-map-marker-alt input-label"></i>
                            <input type="text" className="input-search"
                                   placeholder="Where do you want to go?"
                                   required={true}
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

export default SearchBlock;
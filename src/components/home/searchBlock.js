import React from "react";
import DatePicker from "react-date-picker";
import Geocode from "react-geocode";
import {setSearchParams} from "../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";
import SearchBar from "../apartmentComponents/collectionApartment/searchBar/searchBar";
import TitleCountry from "./titleCountry";

class SearchBlock extends React.Component {
    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");
        this.state = {
            dateFrom: new Date(),
            dateTo: this.datePlusDay(new Date()),
            place: "",
            typePlace: "",
        }
    }

    datePlusDay = (date) => {
        let datePlusDay = new Date(date);
        return new Date(datePlusDay.setDate(date.getDate() + 1));
    }

    onChangeFrom = (dateFrom) => this.setState({dateFrom: dateFrom, dateTo: this.datePlusDay(dateFrom)});
    onChangeTo = (dateTo) => this.setState({dateTo});
    onChangePlace = (e) => {
        this.setState({place: e.target.value});
        Geocode.fromAddress(e.target.value).then(
            (response) => {
                this.setState({typePlace: response.results[0].types[0].toLocaleUpperCase()});
            },
            (error) => {

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
            dateFrom: new Date(this.state.dateFrom.getFullYear(), this.state.dateFrom.getMonth(), this.state.dateFrom.getDate()),
            dateTo: new Date(this.state.dateTo.getFullYear(), this.state.dateTo.getMonth(), this.state.dateTo.getDate()),
            country: addressObject.country,
            city: addressObject.city
        };
        /*this.props.setSearchParams(searchParams);*/
        localStorage.setItem("searchParams", JSON.stringify(searchParams));
        this.props.history.push("/search/apartment");
    }

    render() {
        return <div className="search">
            <div className="box-top d-flex justify-content-center align-items-center w-100">
                <div>
                    <h1 className="text-white text-center search-title mb-0">Book apartments online</h1>
                    <div className="d-flex justify-content-center">
                        <TitleCountry timeout={500} speadWrite={200} speadErase={100}/>
                    </div>
                    <div className="row d-flex justify-content-center search-container-max">
                        <SearchBar/>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
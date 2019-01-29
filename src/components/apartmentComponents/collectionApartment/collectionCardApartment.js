import React from "react";
import CardApartment from "./cardApartment";
import {IMG_NOT_FOUND, SERVER} from "../../../constants/constants";
import ApartmentFilter from "../apartmentFilter/apartmentFilter";
import ApartmentMap from "../apartmentMap";
import {getAmountApartmentByParams, getApartmentByParams} from "../../../services/apartmentService";
import Loading from "../../extensionComponents/loading";
import Geocode from "react-geocode";
import ApartmentFooter from "../apartmentFooter";


class CollectionCardApartment extends React.Component {

    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");
        this.state = {
            apartments: [],
            skip: 0,
            take: 10,
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 10,
            isLoad: false,
            amountApartment: 0,
            searchParams: JSON.parse(localStorage.getItem("searchParams"))
        }
    }

    componentDidMount = () => {
        let searchParams = JSON.parse(localStorage.getItem("searchParams"));
        searchParams.skip = this.state.skip;
        searchParams.take = this.state.take;
        getApartmentByParams(searchParams).then((collectionApartments) => {
            this.setState({apartments: collectionApartments, isLoad: true});
        });
        getAmountApartmentByParams(searchParams).then((amountApartment) => {
            this.setState({amountApartment: amountApartment});
        });
        Geocode.fromAddress(searchParams.country + " " + searchParams.city)
            .then((response) => {
                    let geocode = response.results[0].geometry.location;
                    this.setState({center: {lat: geocode.lat, lng: geocode.lng}});
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    formatDate = (date) => {
        return date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
    }

    showMore = () => {
        let searchParams = JSON.parse(localStorage.getItem("searchParams"));
        searchParams.skip = this.state.skip + this.state.take;
        searchParams.take = this.state.take;
        getApartmentByParams(searchParams).then((collectionApartments) => {
            this.setState({apartments: [...this.state.apartments].concat(collectionApartments)});
        });
        this.setState({skip: searchParams.skip, take: searchParams.take});
    }

    collectionApartment = () => {
        return this.state.apartments.map((apartment, index) => {
            return <CardApartment
                id={apartment.id}
                key={index}
                name={apartment.headTitle}
                image={(apartment.images.length) ? SERVER + apartment.images[0] : IMG_NOT_FOUND}
                cardText={apartment.propertyDescription}
                cost={apartment.apartmentRates}
                location={apartment.apartmentLocation.country + " " + apartment.apartmentLocation.city}
                date={this.formatDate(new Date())}
            />
        })
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div onScroll={this.onScroll} className="mt-3">
            <div className="ml-5 mr-5">
                <ApartmentFilter/>
            </div>
            <div className="row m-0">
                <div className="container col-sm-6 container_flex_none container_width_none">
                    <div className="container__title border mb-4 rounded_10 p-2">
                        <h3>
                            <span
                                className="text-uppercase">{(this.state.searchParams.country) && this.state.searchParams.country}</span>
                            <span>{(this.state.searchParams.country && this.state.searchParams.city) && ", "}</span>
                            <span
                                className="text-uppercase">{(this.state.searchParams.city) && this.state.searchParams.city}</span>
                            <small className="text-muted ml-2">({this.state.amountApartment} places found)</small>
                        </h3>
                    </div>
                    <div className="row m-0">
                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button' onClick={this.showMore}>Show more</button>
                    </div>
                </div>
                <div className="map-sticky-container sticky-top col-sm-5">
                    <ApartmentMap center={this.state.center} zoom={this.state.zoom}/>
                </div>
            </div>
            <ApartmentFooter/>
        </div>
    }
}

export default CollectionCardApartment;
import React from "react";
import CardApartment from "./cardApartment";
import ApartmentMap from "../apartmentMap";
import {getAmountApartmentByParams, getApartmentByParams} from "../../../services/apartmentService";
import Loading from "../../extensionComponents/loading";
import Geocode from "react-geocode";
import ApartmentFooter from "../apartmentFooter";
import ReactCountryFlag from "react-country-flag";
import {Map} from 'react-leaflet'
import CardHorizontalApartment from "./cardHorizontalApartment";
import OpenStreetMap from "../showApartment/openStreetMap";

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
            searchParams: JSON.parse(localStorage.getItem("searchParams")),
            shortCountryName: "",
            cardView: false
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
                    let shortCountryName = response.results[0].address_components[response.results[0].address_components.length - 1].short_name;
                    let geocode = response.results[0].geometry.location;
                    this.setState({center: {lat: geocode.lat, lng: geocode.lng}, shortCountryName: shortCountryName});
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
            return (this.state.cardView) ? <CardApartment
                    id={apartment.id}
                    key={index}
                    name={apartment.headTitle}
                    images={apartment.images}
                    cardText={apartment.propertyDescription}
                    cost={apartment.apartmentRates}
                    location={apartment.apartmentLocation}
                    date={this.formatDate(new Date())}
                    shortCountryName={this.state.shortCountryName}
                    amauntBath={apartment.amountBathroom}
                    amountBed={apartment.amountBedroom}
                    typeApart={apartment.apartmentTypeString}
                    accommodates={apartment.accommodates}
                /> :
                <CardHorizontalApartment id={apartment.id}
                                         key={index}
                                         name={apartment.headTitle}
                                         images={apartment.images}
                                         cardText={apartment.propertyDescription}
                                         cost={apartment.apartmentRates}
                                         location={apartment.apartmentLocation}
                                         date={this.formatDate(new Date())}
                                         shortCountryName={this.state.shortCountryName}
                                         amauntBath={apartment.amountBathroom}
                                         amountBed={apartment.amountBedroom}
                                         typeApart={apartment.apartmentTypeString}
                                         accommodates={apartment.accommodates}/>
        })
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div onScroll={this.onScroll} className="mt-3">
            <div className="ml-5 mr-5">
                {/*<ApartmentFilter/>*/}
            </div>
            <div className="border-top border-bottom apartment-filter-bar">
                <div className="mb-1 filter-bar-container">
                    <div className="d-flex">
                        <div><ReactCountryFlag code={this.state.shortCountryName} svg/></div>
                        <span className="text-capitalize filter-bar-title ml-2">{this.state.searchParams.country}</span>
                        <span
                            className="text-capitalize filter-bar-title">{(this.state.searchParams.country && this.state.searchParams.city) && ", " + this.state.searchParams.city}</span>
                        <span
                            className="ml-2">({this.state.apartments.length + " of " + this.state.amountApartment})</span>
                    </div>
                    <div>
                        <button className="btn-filters ml-3"><i className="fas fa-sliders-h"></i> <span>Filters</span>
                        </button>
                    </div>
                    <div className="ml-3">
                        <button className="btn-filters btn-sort"><span>Sort</span>
                            <i className="fas fa-arrow-down btn-sort-icon"></i></button>
                    </div>
                </div>
            </div>
            <div className="row m-0 justify-content-center">
                <div className="container col-sm-6 m-0 mt-2">
                    <div className="w-100 collection-view">
                        <div className="mr-3">
                            <i className={(!this.state.cardView) ? "fas fa-th collection-view-icon" : "fas fa-th collection-view-icon collection-view-icon-active"}
                               onClick={() => this.setState({cardView: true})}></i>
                            <i className={(this.state.cardView) ? "fas fa-th-list collection-view-icon ml-2" : "fas fa-th-list collection-view-icon ml-2 collection-view-icon-active"}
                               onClick={() => this.setState({cardView: false})}></i>
                        </div>
                    </div>
                    <div className="row m-0">
                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button' onClick={this.showMore}>Show more</button>
                    </div>
                </div>
                <div className="map-sticky-container sticky-top col-sm-6">
                    {/*<ApartmentMap center={this.state.center} zoom={this.state.zoom}/>*/}
                    <OpenStreetMap/>
                </div>
            </div>
            <ApartmentFooter/>
        </div>
    }
}

export default CollectionCardApartment;
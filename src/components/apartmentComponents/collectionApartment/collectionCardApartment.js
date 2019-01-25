import React from "react";
import CardApartment from "./cardApartment";
import axios from "axios";
import {IMG_NOT_FOUND, SERVER} from "../../../constants/constants";
import Map from "../../map";
import {connect} from 'react-redux';
import ApartmentFilter from "../apartmentFilter/apartmentFilter";
import ApartmentMap from "../apartmentMap";


class CollectionCardApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            skip: 0,
            take: 1,
            found: 0,
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15
        }
    }

    componentDidMount = () => {

    }

    formatDate = (date) => {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    collectionApartment =() => {
        if (this.state.apartments.length) {
            return this.state.flats.map((apartment, index) => {
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
    }

    stringPlace() {
        /*let params = this.props.searchParams;
        return (params.city) ? params.country + ", " + params.city : params.country;*/
    }

    render() {
        return <div className="mt-3">
            <div className="ml-5 mr-5">
                <ApartmentFilter/>
            </div>
            <div className="row">
                <div className="container col-sm-6 container_flex_none container_width_none">
                    <div className="container__title border mb-4 rounded_10 p-2">
                        <h3>{this.stringPlace()}
                            <small className="text-muted">({this.state.found} places
                                found)
                            </small>
                        </h3>
                    </div>
                    <div className="row">
                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button'
                                onClick="">Show more
                        </button>
                    </div>
                </div>
                <div className="map-sticky-container sticky-top col-sm-5">
                    <ApartmentMap center={this.state.center} zoom={this.state.zoom}/>
                    {/*<Map place={this.props.searchParams.country + ", " + this.props.searchParams.city}/>*/}
                </div>
            </div>
        </div>
    }
}


export default CollectionCardApartment;
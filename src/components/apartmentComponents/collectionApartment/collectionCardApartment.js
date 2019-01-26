import React from "react";
import CardApartment from "./cardApartment";
import {IMG_NOT_FOUND, SERVER} from "../../../constants/constants";
import ApartmentFilter from "../apartmentFilter/apartmentFilter";
import ApartmentMap from "../apartmentMap";
import {getApartmentByParams} from "../../../services/apartmentService";
import Loading from "../../extensionComponents/loading";


class CollectionCardApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            skip: 0,
            take: 10,
            found: 0,
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15,
            isLoad: false
        }
    }

    componentDidMount = () => {
        debugger
        let searchParams = JSON.parse(localStorage.getItem("searchParams"));
        searchParams.skip = this.state.skip;
        searchParams.take = this.state.take;
        getApartmentByParams(searchParams).then((collectionApartments) => {
            this.setState({apartments: collectionApartments, isLoad: true});
        });
    }

    formatDate = (date) => {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
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

    stringPlace() {
        /*let params = this.props.searchParams;
        return (params.city) ? params.country + ", " + params.city : params.country;*/
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div className="mt-3">
            <div className="ml-5 mr-5">
                <ApartmentFilter/>
            </div>
            <div className="row m-0">
                <div className="container col-sm-6 container_flex_none container_width_none">
                    <div className="container__title border mb-4 rounded_10 p-2">
                        <h3>{this.stringPlace()}
                            <small className="text-muted">({this.state.found} places
                                found)
                            </small>
                        </h3>
                    </div>
                    <div className="row m-0">
                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button'>Show more
                        </button>
                    </div>
                </div>
                <div className="map-sticky-container sticky-top col-sm-5">
                    <ApartmentMap center={this.state.center} zoom={this.state.zoom}/>
                </div>
            </div>
        </div>
    }
}


export default CollectionCardApartment;
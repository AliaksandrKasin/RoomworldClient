import React from "react";
import CardApartment from "./cards/cardVerticalApartment";
import {getAmountApartmentByParams, getApartmentByParams} from "../../../services/apartmentServices/apartmentService";
import Loading from "../../extensionComponents/loading";
import Geocode from "react-geocode";
import ApartmentFooter from "../createApartment/apartmentFooter";
import CardHorizontalApartment from "./cards/cardHorizontalApartment";
import OpenStreetMap from "../showApartment/openStreetMap";
import SortSelectApartment from "./sortSelectApartment";
import FiltersModalApartment from "./apartmentFilter/filtersModalApartment";
import ReactCountryFlag from "react-country-flag";
import SearchBar from "./searchBar/searchBar";
import {GoogleMapContainer} from "./googleMap/googleMap";
import connect from "react-redux/es/connect/connect";
import moment from "moment";

class CollectionCardApartment extends React.Component {

    constructor(props) {
        super(props);
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
            searchParams: props.searchParams,
            shortCountryName: "",
            cardView: (window.innerWidth < 620),
            modalFiltersIsOpen: false,
            mapIsHidden: (window.innerWidth <= 974),
            hoveredApartment: -1
        }
    }

    componentDidMount = () => {
        this.loadCollections();
        window.addEventListener("resize", this.resizeWindow);
    }

    loadCollections = (params) => {
        let utcOffset = moment().utcOffset();
        let searchParams = (params) ? params : this.props.searchParams;
        searchParams.skip = this.state.skip;
        searchParams.take = this.state.take;
        searchParams.dateFrom = moment(searchParams.dateFrom).add(utcOffset, "m").utc();
        searchParams.dateTo = moment(searchParams.dateTo).add(utcOffset, "m").utc();
        getApartmentByParams(searchParams).then((collectionApartments) => {
            this.setState({apartments: collectionApartments, isLoad: true});
        });
        getAmountApartmentByParams(searchParams).then((amountApartment) => {
            this.setState({amountApartment: amountApartment});
        });
        this.setState({searchParams: searchParams});
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

    resizeWindow = (e) => {
        let b = e.target.innerWidth;
        (e.target.innerWidth < 620) ?
            this.setState({cardView: true}) : this.setState({cardView: false});
        (e.target.innerWidth <= 974) ?
            this.setState({mapIsHidden: true}) : this.setState({mapIsHidden: false});
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
            return (this.state.cardView) ?
                <CardApartment key={index} apartment={apartment} shortCountryName={this.state.shortCountryName}/> :
                <CardHorizontalApartment key={index} apartment={apartment}
                                         onMouseOver={(coordinates) => this.child.onMouseOver(coordinates)}
                                         onMouseOut={() => this.child.onMouseOut()}
                                         shortCountryName={this.state.shortCountryName}/>
        })
    }

    onCloseMap = () => {
        this.setState({mapIsHidden: true});
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div onScroll={this.onScroll} className="">
            <SearchBar position="left" onClickApply={this.loadCollections}/>
            <div className="apartment-filter-bar border-bottom border-top">
                <div className="d-flex align-items-center justify-content-center text-anthracite h-100 mb-1">
                    <div className="d-flex align-items-center">
                        <div className="pl-2 pb-1"><ReactCountryFlag code={this.state.shortCountryName} svg/></div>
                        {
                            <span className="text-capitalize pl-2 text-dark h5 font-weight-normal pt-1">
                            {this.state.searchParams.country}
                                {(this.state.searchParams.country && this.state.searchParams.city) && ", " + this.state.searchParams.city}
                            </span>
                        }
                        <span className="ml-2 text-dark h6 font-weight-normal pt-1">
                            {"( " + this.state.apartments.length + " of " + this.state.amountApartment + " )"}
                            </span>
                    </div>
                    <div className="ml-3">
                        <button className="btn-filters" onClick={() => this.setState({modalFiltersIsOpen: true})}>
                            <i className="fas fa-sliders-h pr-2"></i>
                            <span>Filters</span>
                        </button>
                    </div>
                    {
                        (this.state.mapIsHidden) && <div className="ml-3">
                            <button className="btn-filters" onClick={() => this.setState({mapIsHidden: false})}>
                                <i className="fas fa-map-marked-alt pr-2"></i>
                                <span>Map</span>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className="row m-0 justify-content-center">
                <div className="container container-collection-apartment col-sm-6 m-0 mt-2">
                    <div
                        className="row m-0 d-flex justify-content-center mt-1">
                        <div className="d-flex justify-content-end align-items-center w-100">
                            <SortSelectApartment/>
                        </div>
                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button' onClick={this.showMore}>Show more</button>
                    </div>
                </div>
                {
                    (!this.state.mapIsHidden) && < div className="map-sticky-container sticky-top col-sm-6">
                        {/* <OpenStreetMap onClose={this.onCloseMap} btnCloseIsVisible={(window.innerWidth <= 974)}
                                       apartments={this.state.apartments}/> */}
                        <GoogleMapContainer apartments={this.state.apartments} onClose={this.onCloseMap}
                                            btnCloseIsVisible={(window.innerWidth <= 974)} center={this.state.center}
                                            hoveredApartment={this.state.hoveredApartment}
                                            onRef={ref => (this.child = ref)}/>
                    </div>
                }
            </div>
            <ApartmentFooter/>
            <FiltersModalApartment open={this.state.modalFiltersIsOpen}
                                   onClose={() => this.setState({modalFiltersIsOpen: false})}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        searchParams: state.apartmentReducer.searchParams,
    };
}

export default connect(mapStateToProps)(CollectionCardApartment);
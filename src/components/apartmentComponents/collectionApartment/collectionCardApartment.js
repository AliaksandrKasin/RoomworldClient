import React from "react";
import CardApartment from "./cards/cardVerticalApartment";
import {getAmountApartmentByParams, getApartmentByParams} from "../../../services/apartmentServices/apartmentService";
import Loading from "../../extensionComponents/loading";
import Geocode from "react-geocode";
import ApartmentFooter from "../createApartment/apartmentFooter";
import CardHorizontalApartment from "./cards/cardHorizontalApartment";
import SortSelectApartment from "./sortSelectApartment";
import FiltersModalApartment from "./apartmentFilter/filtersModalApartment";
import ReactCountryFlag from "react-country-flag";
import SearchBar from "./searchBar/searchBar";
import {GoogleMapContainer} from "./googleMap/googleMap";
import connect from "react-redux/es/connect/connect";
import moment from "moment";
import {setSearchParams} from "../../../actions/apartmentActions/apartmentActions";
import PriceSlider from "./apartmentFilter/priceSlider";
import SinglePriceSlider from "./apartmentFilter/singlePriceSlider";
import SingleBedroomsSelect from "./apartmentFilter/singleBedroomsSlider";

class CollectionCardApartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            skip: 0,
            take: 10,
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

    resizeWindow = (e) => {
        (e.target.innerWidth < 620) ?
            this.setState({cardView: true}) : this.setState({cardView: false});
        (e.target.innerWidth <= 974) ?
            this.setState({mapIsHidden: true}) : this.setState({mapIsHidden: false});
    }

    loadCollections = (params, filters = null) => {
        let utcOffset = moment().utcOffset();
        let searchParams = (params) ? params : this.props.searchParams;
        searchParams.skip = this.state.skip;
        searchParams.take = this.state.take;
        searchParams.dateFrom = moment(searchParams.dateFrom).add(utcOffset, "m").utc();
        searchParams.dateTo = moment(searchParams.dateTo).add(utcOffset, "m").utc();
        searchParams.apartmentFilters = filters;
        this.setState({searchParams: searchParams});
        getApartmentByParams(searchParams).then((collectionApartments) => {
            this.setState({apartments: collectionApartments, isLoad: true});
        });
        getAmountApartmentByParams(searchParams).then((amountApartment) => {
            this.setState({amountApartment: amountApartment});
        });
        Geocode.fromAddress(searchParams.country + " " + searchParams.city)
            .then((response) => {
                let shortCountryName = response.results[0].address_components[response.results[0].address_components.length - 1].short_name;
                this.setState({shortCountryName: shortCountryName});
            });
    }

    showMore = () => {
        let searchParams = this.state.searchParams;
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
                                         shortCountryName={this.state.shortCountryName}/>
        })
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div onScroll={this.onScroll} className="">
            <SearchBar position="left" onClickApply={this.loadCollections}/>
            <div className="apartment-filter-bar border-bottom border-top">
                <div className="d-flex align-items-center justify-content-center text-anthracite h-100 mb-1">
                    <SinglePriceSlider onClickDone={this.loadCollections}/>
                    <SingleBedroomsSelect  onClickDone={this.loadCollections}/>
                    <div>
                        <button className="btn-sort">
                            <span>Instant Confirmation</span>
                            <i className={false ? "fas fa-angle-down btn-sort-icon btn-sort-icon-active" : "fas fa-angle-down btn-sort-icon"}></i>
                        </button>
                    </div>
                    <div className="">
                        <button className="btn-filters" onClick={() => this.setState({modalFiltersIsOpen: true})}>
                            <i className="fas fa-sliders-h pr-2"></i>
                            <span>More Filters</span>
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
                        <div className="d-flex align-items-center w-100">
                            <div className="d-flex justify-content-start align-items-center w-100 h-100">
                                <div className="">
                                    <span
                                        className="ml-2 text-dark h6 font-weight-normal pt-1">{this.state.apartments.length + " of " + this.state.amountApartment + " Apartments"}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end align-items-center w-100">
                                <SortSelectApartment onSelect={this.loadCollections}/>
                            </div>
                        </div>

                        {this.collectionApartment()}
                    </div>
                    <div className="text-center">
                        <button className="btn-next" type='button' onClick={this.showMore}>Show more</button>
                    </div>
                </div>
                {
                    (!this.state.mapIsHidden) && < div className="map-sticky-container sticky-top col-sm-6">
                        <GoogleMapContainer apartments={this.state.apartments}
                                            onClose={() => this.setState({mapIsHidden: true})}
                                            btnCloseIsVisible={this.state.mapIsHidden}
                                            hoveredApartment={this.state.hoveredApartment}
                                            onRef={ref => (this.child = ref)}
                                            place={this.state.searchParams.country + " " + this.state.searchParams.city}/>
                    </div>
                }
            </div>
            <ApartmentFooter/>
            <FiltersModalApartment open={this.state.modalFiltersIsOpen}
                                   onClose={() => this.setState({modalFiltersIsOpen: false})}
                                   onClickDone={this.loadCollections}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CollectionCardApartment);

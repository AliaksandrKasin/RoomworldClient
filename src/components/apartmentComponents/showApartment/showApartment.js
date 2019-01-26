import * as React from "react";
import ApartmentCarousel from "./apartmentCarusel";
import ApartmentCardInfo from "./ApartmentCardInfo";
import Calendar from 'react-calendar';
import ApartmentLocation from "./apartmentLocation";
import ApartmentMenu from "./apartmentMenu";
import QuickRent from "./apartmentQuickRent";
import Fasilities from "./apartmentAmenity";
import scrollToComponent from 'react-scroll-to-component';
import {getApartmentById} from "../../../services/apartmentService";
import Loading from "../../extensionComponents/loading";
import ApartmentMap from "../apartmentMap";
import RuleSequence from "../rules/ruleSequence";
import ApartmentFooter from "../apartmentFooter";
import {setSelectedApartment} from "../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";


class ShowApartment extends React.Component {

    constructor(props) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        super(props);
        this.apartmentRules = React.createRef();
        this.state = {
            apartment: {},
            isLoad: false,
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15
        }
    }

    componentDidMount = () => {
        let id = localStorage.getItem("selectedApartment");
        (id) ? getApartmentById(id).then((apartment) => {
                this.setState({apartment: apartment, isLoad: true});
            }) : this.props.history.push("/");
    }

    listAmenities(amenities) {
        let type = getArrayUniqueTypes(amenities);
        return type.map((item, index) => {
            let arrayAmenities = getElementsByType(amenities, item);
            return <Fasilities key={index} title={item} amenites={arrayAmenities}/>
        })
    }

    /*listHouseRules(houseRuleses) {
        return houseRuleses.map((rule, index) => {
            return <Rules key={index} state={rule.state} text={rule.name}/>
        })
    }*/


    formatDate = (date) => {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    showCalendar = () => {
        return <Calendar locale="en-En" /*tileDisabled={({activeStartDate, date, view}) => {
            return this.state.apartment.apartmentReservations.map((order) => {
                return (date.getTime() >= new Date(order.dateFrom).setHours(0, 0, 0, 0) && date.getTime() <= new Date(order.dateTo).setHours(0, 0, 0, 0));
            }).find((element) => element === true);
        }}*//>
    }

    getTime = (stringDate) => {
        let date = new Date(stringDate);
        return date.getHours() + "h:" + date.getMinutes() + "m";
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div className="container mt-5 flat">
            <ApartmentCarousel images={this.state.apartment.images}/>
            <ApartmentLocation
                place={this.state.apartment.apartmentLocation.country + ", " + this.state.apartment.apartmentLocation.city}/>
            <ApartmentMenu
                overview={() => scrollToComponent(this.overview)}
                amenities={() => scrollToComponent(this.amenities)}
                rates={() => scrollToComponent(this.rates)}
                map={() => scrollToComponent(this.map)}
            />
            <div className="mt-3"><h3>{this.state.apartment.headTitle}</h3></div>
            {
                <QuickRent dateFrom={new Date()/*this.props.searchParams.dateFrom*/}
                           dateTo={new Date()/*this.props.searchParams.dateTo*/} apartment={this.state.apartment}/>
            }
            <div className="row mt-3 justify-content-center">
                <ApartmentCardInfo
                    img="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-512.png"
                    body="Apartment" title={this.state.apartment.apartmentSize + " sq. ft."}/>
                <ApartmentCardInfo
                    img="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-52-512.png"
                    body="Bathrooms" title={this.state.apartment.amountBathroom}/>
                <ApartmentCardInfo img="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"
                                   body="Bedrooms" title={this.state.apartment.amountBedroom}/>
                <ApartmentCardInfo img="https://cdn4.iconfinder.com/data/icons/silky-icon-user/60/users2-1-128.png"
                                   body="Sleeps"
                                   title={this.state.apartment.accommodates}/>
            </div>
            <div className="mt-4 ml-0">
                <h3 className="mt-3">Overview</h3>
                <div className="pl-0 text-muted">
                    {this.state.apartment.propertyDescription}
                </div>
            </div>
            <div ref={this.apartmentRules} className="mt-5 pl-0 mb-5">
                <h5>House Rules</h5>
                <div className="row mt-4">
                    <h6 className="col-3 mw-200">Check-in: <small
                        className="text-muted">{this.getTime(this.state.apartment.checkInTime)}</small></h6>
                    <h6 className="col-3 mw-200">Check-out: <small
                        className="text-muted">{this.getTime(this.state.apartment.checkOutTime)}</small></h6>
                </div>
                <div className=" bg-light ml-0">
                    {
                        (!!this.state.apartment.rulesOfResidence.length) &&
                        <div className="w-100 mb-4 d-flex flex-wrap justify-content-center pb-4 bg-light">
                            {
                                this.state.apartment.rulesOfResidence.map((rule, index) => {
                                    return <RuleSequence key={index} isAllowed={rule.isAllowed} nameRule={rule.nameRule}
                                                         removeRule={() => this.removeRule(index)}/>
                                })
                            }
                        </div>
                    }
                </div>
                <h6 className="col-6 text-muted pb-4 mw-300">Minimum age of primary renter: <small
                    className="h5">18</small></h6>
            </div>

            <div ref="amenities">
                {/*this.listAmenities(this.state.flat.amentieses)*/}
            </div>
            <div ref="rates" className=" mt-5">
                <h4 className="mb-4">Rates & Availability</h4>
                {
                    this.showCalendar()
                }
            </div>

            <div ref="map" className="apartment-location-map mt-5 mb-5">
                <h3 className="mb-3">Map</h3>
                <ApartmentMap center={this.state.center} zoom={this.state.zoom}/>
            </div>
            <ApartmentFooter/>
        </div>
    }
}

function getElementsByType(array, type) {
    let newArray = [];
    array.map((el) => {
        if (el.type === type) {
            newArray.push(el.name)
        }
    });
    return newArray;
}

function getArrayUniqueTypes(amenities) {
    return Array.from(new Set(amenities.map(item => item.type)));
}


function mapStateToProps(state) {
    return {
        selectedApartment: state.apartmentReducer.selectedApartment,
    };
}

export default connect(mapStateToProps)(ShowApartment);
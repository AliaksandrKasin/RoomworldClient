import * as React from "react";
import FormSelect from "../../baseComponents/formSelect";
import FormInput from "../../baseComponents/formInput";
import countryList from 'react-select-country-list'
import ApartmentMap from "./apartmentMap";
import Geocode from "react-geocode";
import AlertError from "../../alertComponents/alertError";
import {setApartmentLocation} from "../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";

class ApartmentLocation extends React.Component {

    constructor(props) {
        super(props);
        this.countries = countryList().getLabels();
        this.state = {
            location: {
                country: this.props.apartment.apartmentLocation.country || this.countries[0],
                state: this.props.apartment.apartmentLocation.state || "",
                city: this.props.apartment.apartmentLocation.city || "",
                streetAddress: this.props.apartment.apartmentLocation.streetAddress || "",
            },
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15,
            addressIsNotExists: false,
            isVisibleMap: false
        };
    }

    componentDidMount = () => {
        let unsubscribe = this.props.history.listen((location, action) => {
            this.props.setApartmentLocation(this.state.location);
            unsubscribe();
        });
    }

    onChangeFormValue = (value, name) => {
        this.setState({location: Object.assign(this.state.location, {[name]: value})})
    }

    changeGeocodePlace = (place) => {
        Geocode.fromAddress(place).then(
            (response) => {
                let typeAddress = response.results[0].types[0].toLocaleUpperCase();
                let geocode = response.results[0].geometry.location;
                (typeAddress === "route".toLocaleUpperCase() || typeAddress === "street_address".toLocaleUpperCase()) ?
                    this.setState({
                        center: {lat: geocode.lat, lng: geocode.lng}, addressIsNotExists: false, isVisibleMap: true
                    }) :
                    this.setState({addressIsNotExists: true})
            },
            (error) => {
                console.log(error)
            }
        );
    }

    next = (e) => {
        e.preventDefault();
        if (this.state.isVisibleMap) {
            this.props.history.push('/apartment/photos');
            this.props.setApartmentLocation(this.state.location);
        } else {
            this.changeGeocodePlace(this.state.location.country + " " + this.state.location.city + " " + this.state.location.streetAddress);
        }
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-2">

                    <h4 className="apartment-title">Where is your apartment located?</h4>
                    <h6 className="text-muted pt-2">Your listing will include a map, but not your address.
                        Your address is only shared with guests who have booked your property.</h6>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                    <AlertError message={this.state.addressIsNotExists && "This address is not exists!"}/>
                    {
                        (this.state.isVisibleMap === false) ?
                            <div>
                                <div className="col-sm-6 p-0 mt-4 apartment-container-col">
                                    <FormSelect onChange={this.onChangeFormValue} name="country"
                                                value={this.state.location.country}
                                                options={this.countries}
                                                placeholder="Country"/>
                                </div>
                                <div className="col-sm-6 p-0 mt-4 apartment-container-col">
                                    <FormInput onChange={this.onChangeFormValue} name="state"
                                               value={this.state.location.state} placeholder="State"/>
                                </div>
                                <div className="mb-4 mt-4 col-sm-6 p-0">
                                    <FormInput onChange={this.onChangeFormValue} name="city"
                                               value={this.state.location.city} placeholder="City"
                                               required={true}/>
                                </div>
                                <div className="mb-5 mt-4 col-sm-6 p-0">
                                    <FormInput onChange={this.onChangeFormValue} name="streetAddress"
                                               value={this.state.location.streetAddress}
                                               placeholder="Street address" required={true}/>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="w-100 bg-light p-3 pl-5 mb-3">
                                    <h6 className="text-muted">You entered:</h6>
                                    <span
                                        className="d-block text-muted text-capitalize">{this.state.location.country}</span>
                                    <small
                                        className="d-block text-muted text-capitalize">{this.state.location.state}</small>
                                    <small
                                        className="d-block text-muted text-capitalize">{this.state.location.city}</small>
                                    <small
                                        className="d-block text-muted text-capitalize">{this.state.location.streetAddress}</small>
                                    <div>
                                        <span className="text-info mt-3" onClick={() => {
                                            this.setState({isVisibleMap: false})
                                        }}>Edit address</span>
                                    </div>
                                </div>
                                <div className="apartment-location-map mb-5">
                                    <ApartmentMap center={this.state.center} zoom={this.state.zoom}/>
                                </div>
                            </div>
                    }
                    <div className="row m-0 flex-nowrap">
                        <div className="text-left col-sm">
                            <button className="btn-back button-size-s" type='button'
                                    onClick={() => this.props.history.push('/apartment/details')}>Back
                            </button>
                        </div>
                        <div className="text-right col-sm">
                            <button className="btn-next button-size-s"
                                    type='submit'>{(this.state.isVisibleMap) ? "Next" : "Save"}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        apartment: state.apartmentReducer.apartment
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setApartmentLocation: location => {
            dispatch(setApartmentLocation(location));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentLocation);
import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import STORE from "../store";
import connect from "react-redux/es/connect/connect";
import AmenitiesRegistration from "./amenitiesRegistration";
import Rules from "./ruleRegistration";
import LocationRegistration from "./locationRegistration";
import DescriptionFlatRegistration from "./descriptionFlatRegistration";
import {addImages, addRule, initialState} from "../actions/registrationFlat/registrationFlatActions";


class RegistrationFlat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: [],

            imagesInvalid: false,
            nameInvalid: false,
            descriptionInvalid: false,
            accommodatesInvalid: false,
            sizeInvalid: false,
            costInvalid: false,
            checkInInvalid: false,
            checkOutInvalid: false,
            countBathroomInvalid: false,
            countBedroomInvalid: false,
            countryInvalid: false,
            cityInvalid: false,
            numberHouseInvalid: false,
            numberHouseBlockInvalid: false,
            numberFlat: false,
            errorMessageImages: "Select 2 or more images"
        }
        STORE.dispatch(initialState());
    }

    checkImages() {
        !(this.state.pictures.length) ? this.setState({imagesInvalid: true}) : null;
        return !(this.state.pictures.length)
    }

    onChangeSelectPictures = event => {
        this.setState({pictures: event.target.files});
        let src = [];
        for (let i = 0; i < event.target.files.length; i++) {
            src.push({url: event.target.files[i].name});
        }
        STORE.dispatch(addImages(src));
    }


    uploadImages = (images) => {
        let form = new FormData();
        for (let i = 0; i < images.length; i++) {
            form.append("File", images[i])
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/upload/images', form, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    listImages = (images) => {
        let imagesSrc = [];
        for (let i = 0; i < images.length; i++) {
            imagesSrc.push(URL.createObjectURL(images[i]));
        }
        return imagesSrc.map((src, index) => {
            return <div key={index} className="col-3 m-1">
                <img src={src} className="img-thumbnail"/>
            </div>
        })
    }

    checkName = () => {
        (this.props.flat.name.length > 0 && this.props.flat.name.length < 300) ? this.setState({nameInvalid: false}) : this.setState({nameInvalid: true});
        return (this.props.flat.name.length > 0 && this.props.flat.name.length < 300);
    }

    checkDescription = () => {
        (this.props.flat.description.length > 0 && this.props.flat.description.length < 1000) ? this.setState({descriptionInvalid: false}) : this.setState({descriptionInvalid: true});
        return (this.props.flat.description.length > 0 && this.props.flat.description.length < 1000);
    }

    checkAccommodates = () => {
        (this.props.flat.accommodates > 0) ? this.setState({accommodatesInvalid: false}) : this.setState({accommodatesInvalid: true});
        return (this.props.flat.accommodates > 0);
    }

    checkSize = () => {
        (this.props.flat.size > 0) ? this.setState({sizeInvalid: false}) : this.setState({sizeInvalid: true});
        return (this.props.flat.size > 0);
    }

    checkBathroom = () => {
        (this.props.flat.countBathroom >= 0) ? this.setState({countBathroomInvalid: false}) : this.setState({countBathroomInvalid: true});
        return (this.props.flat.countBathroom >= 0);
    }

    checkBedroom = () => {
        (this.props.flat.countBedroom >= 0) ? this.setState({countBedroomInvalid: false}) : this.setState({countBedroomInvalid: true});
        return (this.props.flat.countBedroom >= 0);
    }

    checkCheckIn = () => {
        (this.props.flat.checkIn.length) ? this.setState({checkInInvalid: false}) : this.setState({checkInInvalid: true});
        return (this.props.flat.checkIn.length);
    }

    checkCheckOut = () => {
        (this.props.flat.checkOut.length) ? this.setState({checkOutInvalid: false}) : this.setState({checkOutInvalid: true});
        return (this.props.flat.checkOut.length);
    }

    checkCountry= () => {
        (this.props.location.country.length) ? this.setState({countryInvalid: false}) : this.setState({countryInvalid: true});
        return  (this.props.location.country.length);
    }

    checkCity= () => {
        (this.props.location.city.length) ? this.setState({cityInvalid: false}) : this.setState({cityInvalid: true});
        return  (this.props.location.city.length);
    }


    saveFlat = () => {
        debugger;
        if (this.checkImages() || !this.checkName() || !this.checkDescription() ||
            !this.checkAccommodates() || !this.checkSize() || !this.checkBedroom() ||
            !this.checkBathroom() || !this.checkCheckIn() || !this.checkCheckOut() ||
            !this.checkCountry() || !this.checkCity()) return;

        this.uploadImages(this.state.pictures);
        debugger
        let flat = Object.assign(this.props.flat, {houseRuleses: this.props.rules},
            {amentieses: this.props.amenities}, {location: this.props.location}, {images: this.props.images});

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/place/new', flat)
            .then((response) => {
                window.location.href = "/home";
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {

        return <div className="container">

            <div className="container border rounded_10 mb-3 mt-5">
                <h1>Add a new place</h1>
                <h4 className="text-muted">Earn money renting out a spare room, flat or mountain hut. Listing your place
                    is totally free.</h4>
            </div>

            <div className="container border rounded_10">
                <div>
                    <h4>Photos</h4>
                    <small className="text-muted">Upload great photos of your place</small>
                    <div className="row">
                        {this.listImages(this.state.pictures)}
                    </div>
                </div>
                <input className="button_cursor_pointer mb-3" type="file" name="picture" multiple accept="image/*"
                       onChange={this.onChangeSelectPictures}/>
            </div>

            <DescriptionFlatRegistration/>

            <LocationRegistration/>

            <Rules/>

            <AmenitiesRegistration/>

            <div className="error-message">{this.props.errorMessage}</div>

            <div className="text-center mb-5">
                <button className="btn btn-secondary btn-primary input_size_s w-50 rounded_10" type='button'
                        onClick={this.saveFlat}>Save
                </button>
            </div>


        </div>
    }
}

function mapStateToProps(state) {
    return {
        flatForUpload: state.registrationFlatReducer,
        flat: state.registrationFlatReducer.flat,
        rules: state.registrationFlatReducer.houseRuleses,
        amenities: state.registrationFlatReducer.amentieses,
        location: state.registrationFlatReducer.location,
        images: state.registrationFlatReducer.images
    };
}

export default connect(mapStateToProps)(RegistrationFlat);
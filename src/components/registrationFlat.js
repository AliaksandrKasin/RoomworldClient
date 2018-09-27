import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import STORE from "../store";
import selectedFlat from "../actions/selectedFlat";
import connect from "react-redux/es/connect/connect";
import AmenitiesRegistration from "./amenitiesRegistration";
import Rules from "./ruleRegistration";
import LocationRegistration from "./locationRegistration";
import DescriptionFlatRegistration from "./descriptionFlatRegistration";

class RegistrationFlat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
        }

        this.saveFlat = this.saveFlat.bind(this);

        STORE.dispatch(selectedFlat({
            placeTitle: "",
            placeDescription: "",
            spaceOffered: "Entire place",
            accommodates: "",
            sizeFlat: "",
            price: "",
            checkIn: "",
            checkOut: "",
            amountBathroom: "",
            amountBedroom: "",
            location: {
                country: "",
                city: "",
                numberHouse: "",
                numberHouseBlock: "",
                numberFlat: "",
                gpsPoint: "a3434t3rg33r"
            },
            houseRuleses: [],
            amentieses: [],
            images: []
        }));
    }

    onChangeSelectPictures = event => {
        this.setState({pictures: event.target.files});
        let flat = this.props.flat;
        let src = [];
        for (let i = 0; i < event.target.files.length; i++) {
            src.push(event.target.files[i].name);
        }
        flat.images = src;
        STORE.dispatch(selectedFlat(flat))
    }


    uploadImages(images) {
        debugger
        let form = new FormData();
        for (let i = 0; i < images.length; i++) {
            form.append("File", images[i])
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/upload/images', form, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    listImages(images) {
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


    saveFlat() {
        let flat = this.props.flat;
        this.uploadImages(this.state.pictures);
        flat.houseRuleses = this.props.rules;
        flat.amenitieses = this.props.amenities;
        let arrayAmenities = [];
        this.props.amenities.map((amenity) => {
            arrayAmenities.push({name: amenity.title, type: amenity.type})
        });
        let arrayHouseRules = [];
        this.props.rules.map((rule) => {
            arrayHouseRules.push({name: rule.title, state: rule.state})
        });
        let arrayImages = [];
        flat.images.map((image) => {
            arrayImages.push({url: image});
        })
        debugger;
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/place/new', {
            name: flat.placeTitle,
            description: flat.placeDescription,
            cost: flat.price,
            accommodates: flat.accommodates,
            spaceOffered: flat.spaceOffered,
            size: flat.sizeFlat,
            countBathRoom: flat.amountBathroom,
            countBedroom: flat.amountBedroom,
            checkIn: flat.checkIn,
            checkOut: flat.checkOut,
            amentieses: arrayAmenities,
            houseRuleses: arrayHouseRules,
            images: arrayImages,
            location: flat.location


        })
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

            <div className="text-center mb-5">
                <button className="btn btn-secondary btn-primary input_size_s w-50 rounded_10" type='button'
                        onClick={this.saveFlat}>Save
                </button>
            </div>


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
        flat: state.flatReducer.selectedFlat,
        rules: state.flatReducer.houseRuleses,
        amenities: state.flatReducer.amenities
    };
}

export default connect(mapStateToProps)(RegistrationFlat);
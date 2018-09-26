import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";
import STORE from "../store";
import selectedFlat from "../actions/selectedFlat";
import connect from "react-redux/es/connect/connect";
import Rules from "./rules";
import RulesRegistration from "./RulesRegistration";
import addRules from "../actions/addRules";

class RegistrationFlat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            houseRule: {title: "", state: true}
        }

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
                numberFlat: ""
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

    onChangePlaceTitle = (event) => {
        let flat = this.props.flat;
        flat.placeTitle = event.target.value;
        STORE.dispatch(selectedFlat(flat))
    }

    onChangePlaceDescription = (event) => {
        let flat = this.props.flat;
        flat.placeDescription = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeSpaceOffered = (event) => {
        let flat = this.props.flat;
        flat.spaceOffered = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAccommodates = (event) => {
        let flat = this.props.flat;
        flat.accommodates = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeSizeFlat = (event) => {
        let flat = this.props.flat;
        flat.sizeFlat = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangePrice = (event) => {
        let flat = this.props.flat;
        flat.price = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCheckIn = (event) => {
        let flat = this.props.flat;
        flat.checkIn = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCheckOut = (event) => {
        let flat = this.props.flat;
        flat.checkOut = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAmountBathroom = (event) => {
        let flat = this.props.flat;
        flat.amountBathroom = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeAmountBedroom = (event) => {
        let flat = this.props.flat;
        flat.amountBedroom = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCountry = (event) => {
        let flat = this.props.flat;
        flat.location.country = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeCity = (event) => {
        let flat = this.props.flat;
        flat.location.city = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberHouse = (event) => {
        let flat = this.props.flat;
        flat.location.numberHouse = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberHouseBlock = (event) => {
        let flat = this.props.flat;
        flat.location.numberHouseBlock = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeNumberFlat = (event) => {
        let flat = this.props.flat;
        flat.location.numberFlat = event.target.value;
        STORE.dispatch(selectedFlat(flat));
    }

    onChangeHouseRulesTitle = (event) => {
        this.setState({houseRule: {title: event.target.value, state: this.state.houseRule.state}})
    }

    onChangeHouseRulesState = (event) => {
        this.setState({houseRule: {state: (event.target.value === "Can"), title: this.state.houseRule.title}})
    }

    onClickAddRule(rule) {

        STORE.dispatch(addRules(rule));

        /*if (rule.title !== "") {


            if (flat.houseRuleses.filter(x => x.title === rule.title).length === 0) {
                flat.houseRuleses.push(rule);
                this.setState({houseRules: {title: "", state: true}})
            }
        }*/
    }


    uploadImages(images) {
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

    listHouseRules(houseRules) {
        return houseRules.map((rule, index) => {
            return <RulesRegistration key={index} state={rule.state} text={rule.title}/>
        })
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
                <input className="" type="file" name="picture" multiple accept="image/*"
                       onChange={this.onChangeSelectPictures}/>
            </div>

            <div className="container border rounded_10 mb-3 mt-5">
                <h4>Tell us about your place...</h4>

                <div className="text-left mb-4 w-100">
                    <label className="text-muted">Place title:</label><br/>
                    <input className="rounded w-75" type="text" onChange={this.onChangePlaceTitle}/>
                </div>

                <div className="text-left mb-4 w-100">
                    <label className="text-muted">Place description:</label><br/>
                    <textarea className="rounded w-75" onChange={this.onChangePlaceDescription}/>
                </div>

                <div className="row">
                    <div className="col-4 text-left">
                        <label className="text-muted">Space offered:</label><br/>
                        <select className="rounded" onChange={this.onChangeSpaceOffered}>
                            <option>Entire place</option>
                            <option>Private room</option>
                            <option>Shared room</option>
                        </select>
                    </div>
                    <div className="col-4 text-left">
                        <label className="text-muted">Accommodates:</label><br/>
                        <input className="rounded w-25 h5 " type="number" min="1" max="20"
                               onChange={this.onChangeAccommodates}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Size flat:</label><br/>
                        <input className="rounded w-50 h5 " type="number" min="1" onChange={this.onChangeSizeFlat}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Price per night(USD):</label><br/>
                        <input className="rounded w-50 h5 " type="number" min="0" onChange={this.onChangePrice}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Check in:</label><br/>
                        <input className="rounded w-50 h5 " type="time" onChange={this.onChangeCheckIn}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Check out:</label><br/>
                        <input className="rounded w-50 h5 " type="time" onChange={this.onChangeCheckOut}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Amount bathroom:</label><br/>
                        <input className="rounded w-25 h5 " type="number" min="1" max="20"
                               onChange={this.onChangeAmountBathroom}/>
                    </div>

                    <div className="col-4 text-left">
                        <label className="text-muted">Amount bedroom:</label><br/>
                        <input className="rounded w-25 h5 " type="number" min="1" max="20"
                               onChange={this.onChangeAmountBedroom}/>
                    </div>

                </div>

            </div>

            <div className="container border rounded_10 ">
                <h4>Location</h4>
                <div className="text-left mb-4 w-100 mt-3">
                    <label className="text-muted">Country:</label><br/>
                    <input className="rounded w-75 " type="text" onChange={this.onChangeCountry}/>
                </div>

                <div className="text-left mb-4 w-100 mt-3">
                    <label className="text-muted">City:</label><br/>
                    <input className="rounded w-75" type="text" onChange={this.onChangeCity}/>
                </div>

                <div className="row">
                    <div className="text-left mb-4 w-100 mt-3 col-4">
                        <label className="text-muted">Number house:</label><br/>
                        <input className="rounded w-50" type="number" min="1" onChange={this.onChangeNumberHouse}/>
                    </div>

                    <div className="text-left mb-4 w-100 mt-3 col-4">
                        <label className="text-muted">Number house block:</label><br/>
                        <input className="rounded w-50" type="number" min="1"
                               onChange={this.onChangeNumberHouseBlock}/>
                    </div>

                    <div className="text-left mb-4 w-100 mt-3 col-4">
                        <label className="text-muted">Number flat:</label><br/>
                        <input className="rounded w-50" type="number" min="1"
                               onChange={this.onChangeNumberFlat}/>
                    </div>
                </div>

            </div>

            <div className="container border rounded_10 ">
                <h4>House Rules</h4>

                {this.listHouseRules(this.props.flat.houseRuleses)}

                <div className="row">
                    <div className="col-6">
                        <label className="text-muted">Title:</label><br/>
                        <input className="rounded w-100" type="text" onChange={this.onChangeHouseRulesTitle}/>
                    </div>
                    <div className="col-2">
                        <label className="text-muted">State:</label><br/>
                        <select className="rounded" onChange={this.onChangeHouseRulesState}>
                            <option>Can</option>
                            <option>Can`t</option>
                        </select>
                    </div>

                    <div className="col-4 mt-4 pt-1">
                        <button onClick={() => this.onClickAddRule(this.state.houseRule)} type="button">Add rule
                        </button>
                    </div>
                </div>
            </div>


        </div>
    }
}

function mapStateToProps(state) {
    return {
        flat: state.flatReducer.selectedFlat
    };
}

export default connect(mapStateToProps)(RegistrationFlat);
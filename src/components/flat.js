import * as React from "react";
import Carousel from "./carusel";
import CardInfo from "./cardInfo";
import Rules from "./rules";
import Map from "./map";
import Calendar from 'react-calendar';
import Location from "./location";
import FlatMenu from "./flatMenu";
import QuickRent from "./quickRent";
import Description from "./description";
import Fasilities from "./facilities";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {SERVER} from "../constants/constants";
import STORE from "../store";
import selectedFlat from "../actions/selectedFlat";



class Flat extends React.Component {

    constructor(props) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        super(props);
        this.getFlat(this.props.flatReducer.idSelectedFlat);
    }

    getFlat(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/flat', {
                params: {id: id}
            }
        )
            .then((response) => {
                STORE.dispatch(selectedFlat(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    listAmenities(amenities) {
        let type = getArrayUniqueTypes(amenities);
        return type.map((item, index) => {
            let arrayAmenities = getElementsByType(amenities, item);
            return <Fasilities key={index} title={item} amenites={arrayAmenities}/>
        })
    }

    listHouseRules(houseRuleses) {
        return houseRuleses.map((rule, index) => {
            return <Rules key={index} state={rule.state} text={rule.name}/>
        })
    }

    render() {

        return <div className="container mt-5 flat">
            <Carousel/>
            <Location place={this.props.flat.location.country + ", " + this.props.flat.location.city}/>
            <FlatMenu/>

            <div className="mt-3"><h3>{this.props.flat.name}</h3></div>
            <QuickRent price={this.props.flat.cost}/>

            <div className="row mt-3 justify-content-center">
                <CardInfo img="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-512.png"
                          body="Apartment" title={this.props.flat.size + " sq. ft."}/>
                <CardInfo
                    img="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-52-512.png"
                    body="Bathrooms" title="1"/>
                <CardInfo img="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"
                          body="Bedrooms" title="1"/>
                <CardInfo img="https://cdn4.iconfinder.com/data/icons/silky-icon-user/60/users2-1-128.png"
                          body="Sleeps"
                          title={this.props.flat.accommodates}/>
            </div>

            <Description body={this.props.flat.description}/>

            <div className=" mt-5 pl-0 mb-5">
                <h5>House Rules</h5>
                <div className="row mt-4">
                    <h6 className="col-3 mw-200">Check-in: <small className="text-muted">{}</small></h6>
                    <h6 className="col-3 mw-200">Check-out: <small className="text-muted">{}</small></h6>
                </div>
                <div className=" bg-light ml-0">

                    { this.listHouseRules(this.props.flat.houseRuleses)}

                    <h6 className="col-6 text-muted pb-4 mw-300">Minimum age of primary renter: <small
                        className="h5">18</small></h6>
                </div>
            </div>

            {this.listAmenities(this.props.flat.amentieses)}

            <div className=" mt-5">
                <h4 className="mb-3">Rates & Availability</h4>
                <Calendar locale="en-En"/>
            </div>

            <div className="map_size_m mt-5">
                <h3 className="mb-3">Map</h3>
                <Map/>
                <Location place={"Belarus, Grodno"}/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        flatReducer: state.flatReducer,
        flat: state.flatReducer.selectedFlat
    };
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


export default connect(mapStateToProps)(Flat);
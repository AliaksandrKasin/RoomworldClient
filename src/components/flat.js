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

import scrollToComponent from 'react-scroll-to-component';
import STORE from "../store";
import stateWindow from "../actions/visibleModalWindow";


class Flat extends React.Component {

    constructor(props) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        super(props);
        this.state = {
            flat: {
                location: {
                    country: "",
                    city: ""
                },
                houseRuleses: [],
                amentieses: [],
                images: [],
                orders: [{
                    dateFrom: "",
                    dateTo: ""
                }]
            }
        }
        STORE.dispatch(stateWindow(true));
        this.getFlat(this.props.flatReducer.idSelectedFlat);
    }

    getFlat(id) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/flat', {
                params: {id: id}
            }
        )
            .then((response) => {
                /* STORE.dispatch(selectedFlat(response.data));*/
                this.setState({flat: response.data})
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


    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    showCalendar() {
        if (this.state.flat.name !== undefined) {
            return <Calendar locale="en-En" tileDisabled={({activeStartDate, date, view}) => {
               return this.state.flat.orders.map((order) => {
                    return (date.getTime() >= new Date(order.dateFrom).setHours(0,0,0,0) && date.getTime() <= new Date(order.dateTo).setHours(0,0,0,0));
                }).find((element) => element === true);
            }}/>
        }
    }

    render() {
        return <div className="container mt-5 flat">
            <Carousel images={this.state.flat.images}/>
            <Location place={this.state.flat.location.country + ", " + this.state.flat.location.city}/>
            <FlatMenu
                overview={() => scrollToComponent(this.refs.overview)}
                amenities={() => scrollToComponent(this.refs.amenities)}
                rates={() => scrollToComponent(this.refs.rates)}
                map={() => scrollToComponent(this.refs.map)}
            />

            <div className="mt-3"><h3>{this.state.flat.name}</h3></div>
            <QuickRent price={this.state.flat.cost} dateFrom={this.props.searchParams.dateFrom}
                       dateTo={this.props.searchParams.dateTo} flat={this.state.flat}/>

            <div className="row mt-3 justify-content-center">
                <CardInfo img="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-512.png"
                          body="Apartment" title={this.state.flat.size + " sq. ft."}/>
                <CardInfo
                    img="https://cdn4.iconfinder.com/data/icons/objects-things-essentials-vol-2/48/v-52-512.png"
                    body="Bathrooms" title="1"/>
                <CardInfo img="https://cdn3.iconfinder.com/data/icons/furniture-vector-line-1/128/22-128.png"
                          body="Bedrooms" title="1"/>
                <CardInfo img="https://cdn4.iconfinder.com/data/icons/silky-icon-user/60/users2-1-128.png"
                          body="Sleeps"
                          title={this.state.flat.accommodates}/>
            </div>

            <Description ref="overview" body={this.state.flat.description}/>

            <div ref="houseRules" className="mt-5 pl-0 mb-5">
                <h5>House Rules</h5>
                <div className="row mt-4">
                    <h6 className="col-3 mw-200">Check-in: <small
                        className="text-muted"></small></h6>
                    <h6 className="col-3 mw-200">Check-out: <small
                        className="text-muted"></small></h6>
                </div>
                <div className=" bg-light ml-0">

                    {this.listHouseRules(this.state.flat.houseRuleses)}

                    <h6 className="col-6 text-muted pb-4 mw-300">Minimum age of primary renter: <small
                        className="h5">18</small></h6>
                </div>
            </div>

            <div ref="amenities">
                {this.listAmenities(this.state.flat.amentieses)}
            </div>
            <div ref="rates" className=" mt-5">
                <h4 className="mb-3">Rates & Availability</h4>
                {
                    this.showCalendar()
                }
            </div>

            <div ref="map" className="map_size_m mt-5">
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
        flat: state.flatReducer.idSelectedFlat,
        searchParams: state.flatReducer.searchParams
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
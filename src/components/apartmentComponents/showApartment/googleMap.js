import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as React from "react";
import * as ReactDOM from "react-dom";
import CardApartmentMap from "../collectionApartment/cards/cardApartmentMap";
import HouseMarkerBlue from "../../../image/blue-marker.png"

export class GoogleMapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            idSelectedApartment: -1
        };
        this.infoWindowContent = React.createRef();
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        /*if (this.state.showingInfoWindow && !this.infoWindowContent.current.contains(event.target)) this.setState({showingInfoWindow: false});*/
    }

    onMarkerClick = (props, marker, e, id) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            idSelectedApartment: id
        });
    }

    onInfoWindowOpen = () => {
        let selectedApartment = this.props.apartments.filter((apartment) => apartment.id === this.state.idSelectedApartment)[0];
        let infoWindowContainer = document.getElementById("infoWindowContent");
        (infoWindowContainer) && ReactDOM.render(
            React.Children.only(<CardApartmentMap apartment={selectedApartment}/>),
            infoWindowContainer
        );
    }

    render() {
        const coordinates = [
            {lat: 25.774, lng: -80.190},
        ];
        return <Map google={window.google} zoom={5} initialCenter={this.props.center} gestureHandling='greedy'
                    fullscreenControl={!this.props.btnCloseIsVisible}>
            {
                this.props.apartments.map((apartment, index) => {
                    return <Marker key={index}
                                   onClick={(props, marker, e) => this.onMarkerClick(props, marker, e, apartment.id)}
                                   position={{
                                       lng: apartment.apartmentLocation.coordinates.latitude,
                                       lat: apartment.apartmentLocation.coordinates.longitude
                                   }}
                                   animation={(this.props.hoveredApartment === apartment.id) && window.google.maps.Animation.BOUNCE}
                                   icon={{
                                       url: (this.props.hoveredApartment !== apartment.id) ? "https://cdn0.iconfinder.com/data/icons/map-and-navigation-2-1/48/100-512.png" :
                                           HouseMarkerBlue
                                       ,
                                       anchor: new window.google.maps.Point(20, 40),
                                       scaledSize: new window.google.maps.Size(35, 35)
                                   }}/>
                })
            }
            <Marker position={this.props.center}
                    icon={{
                        url: "https://image.flaticon.com/icons/svg/1476/1476709.svg",
                        anchor: new window.google.maps.Point(15, 30),
                        scaledSize: new window.google.maps.Size(30, 30)
                    }}/>
            <InfoWindow marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onOpen={this.onInfoWindowOpen}
                        onClose={() => this.setState({showingInfoWindow: false})}>
                <div ref={this.infoWindowContent} id="infoWindowContent"/>
            </InfoWindow>
            {
                (this.props.btnCloseIsVisible) &&
                <button className="leaflet-map-btn d-flex align-items-center" onClick={this.props.onClose}>
                    <span>Back</span>
                    <i className="fas fa-angle-right window-close_size_m pl-1"></i>
                </button>
            }
        </Map>
    }
}

export default GoogleApiWrapper({apiKey: ("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY")})(GoogleMapContainer);
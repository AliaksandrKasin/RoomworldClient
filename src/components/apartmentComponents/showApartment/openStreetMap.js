import * as React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {openStreetGeocode} from "../../../services/mapServices/openStreetService";

class OpenStreetMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 53,
            lng: 27,
            zoom: 5
        }
    }

    componentDidMount = () => {
        openStreetGeocode("b").then((response) => {

        }).catch(error => {
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
                <Popup>
                </Popup>
            </Marker>
        </Map>
    }
}

export default OpenStreetMap;
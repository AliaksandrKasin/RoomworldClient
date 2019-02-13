import * as React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {openStreetGeocode} from "../../../services/mapServices/openStreetService";
import {SERVER} from "../../../constants";

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
            {
                (this.props.btnCloseIsVisible) && <button className="leaflet-map-btn d-flex align-items-center" onClick={this.props.onClose}>
                    <span>Back</span>
                    <i className="fas fa-angle-right angle-right_size_m pl-1"></i>
                </button>
            }
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
            <Marker position={position}>
                <Popup>
                    <div>
                        <img src={SERVER + this.props.apartments[0].images[0]}
                             className="card-vertical__image img-fluid"/>
                    </div>
                </Popup>
            </Marker>
        </Map>
    }
}

export default OpenStreetMap;
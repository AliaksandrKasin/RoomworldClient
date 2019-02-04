import * as React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";


class OpenStreetMap extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            lat: 53,
            lng: 27,
            zoom: 5
        }
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

export default OpenStreetMap;
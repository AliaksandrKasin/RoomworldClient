import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({text}) => <div>
    <img className="cursor-pointer" onClick={() => alert("asdasdasa")} className="img_size_4"
         src="https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_2-512.png"/>
    <h6></h6>
</div>;

class Map extends Component {
    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");

        this.state = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15,
        }
    }

    getPlace(place) {
        if (!this.state.center.lat && !this.state.center.lng && place !== ",  ") {
            Geocode.fromAddress(place).then(
                response => {
                    this.setState({center: response.results[0].geometry.location});
                    console.log(response.results[0].geometry.location);
                },
                error => {
                    console.error(error);
                }
            );
        }
    }

    render() {
        this.getPlace(this.props.place);
        return (this.state.center.lat !== 0 && !this.state.center.lng !== 0) ? <div className="map">
            <GoogleMapReact
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                bootstrapURLKeys={{key: "AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY"}}
            >
                <AnyReactComponent
                    lat={this.state.center.lat}
                    lng={this.state.center.lng}
                    text={'Efel Tower'}
                />
            </GoogleMapReact>
        </div> : "";

    }
}

export default Map;
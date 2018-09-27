import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({text}) => <div>
    <img className="button_cursor_pointer" onClick={()=>alert("asdasdasa")} className="img_size_4"
         src="https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_2-512.png"/>
    <h6>{text}</h6>
</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 48.85837009999999,
            lng: 2.2944813
        },
        zoom: 11
    };

    render() {
        Geocode.setApiKey("AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY");
        Geocode.enableDebug();
        Geocode.fromAddress("Eiffel Tower").then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }
        );

        return (
            <div className="map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    bootstrapURLKeys={{key: "AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY"}}
                >
                    <AnyReactComponent
                        lat={48.85837009999999}
                        lng={2.2944813}
                        text={'Efel Tower'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
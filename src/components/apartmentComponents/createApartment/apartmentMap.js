import * as React from "react";
import GoogleMapReact from 'google-map-react';

class ApartmentMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="map">
            <GoogleMapReact
                center={this.props.center}
                zoom={this.props.zoom}
                bootstrapURLKeys={{key: "AIzaSyCNmZiicfeXMG-PG4HQNU4lzX4OB-ci-NY"}}>
                {
                    (this.props.collectionPoint) && this.props.collectionPoint.map((center) => {
                        return <AnyReactComponent lat={center.lat} lng={center.lng}/>
                    })
                }
                <AnyReactComponent lat={this.props.center.lat} lng={this.props.center.lng} text={'Efel Tower'}/>
            </GoogleMapReact>
        </div>
    }
}

const AnyReactComponent = ({text}) => <div>
    <img className="img_size_4 cursor-pointer"
         src="https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_2-512.png"/>
</div>;

export default ApartmentMap;
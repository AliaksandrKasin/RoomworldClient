import * as React from "react";
import ApartmentDetails from "./apartmentDetails";
import ApartmentProgressBar from "./snippet/apartmentProgressBar";
import {Route, Switch} from "react-router-dom";
import ApartmentWelcome from "./apartmentWelcome";
import ApartmentFooter from "./apartmentFooter";
import ApartmentLocation from "./apartmentLocation";
import ApartmentPhotos from "./apartmentPhotos";
import ApartmentRates from "./apartmentRates";
import ApartmentRules from "./rules/apartmentRules";
import ApartmentFinish from "./apartmentFinish";

class ApartmentMain extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        document.body.style.backgroundColor = "#f7f7f8";
    }
    componentWillUnmount = () =>{
        document.body.style.backgroundColor = "#fff";
    }

    render() {
        return <div className="root-container">
            {
                (this.props.history.location.pathname !== "/apartment/welcome") &&
                <div className="container d-flex justify-content-center mb-5 mt-5 position-relative">
                    <ApartmentProgressBar history={this.props.history} path={this.props.history.location.pathname}/>
                </div>
            }
            <Switch>
                <Route path={'/apartment/details'} component={ApartmentDetails}/>
                <Route path={'/apartment/location'} component={ApartmentLocation}/>
                <Route path={'/apartment/photos'} component={ApartmentPhotos}/>
                <Route path={'/apartment/rates'} component={ApartmentRates}/>
                <Route path={'/apartment/rules'} component={ApartmentRules}/>
                <Route path={'/apartment/finish'} component={ApartmentFinish}/>
                <Route path={'/apartment'} component={ApartmentWelcome}/>
            </Switch>
            <ApartmentFooter/>
        </div>
    }
}

export default ApartmentMain;
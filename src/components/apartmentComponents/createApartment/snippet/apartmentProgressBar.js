import * as React from "react";
import ApartmentSnippet from "./apartmentSnippet";

class ApartmentProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.history.location.pathname
        }
        props.history.listen((location, action) => {
            this.setState({active: location.pathname});
        })
    }

    onclick = (path) => {
        this.setState({active: path});
    }

    render() {
        return <div className="flex-nowrap d-flex mb-5">
            <ApartmentSnippet icon="far fa-clipboard p-2" position="start" title="Details" active={this.state.active}
                              history={this.props.history} path="/apartment/details" onclick={this.onclick}/>
            <ApartmentSnippet icon="fas fa-map-marked-alt p-2" title="Location" active={this.state.active}
                              history={this.props.history} path="/apartment/location" onclick={this.onclick}/>
            <ApartmentSnippet icon="far fa-file-image p-2" title="Photos" active={this.state.active}
                              history={this.props.history} path="/apartment/photos" onclick={this.onclick}/>
            <ApartmentSnippet icon="fas fa-hand-holding-usd p-2" title="Rates" active={this.state.active}
                              history={this.props.history} path="/apartment/rates" onclick={this.onclick}/>
            <ApartmentSnippet icon="far fa-edit p-2" title="Wishes" active={this.state.active}
                              history={this.props.history} path="/apartment/rules" onclick={this.onclick}/>
        </div>

    }
}

export default ApartmentProgressBar;
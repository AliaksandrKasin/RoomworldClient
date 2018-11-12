import * as React from "react";
import Snippet from "./snippet";

class ProgressBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: "Welcome"
        }
    }

    onclick = (title) => {
        this.setState({active: title});
        debugger
    }

    render() {
        return <div className="flex-nowrap d-flex mb-5">
            <Snippet icon="fas fa-door-open p-2" title="Welcome" position="start" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="far fa-clipboard p-2" title="Details" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="fas fa-map-marked-alt p-2" title="Location" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="far fa-file-image p-2" title="Photos" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="fas fa-hand-holding-usd p-2" title="Pricing" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="far fa-edit p-2" title="Wishes" active={this.state.active} onclick={this.onclick}/>
            <Snippet icon="far fa-flag p-2" title="Preview" active={this.state.active} onclick={this.onclick}/>
        </div>

    }
}

export default ProgressBar;
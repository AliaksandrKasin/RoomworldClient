import * as React from "react";
import {Fragment} from "react";
import ModalFeedback from "./modalFeedback";
import ButtonFeedback from "./buttonFeedback";

class FeedbackContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        return <Fragment>
            <ModalFeedback open={this.state.isOpen} onClose={() => this.setState({isOpen: false})}/>
            <ButtonFeedback onClick={() => this.setState({isOpen: true})}/>
        </Fragment>
    }
}

export default FeedbackContainer;
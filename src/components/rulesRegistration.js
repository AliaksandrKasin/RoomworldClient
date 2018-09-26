import * as React from "react";
import STORE from "../store";
import deleteRules from "../actions/deleteRule";

class RulesRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgCross: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/close-512.png",
            imgCheckMark: "https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/check-512.png"
        }
    }

    render() {
        return <div className="mt-2 mr-3 mb-4 p-4 border-bottom">
            <div className="row">
                <div className="col-9">
                <img className="img_size_4 mr-5"
                     src={(this.props.state) ? this.state.imgCheckMark : this.state.imgCross}/>
                <small className="text-muted h5">{this.props.text}</small>
                </div>
                <div className="text-right text-info col-3" onClick={()=>STORE.dispatch(deleteRules(this.props.text))}>remove</div>
            </div>
        </div>
    }
}

export default RulesRegistration;
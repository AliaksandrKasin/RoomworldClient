import * as React from "react";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {SERVER} from "../constants/constants";
import STORE from "../store";
import stateWindow from "../actions/visibleModalWindow";

class ModalWindowBook extends React.Component {
    constructor(props) {
        super(props);
        this.bookNow = this.bookNow.bind(this);
    }

    bookNow(){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        debugger
        let a = this.props.dateFrom
        axios.post(SERVER + '/add/order', {
            idFlat: this.props.idFlat,
            dateFrom: new Date(this.props.dateFrom.setDate(this.props.dateFrom.getDate() + 1)),
            dateTo: new Date(this.props.dateTo.setDate(this.props.dateTo.getDate() + 1)),
            price: this.props.totalPrice
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        STORE.dispatch(stateWindow(true));
    }
    render() {
        return <div className="d-flex justify-content-center position-relative">
            <div hidden={this.props.stateWindow} className="modal-container bg-light rounded_10 border">
                <h4 className="text-center mb-5 mt-2">Book now?</h4>
                <div className="d-flex justify-content-center">
                    <button className="btn border bg-white" type="button" onClick={this.bookNow}>Yes</button>
                    <button className="btn ml-3 border bg-white" type="button" onClick={() => STORE.dispatch(stateWindow(true))}>No</button>
                </div>
            </div>
        </div>
    }

}
function mapStateToProps(state) {
    return {
        idFlat: state.flatReducer.idSelectedFlat,
        stateWindow: state.flatReducer.modalWindow
    };
}

export default connect(mapStateToProps)(ModalWindowBook);
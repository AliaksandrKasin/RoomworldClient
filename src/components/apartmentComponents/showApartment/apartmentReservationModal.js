import * as React from "react";
import Modal from "react-responsive-modal";
import {createReservation} from "../../../services/apartmentServices/apartmentService";

class ApartmentReservationModal extends React.Component {

    createReservation = () => {
        if (!this.props.dateNotOrdered) return;
        let params = this.props.reservationParams;
        params.sumPrice = this.dateDiff(this.props.reservationParams.dateTo, this.props.reservationParams.dateFrom) * this.props.apartment.apartmentRates;
        createReservation(params).then(()=>{
            this.props.history.push("/profile/my/booking");
        });
    }

    dateDiff = (date1, date2) => {
        return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    }

    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center
                      classNames={{modal: "w-30 h-35 d-flex justify-content-center align-items-center"}}>
            <div>
                <div className="d-flex justify-content-center mb-5">
                    <h4>Book this flat now?</h4>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn-next" onClick={this.createReservation}>Book now</button>
                </div>
            </div>
        </Modal>
    }
}

export default ApartmentReservationModal;
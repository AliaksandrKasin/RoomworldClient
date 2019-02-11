import * as React from "react";
import Modal from "react-responsive-modal";
import ApartmentFilter from "./apartmentFilter/apartmentFilter";

class FiltersModalApartment extends React.Component {
    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center
                      className="d-flex justify-content-center align-items-center">
                <ApartmentFilter/>
        </Modal>
    }
}

export default FiltersModalApartment;
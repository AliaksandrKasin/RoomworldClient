import * as React from "react";
import connect from "react-redux/es/connect/connect";
import objectToFormData from "object-to-formdata"
import {createApartment} from "../../services/apartmentService";

class ApartmentFinish extends React.Component {

    createApartment = (e) => {
        e.preventDefault();
        let apartment = this.props.apartment;
        let apartmentForm = objectToFormData(apartment);
        apartment.rulesOfResidence.forEach((rule, index) => {
            apartmentForm.append("rulesOfResidence[][" + index + "][nameRule]", rule.nameRule);
            apartmentForm.append("rulesOfResidence[][" + index + "][isAllowed]", rule.isAllowed);
        });
        createApartment(apartmentForm).then(()=>{
            this.props.history.push("/profile/my/flats")
        });
    }

    render() {
        return <form onSubmit={this.createApartment} className="d-flex border container bg-white p-0">
            <div className="w-100 d-flex justify-content-center finish-container">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <button className="btn-next" type='submit'>Save</button>
                </div>
            </div>
        </form>
    }
}

function mapStateToProps(state) {
    return {
        apartment: state.apartmentReducer.apartment
    };
}

export default connect(mapStateToProps)(ApartmentFinish);
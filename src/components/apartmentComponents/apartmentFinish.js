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
        for (let pair of apartmentForm.entries()) {
            console.log(pair);
        }
        createApartment(apartmentForm);
    }

    render() {
        return <form onSubmit={this.createApartment} className="d-flex border container bg-white">
            <div className="text-left col-sm">
                <button className="btn-back button-size-s" type='submit'>Save</button>
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
import * as React from "react";
import FormSelect from "../../baseComponents/formSelect";
import FormInput from "../../baseComponents/formInput";
import {setApartmentRates} from "../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";
import TimeInput from 'material-ui-time-picker'
import moment from "moment";

class ApartmentRates extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: this.props.apartment.currency || "",
            apartmentRates: this.props.apartment.apartmentRates || 1,
            minStay: this.props.apartment.minStay || 1,
            checkInTime: this.props.apartment.checkInTime,
            checkOutTime: this.props.apartment.checkOutTime
        };
    }

    componentDidMount = () => {
        let unsubscribe = this.props.history.listen((location, action) => {
            this.props.setApartmentRates({
                currency: this.state.currency,
                apartmentRates: this.state.apartmentRates,
                minStay: this.state.minStay,
                checkInTime: this.state.checkInTime,
                checkOutTime: this.state.checkOutTime
            });
            unsubscribe();
        });
    }

    onChangeFormValue = (value, name) => {
        this.setState({[name]: value});
    }

    checkInChange = (time) => {
        this.setState({checkInTime: time});
    }

    checkOutChange = (time) => {
        this.setState({checkOutTime: time});
    }

    next = (e) => {
        e.preventDefault();
        this.props.setApartmentRates({
            currency: this.state.currency,
            apartmentRates: this.state.apartmentRates,
            minStay: this.state.minStay,
            checkInTime: this.state.checkInTime,
            checkOutTime: this.state.checkOutTime
        });
        this.props.history.push('/apartment/rules')
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4 className="apartment-title">How much do you want to charge?</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="row m-0 mb-4">
                    <div className="col-sm mt-4 ">
                        <FormSelect placeholder="Currency"
                                    value={this.state.currency}
                                    name="currency"
                                    onChange={this.onChangeFormValue}
                                    options={["US Dollar (USD)", "Euros (EUR)", "Canadian Dollar (CAD)"]}/>
                    </div>
                    <div className="col-sm mt-4 ">
                        <FormInput placeholder="Base Rate" requered={true} type="number" min={1} name="apartmentRates"
                                   onChange={this.onChangeFormValue}
                                   value={this.state.apartmentRates}/>
                    </div>
                </div>

                <div className="row m-0 mb-5">
                    <div className="col-sm mt-4 p-0 ml-3 mr-3">
                        <TimeInput mode='12h' placeholder="Check in time" onChange={(time) => this.checkInChange(time)}
                                   value={moment(this.state.checkInTime).toDate()}
                                   defaultValue={moment(this.state.checkInTime).toDate()}
                                   className="MuiInput-underline"/>
                    </div>
                    <div className="col-sm mt-4 p-0 ml-3 mr-3">
                        <TimeInput mode='12h' placeholder="Check out time"
                                   onChange={(time) => this.checkOutChange(time)}
                                   value={moment(this.state.checkOutTime).toDate()} className="MuiInput-underline"/>
                    </div>
                </div>
                <div className="row m-0 mb-4 mt-4">
                    <div className="col-sm-6">
                        <FormInput placeholder="Minimum stay" required={true} type="number" min={1}
                                   onChange={this.onChangeFormValue}
                                   value={this.state.minStay} name="minStay"/>
                    </div>
                </div>
                <div className="row m-0 flex-nowrap mt-5 mb-5">
                    <div className="text-left col-sm">
                        <button className="btn-back button-size-s" type='button'
                                onClick={() => this.props.history.push('/apartment/photos')}>Back
                        </button>
                    </div>
                    <div className="text-right col-sm">
                        <button className="btn-next button-size-s" type='submit'>Next</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        apartment: state.apartmentReducer.apartment
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setApartmentRates: rates => {
            dispatch(setApartmentRates(rates));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentRates);

import * as React from "react";
import FormInput from "../baseComponents/formInput";
import FormTextArea from "../baseComponents/formTextArea";
import FormSelect from "../baseComponents/formSelect";
import {getTypesApartment} from "../../services/apartmentService";
import connect from "react-redux/es/connect/connect";
import {setApartmentDetails, setApartmentTypes} from "../../actions/apartmentActions/apartmentActions";
import Loading from "../extensionComponents/loading";

class ApartmentDetails extends React.Component {

    constructor(props) {
        super(props);
        this.apartmentDetailsForm = React.createRef();
        this.state = {
            apartmentDetails: {
                headTitle: props.apartment.headTitle || "",
                propertyDescription: props.apartment.propertyDescription || "",
                accommodates: props.apartment.accommodates || 1,
                apartmentSize: props.apartment.apartmentSize || 1,
                amountBathroom: props.apartment.amountBathroom || 1,
                amountBedroom: props.apartment.amountBedroom || 1,
                apartmentType: props.apartment.apartmentTypeString || ""
            },
            apartmentTypes: props.apartmentTypes || [],
        };
    }

    componentDidMount = () => {
        getTypesApartment().then((apartmentTypes) => {
            (this.state.apartmentTypes.length === 0) && this.setState({
                apartmentTypes: apartmentTypes,
                apartmentDetails: Object.assign(this.state.apartmentDetails, {apartmentType: apartmentTypes[0]})
            });
        });
        let unsubscribe = this.props.history.listen((location, action) => {
            this.props.setApartmentDetails(this.state.apartmentDetails);
            this.props.setApartmentTypes(this.state.apartmentTypes);
            unsubscribe();
        });
    }

    onChangeFormValue = (value, name) => {
        this.setState({apartmentDetails: Object.assign(this.state.apartmentDetails, {[name]: value})})
    }

    next = (e) => {
        debugger
        e.preventDefault();
        this.props.setApartmentDetails(this.state.apartmentDetails);
        this.props.setApartmentTypes(this.state.apartmentTypes);
        this.props.history.push('/apartment/location');
    }

    render() {
        return (this.state.apartmentTypes.length === 0) ? <Loading/> :
            <div className="d-flex border container bg-white">
                <form ref={this.apartmentDetailsForm} onSubmit={this.next} className="apartment-container">
                    <div className="mb-4 mt-2 pb-3">
                        <h4 className="apartment-title">Describe your property</h4>
                        <div className="border-bottom w-100 pt-4">
                        </div>
                    </div>
                    <div className="mb-4 mt-4">
                        <FormInput placeholder="Headtitle" minLength={10} maxLength={100}
                                   value={this.state.apartmentDetails.headTitle}
                                   required={true} name="headTitle"
                                   onChange={this.onChangeFormValue}/>
                    </div>
                    <div>
                        <FormTextArea placeholder="Property description" minLength={400} maxLength={100000}
                                      required={true}
                                      value={this.state.apartmentDetails.propertyDescription}
                                      name="propertyDescription" onChange={this.onChangeFormValue}/>
                    </div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormInput placeholder="Accommodates" value={this.state.apartmentDetails.accommodates}
                                       min={1}
                                       type="number" required={true}
                                       name="accommodates" onChange={this.onChangeFormValue}/>
                        </div>
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormInput placeholder="Size" value={this.state.apartmentDetails.apartmentSize} min={1}
                                       type="number" required={true}
                                       name="apartmentSize" onChange={this.onChangeFormValue}/>
                        </div>
                    </div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormInput placeholder="Amount Bathroom" value={this.state.apartmentDetails.amountBathroom}
                                       min={1} type="number" required={true}
                                       name="amountBathroom" onChange={this.onChangeFormValue}/>
                        </div>
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormInput placeholder="Amount Bedroom" value={this.state.apartmentDetails.amountBedroom}
                                       min={1} type="number" required={true}
                                       name="amountBedroom" onChange={this.onChangeFormValue}/>
                        </div>
                    </div>
                    <div className="row m-0 mb-5">
                        <div className="col-sm-6 mt-4 apartment-container-col">
                            {(this.state.apartmentTypes.length !== 0) &&
                            <FormSelect onChange={this.onChangeFormValue}
                                        name="apartmentType"
                                        value={this.state.apartmentDetails.apartmentType}
                                        options={this.state.apartmentTypes}
                                        placeholder="Property type"/>
                            }
                        </div>
                    </div>
                    <div className="border-bottom w-100 mb-5">
                    </div>
                    <div className="row m-0 flex-nowrap mb-5">
                        <div className="text-left col-sm">
                            <button className="btn-back button-size-s" type='button'
                                    onClick={() => this.props.history.push('/apartment')}>Back
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
        apartment: state.apartmentReducer.apartment,
        apartmentTypes: state.apartmentReducer.apartmentTypes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setApartmentDetails: details => {
            dispatch(setApartmentDetails(details));
        },
        setApartmentTypes: types => {
            dispatch(setApartmentTypes(types));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetails);
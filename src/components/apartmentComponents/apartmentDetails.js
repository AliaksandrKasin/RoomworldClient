import * as React from "react";
import FormInput from "../baseComponents/formInput";
import FormTextArea from "../baseComponents/formTextArea";
import FormSelect from "../baseComponents/formSelect";

class ApartmentDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apartmentDetails: {
                headTitle: "",
                propertyDescription: "",
                accommodates: 1,
                apartmentSize: 1,
                amountBathroom: 1,
                amountBedrooms: 1,
                apartmentType: ""
            }
        }
    }

    componentWillUpdate = () => {
        console.log(this.state.apartmentDetails)
    }

    onChangeFormValue = (value, name) => {
        this.setState({apartmentDetails: Object.assign(this.state.apartmentDetails, {[name]: value})})
    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/apartment/location');
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4 className="apartment-title">Describe your property</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="mb-4 mt-4">
                    <FormInput placeholder="Headtitle" minLength={20} maxLength={100}
                               required={true} name="headTitle"
                               onChange={this.onChangeFormValue}/>
                </div>
                <div>
                    <FormTextArea placeholder="Property description" minLength={400} maxLength={100000} required={true}
                                  name="propertyDescription" onChange={this.onChangeFormValue}/>
                </div>
                <div className="row m-0 mb-4">
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Accommodates" value={1} min={1} type="number" required={true}
                                   name="accommodates" onChange={this.onChangeFormValue}/>
                    </div>
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Size" value={1} min={1} type="number" required={true}
                                   name="apartmentSize" onChange={this.onChangeFormValue}/>
                    </div>
                </div>
                <div className="row m-0 mb-4">
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Amount Bathroom" value={1} min={1} type="number" required={true}
                                   name=" amountBathroom" onChange={this.onChangeFormValue}/>
                    </div>
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Amount Bedroom" value={1} min={1} type="number" required={true}
                                   name="amountBedrooms" onChange={this.onChangeFormValue}/>
                    </div>
                </div>
                <div className="row m-0 mb-5">
                    <div className="col-sm-6 mt-4 apartment-container-col">
                        <FormSelect placeholder="Property type"/>
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

export default ApartmentDetails;
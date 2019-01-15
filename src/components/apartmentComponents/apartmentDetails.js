import * as React from "react";
import FormInput from "../baseComponents/formInput";
import FormTextArea from "../baseComponents/formTextArea";
import FormSelect from "../baseComponents/formSelect";

class ApartmentDetails extends React.Component {

    onChangeHeadTitle = (value) => {

    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/apartment/location');
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4>Describe your property</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="mb-4 mt-4">
                    <FormInput placeholder="Headtitle" min={20} max={100} required={true}/>
                </div>
                <div>
                    <FormTextArea placeholder="Property description" minLength={400} max={100000} required={true}/>
                </div>
                <div className="row m-0 mb-4">
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Accommodates" value={1} min={1} type="number" required={true}/>
                    </div>
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Size" value={1} min={1} type="number" required={true}/>
                    </div>
                </div>
                <div className="row m-0 mb-5">
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormSelect placeholder="Property type"/>
                    </div>
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormSelect placeholder="Property type"/>
                    </div>
                </div>
                <div className="border-bottom w-100 mb-5">
                </div>
                <div className="row m-0 flex-nowrap">
                    <div className="text-left col-sm">
                        <button className="btn-back" type='button'
                                onClick={() => this.props.history.push('/apartment')}>Back
                        </button>
                    </div>
                    <div className="text-right col-sm">
                        <button className="btn-next" type='submit'>Next</button>
                    </div>
                </div>
            </form>
        </div>

    }

}

export default ApartmentDetails;
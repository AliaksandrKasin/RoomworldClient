import * as React from "react";
import FormSelect from "../baseComponents/formSelect";
import FormInput from "../baseComponents/formInput";

class ApartmentRates extends React.Component {
    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4 className="apartment-title">How much do you want to charge?</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="row m-0 mb-5">
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormSelect placeholder="Currency"/>
                    </div>
                    <div className="col-sm mt-4 apartment-container-col">
                        <FormInput placeholder="Nightly Base Rate"/>
                    </div>
                </div>

                <div className="mb-4 mt-4">
                    <FormInput placeholder="Minimum stay" required={true}/>
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

export default ApartmentRates;
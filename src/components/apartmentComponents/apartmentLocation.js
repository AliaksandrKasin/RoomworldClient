import * as React from "react";
import FormSelect from "../baseComponents/formSelect";
import FormInput from "../baseComponents/formInput";
import Map from "../map";

class ApartmentLocation extends React.Component {

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/apartment/photos');
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4>Where is your apartment located?</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                    <div className="row m-0 mb-5">
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormSelect placeholder="Country"/>
                        </div>
                        <div className="col-sm mt-4 apartment-container-col">
                            <FormInput placeholder="State"/>
                        </div>
                    </div>

                    <div className="mb-4 mt-4">
                        <FormInput placeholder="City" required={true}/>
                    </div>

                    <div className="mb-4 mt-4">
                        <FormInput placeholder="Street address" required={true}/>
                    </div>
                    <div className="apartment-location-map mb-5">
                        <Map place={"Belarus, Minsk"}/>
                    </div>
                    <div className="row m-0 flex-nowrap">
                        <div className="text-left col-sm">
                            <button className="btn-back" type='button'
                                    onClick={() => this.props.history.push('/apartment/details')}>Back
                            </button>
                        </div>
                        <div className="text-right col-sm">
                            <button className="btn-next" type='submit'>Next</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}

export default ApartmentLocation;
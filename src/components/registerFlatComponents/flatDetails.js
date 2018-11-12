import * as React from "react";
import FormInput from "./formInput";
import FormTextArea from "./formTextArea";

class FlatDetails extends React.Component {

    onChangeHeadTitle = (value) => {

    }

    render() {
        return <div className="d-flex border container bg-white">
            <div className="w-100">
                <div className="p-4 mb-3">
                    <h4 className="pb-3">Describe your property</h4>
                    <div className="border-bottom w-100">
                    </div>
                </div>

                <div className="mb-4">
                    <FormInput placeholder="Headtitle" min={20} max={100}/>
                </div>

                <div>
                    <FormTextArea placeholder="Property description" min={400} max={100000}/>
                </div>

                <div className="row m-0 mb-5">
                    <div className="col-sm-6 mt-4">
                        <FormInput placeholder="Accommodates" value={1} type="number"/>
                    </div>
                    <div className="col-sm-6 mt-4">
                        <FormInput placeholder="Size" value={1} type="number"/>
                    </div>
                </div>
                <div className="border-bottom w-100 mb-3">
                </div>
                <div className="row m-0 mb-3 flex-nowrap">
                    <div className="text-left col-sm">
                        <button className="btn-back" type='button'>Back</button>
                    </div>
                    <div className="text-right col-sm">
                        <button className="btn-next" type='button'>Next</button>
                    </div>
                </div>
            </div>
        </div>

    }

}

export default FlatDetails;
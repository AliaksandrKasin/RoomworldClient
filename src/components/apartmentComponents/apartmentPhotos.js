import * as React from "react";

class ApartmentPhotos extends React.Component {
    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <h4>Add photos of your apartment.</h4>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="photo-container mb-5">

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
            </form>
        </div>
    }
}

export default ApartmentPhotos;
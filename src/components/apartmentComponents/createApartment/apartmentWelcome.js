import * as React from "react";
import ApartmentBlockInfo from "./apatmentBlockInfo";

class ApartmentWelcome extends React.Component {
    render() {
        return <div>
            <div className="h-100 container-apartment-welcome d-flex align-items-end">
                <div className="cover w-100 d-flex justify-content-center">
                    <button className="btn-next" onClick={() => this.props.history.push('/apartment/details')}>Rent
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-center m-5">
                <div className="row m-0 border-bottom d-flex justify-content-center">
                    <div className="w-100 d-flex justify-content-center">
                        <h1 className="mb-4">How it work</h1>
                    </div>
                    <ApartmentBlockInfo title="Open and close your property when you want"
                                        icon="fas fa-lock-open text-info"
                                        text="We give you the freedom to open or close your property on our site whenever you want.
                                               With no lock-in contacts, you're in control of your property."/>
                    <ApartmentBlockInfo title="We don't charge guests"
                                        icon="fas fa-hand-holding-usd text-success"
                                        text="We don't add anything on to the price. Unlike other platforms that usually charge guests,
                                              the price you set is the price we display."/>
                    <ApartmentBlockInfo title="You control your availability"
                                        icon="fas fa-calendar-alt text-warning"
                                        text="Only accept guests during the summer or maybe just weekends, at Booking.com you decide when you want guests."/>
                </div>
            </div>

        </div>
    }
}

export default ApartmentWelcome;
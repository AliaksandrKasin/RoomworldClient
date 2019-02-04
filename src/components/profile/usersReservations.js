import * as React from "react";
import ApartmentSmallCard from "../apartmentComponents/showApartment/apartmentSmallCard";
import {getUserReservations} from "../../services/apartmentService";
import Loading from "../extensionComponents/loading";

class UsersOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            isLoad: false
        }
    }

    componentDidMount = () => {
        getUserReservations().then((reservations) => {
            this.setState({reservations: reservations, isLoad: true});
        })
    }

    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div>
            <div className="row">
                <div className="container container_flex_none container_width_none">
                    <div className="row">
                        {
                            this.state.reservations.map((reservation, index) => {
                                return <ApartmentSmallCard
                                    id={reservation.apartment.id}
                                    key={index}
                                    name={reservation.apartment.headTitle}
                                    image={reservation.apartment.images[0]}
                                    cardText={reservation.apartment.propertyDescription}
                                    cost={reservation.apartment.apartmentRates}
                                    location={reservation.apartment.apartmentLocation.country + ", " + reservation.apartment.apartmentLocation.city}
                                    date={this.formatDate(new Date())}
                                    order={reservation}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UsersOrders;
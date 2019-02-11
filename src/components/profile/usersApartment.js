import * as React from "react";
import ApartmentSmallCard from "../apartmentComponents/showApartment/apartmentSmallCard";
import Loading from "../extensionComponents/loading";
import {getUsersApartment} from "../../services/apartmentServices/apartmentService";
import Link from "../../../node_modules/@material-ui/core/Link/Link";

class UsersApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            isLoad: false
        }
    }

    componentDidMount = () => {
        getUsersApartment().then((apartments) => {
            this.setState({apartments: apartments, isLoad: true});
        });
    }

    render() {
        return (!this.state.isLoad) ? <Loading/> : <div>
            <div className="row">
                <div className="container container_flex_none container_width_none">
                    <div className="row">
                        {
                            this.state.apartments.map((apartment, index) => {
                                return <ApartmentSmallCard
                                    id={apartment.id}
                                    key={index}
                                    name={apartment.headTitle}
                                    image={apartment.images[0]}
                                    cardText={apartment.description}
                                    cost={apartment.apartmentRates}
                                    location={apartment.apartmentLocation.country + ", " + apartment.apartmentLocation.city}
                                    date={new Date()}
                                    orderAmount={(apartment.rulesOfResidence.length) ? apartment.rulesOfResidence.length : 0}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UsersApartment;
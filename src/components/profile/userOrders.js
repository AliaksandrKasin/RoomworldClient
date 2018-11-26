import * as React from "react";
import UsersCardFlat from "../usersCardFlat";
import {IMG_NOT_FOUND, SERVER} from "../../constants/constants";
import axios from "axios";

class UsersOrders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            orders: []
        }

        this.getBooking();
    }

    getBooking() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/user/orders')
            .then((response) => {
                this.setState({
                    orders: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    listFlat() {
        if (this.state.orders.length) {
            return this.state.orders.map((order, index) => {
                return <UsersCardFlat
                    id={order.flat.id}
                    key={index}
                    name={order.flat.name}
                    image={(order.flat.images.length) ? order.flat.images[0].url : IMG_NOT_FOUND}
                    cardText={order.flat.description}
                    cost={order.flat.cost}
                    location={order.flat.location.country + ", " + order.flat.location.city}
                    date={this.formatDate(new Date(order.flat.createdDate))}
                    order = {order}
                />
            })
        }
    }

    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    render() {
        return <div>
            <div className="row ml-3">
                <div className="container container_flex_none container_width_none">
                    <div className="row">
                        {this.listFlat()}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UsersOrders;
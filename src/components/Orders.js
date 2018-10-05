import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";


class Orders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            order: []
        }
        this.getOrder();
    }

    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }


    getOrder = () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.get(SERVER + '/user/flats/orders')
            .then((response) => {
                debugger
                this.setState({order: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        debugger
        let a = this.props.order;
        return <div className="container">
            <div className="container border rounded_10 mb-3 mt-5">
                <h1>Orders for your flats</h1>
            </div>

            <div className="border rounded_10">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name Flat</th>
                        <th scope="col">Email</th>
                        <th scope="col">DateFrom</th>
                        <th scope="col">Date To</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>

                    {(this.state.order !== undefined) ? this.state.order.map((order, index) => {
                        return <tr key={index}>
                            <td className="h6">{order.flat.id}.</td>
                            <td>{order.flat.name}</td>
                            <td className="text-info">{order.user.email}</td>
                            <td>{this.formatDate(new Date(order.dateFrom))}</td>
                            <td>{this.formatDate(new Date(order.dateTo))}</td>
                            <td className="h6">{order.price}$</td>
                        </tr>
                    }) : null}

                    </tbody>
                </table>

            </div>
        </div>
    }

}

export default Orders;
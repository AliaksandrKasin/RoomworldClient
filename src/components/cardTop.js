import * as React from "react";

class CardTop extends React.Component{
    render(){
        return <div className="col-md-2">
            <div className="card mb-1 box-shadow">
                <a href='/flat'><img className="card-img-top"
                                     src="https://odis.homeaway.com/odis/listing/e2a65868-2ef6-42f8-aca7-46d2f771197b.c10.jpg"
                                     alt="Card cap"/></a>

                <div className="card-body">
                    <p className="card-text">Attractive Apartment in Benidorm (6 guests)</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted"><strong
                            className="h5 text-info">10€</strong> per
                            night
                        </small>
                        <a className="text-info">Belarus, Grodno</a>
                        <small className="text-muted">12/11/2018</small>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CardTop;
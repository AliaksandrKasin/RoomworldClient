import * as React from "react";
import CardDetails from "./cardDetails";
import CardImage from "./cardImage";

class CardHorizontalApartment extends React.Component {

    render() {
        return <div className="card-horizontal cursor-pointer w-100 mb-3">
            <div className="card card-hover_shadow">
                <div className="d-flex align-items-end">
                    <div className="position-relative card-horizontal-box-img">
                        <CardImage apartment={this.props.apartment} shortCountryName={this.props.shortCountryName}/>
                    </div>
                    <CardDetails amauntBath={this.props.apartment.amountBathroom}
                                 amountBed={this.props.apartment.amountBedroom}
                                 typeApart={this.props.apartment.apartmentTypeString}
                                 accommodates={this.props.apartment.accommodates}
                                 name={this.props.apartment.headTitle}
                                 cardText={this.props.apartment.propertyDescription}
                                 cost={this.props.apartment.apartmentRates}
                                 id={this.props.apartment.id}/>
                </div>
            </div>
        </div>
    }
}

export default CardHorizontalApartment;
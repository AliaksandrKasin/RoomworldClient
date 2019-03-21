import React from "react";
import CardDetails from "./cardDetails";
import CardImage from "./cardImage";

class CardVerticalApartment extends React.Component {
    render() {
        return <div className="card-vertical cursor-pointer mb-5">
            <div className="card card-hover_shadow">
                <div>
                    <div className="position-relative">
                        <CardImage apartment={this.props.apartment} shortCountryName={this.props.shortCountryName}
                                   type="vertical"/>
                    </div>
                    <CardDetails amauntBath={this.props.apartment.amountBathroom}
                                 amountBed={this.props.apartment.amountBedroom}
                                 typeApart={this.props.apartment.apartmentTypeString}
                                 accommodates={this.props.apartment.accommodates}
                                 name={this.props.apartment.headTitle}
                                 cardText={this.props.apartment.propertyDescription}
                                 cost={this.props.apartment.apartmentRates}
                                 id={this.props.apartment.id}
                                 createdDate={this.props.apartment.createdDate}/>
                </div>
            </div>
        </div>

    }
}

export default CardVerticalApartment;

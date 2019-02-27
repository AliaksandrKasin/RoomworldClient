import React from "react";
import SearchBlock from "./searchBlock";
import OverviewIcons from "./overviewIcons";


class Home extends React.Component {

    render() {
        return <div>
            <div className="search-block-container">
                <div className="search-cover-img"></div>
                <div className="search-cover"></div>
                <SearchBlock history={this.props.history}/>
                <div className="container-icons-overview w-100 position-relative">
                    <div className="search-cover-black"></div>
                    <OverviewIcons img="https://www.thehomelike.com/wp-content/uploads/large-office.png"
                                   strong="45,000+"
                                   span="Apartments"/>

                    <OverviewIcons img="https://www.thehomelike.com/wp-content/uploads/moon.png"
                                   strong="915,000+"
                                   span="Booked night"/>

                    <OverviewIcons img="https://www.thehomelike.com/wp-content/uploads/pin-on-map.png"
                                   strong="400+"
                                   span="Cities"/>

                    <OverviewIcons img="https://www.thehomelike.com/wp-content/uploads/discount-percentage.png"
                                   strong="40%"
                                   span="Cheaper"/>
                </div>
            </div>
            <div className="pl-2 pr-2">
                <div className="d-flex justify-content-center mt-5">
                    <h2 className="h2-underline h2-underline_color_graphite text-center">Find your home away from
                        home</h2>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <p className="main-paragraph text-center">By providing you with the biggest portfolio of furnished
                        apartments in Europe, you get to choose from
                        a wide range of apartments for temporary living that suits you individually. Through our online
                        booking with verified e-signature it’s even possible to book furnished apartments at short
                        notice.</p>
                </div>
            </div>
        </div>
    }
}

export default Home
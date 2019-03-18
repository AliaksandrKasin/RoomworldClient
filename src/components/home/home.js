import React from "react";
import SearchBlock from "./searchBlock";
import OverviewIcons from "./overviewIcons";
import Teaser from "./teaser";
import CitiesTiles from "./citiesTiles";
import Footer from "../home/footer";

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

            <div className="d-flex justify-content-center align-items-center mt-5 mb-5 flex-wrap teaser-block">
                <Teaser img="https://resources.kamernet.nl/content/images/redesign/pages/home/Huur1normal.png"
                        title="Start your search"
                        description="Use the free and extensive filters to narrow your search"/>
                <Teaser img="https://resources.kamernet.nl/content/images/redesign/pages/home/Huur2normal.png"
                        title="Upgrade to premium"
                        description="Respond to favourite rooms, studios and apartments"/>
                <Teaser img="https://resources.kamernet.nl/content/images/redesign/pages/home/Huur3normal.png"
                        title="Find your new home"
                        description="Plan viewings to meet landlords and roommates"/>
            </div>

            <div className="pl-2 pr-2">
                <div className="d-flex justify-content-center mt-5">
                    <h2 className="h2-underline h2-underline_color_graphite text-center">Explore Temporary
                        Accommodation</h2>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <p className="main-paragraph text-center">More comfort, more space, more flexibility but cheaper
                        than a comparable hotel. With a few clicks you can book your second home – to live, work and
                        relax.</p>
                </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
                <CitiesTiles/>
            </div>
            <div className="d-flex justify-content-center align-items-center list-apartment-container mt-5">
                <div className="text-center">
                    <h4 className="mb-4 font-lora">List your property on RoomWorld.com and open your door to
                        rental income</h4>
                    <button className="btn-property font-lora" onClick={() =>  this.props.history.push('/apartment/details')}>List your property</button>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default Home
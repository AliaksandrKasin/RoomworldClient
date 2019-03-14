import React from "react";
import SearchBar from "../apartmentComponents/collectionApartment/searchBar/searchBar";
import TitleCountry from "./titleCountry";

class SearchBlock extends React.Component {
    render() {
        return <div className="search">
            <div className="box-top justify-content-center d-flex align-items-center w-100">
                <div>
                    <h1 className="text-white text-center search-title mb-0">Book apartments online</h1>
                    <div className="d-flex justify-content-center">
                        <TitleCountry timeout={500} speadWrite={200} speadErase={100}/>
                    </div>
                    <div className="row d-flex justify-content-center search-container-max">
                        <SearchBar history={this.props.history} position="center"
                                   onClickApply={this.props.onClickApply}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SearchBlock;
import * as React from "react";

const cities = [
    {name: "Berlin", image: "https://www.thehomelike.com/wp-content/uploads/berlin-1932468_1920-1.jpg"},
    {name: "Cologne", image: "https://www.thehomelike.com/wp-content/uploads/cologne-cathedral-1510209_1920.jpg"},
    {name: "Hamburg", image: "https://www.thehomelike.com/wp-content/uploads/hamburg.jpg"},
    {name: "Munich", image: "https://www.thehomelike.com/wp-content/uploads/munich.jpg"},
    {name: "Dusseldorf", image: "https://www.thehomelike.com/wp-content/uploads/dusseldorf.jpg"},
    {name: "Frankfurt", image: "https://www.thehomelike.com/wp-content/uploads/frankfurt-1.jpg"},
    {name: "London", image: "https://www.thehomelike.com/wp-content/uploads/architecture-1866767_1920.jpg"},
    {name: "Vienna", image: "https://www.thehomelike.com/wp-content/uploads/vienna.jpg"},
    {name: "Zurich", image: "https://www.thehomelike.com/wp-content/uploads/zuerich.jpg"},
];

class CitiesTiles extends React.Component{
    render(){
        return <div className="d-flex align-items-center justify-content-center flex-wrap tiles-container">
            {
                cities.map((city, index) => {
                    return <div key={index} className="position-relative city-tile">
                        <div className="tile-cover"></div>
                        <img className="img-fluid city-tile__image" src={city.image}/>
                        <div className="city-title-box d-flex justify-content-center align-items-center">
                            <h3 className="city-tile__title text-uppercase">{city.name}</h3>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default CitiesTiles;
import * as React from "react";
import {IMG_NOT_FOUND, SERVER} from "../constants/constants";
import UsersCardFlat from "./usersCardFlat";

class UsersFlats extends React.Component {

    listFlat() {
        if (this.props.flats.length) {
            return this.props.flats.map((flat, index) => {
                return <UsersCardFlat
                    id={flat.id}
                    key={index}
                    name={flat.name}
                    image={(flat.images.length) ? flat.images[0].url : IMG_NOT_FOUND}
                    cardText={flat.description}
                    cost={flat.cost}
                    location="Belarus, Grodno"
                    date={this.formatDate(new Date(flat.createdDate))}
                />
            })
        }
    }

    formatDate(date) {
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    render() {
        return <div>
            <div className="row">
                <div className="container container_flex_none container_width_none">
                    <div className="row">
                        {this.listFlat()}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UsersFlats;
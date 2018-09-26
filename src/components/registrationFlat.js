import * as React from "react";
import axios from "axios";
import {SERVER} from "../constants/constants";

class RegistrationFlat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: ""
        }
    }

    onChangeSelectPictures = event => {
        this.setState({picture: event});
        let images = new FormData();
        for (let i = 0; i < event.target.files.length; i++) {
            console.log(event.target.files[i]);
            images.append("File", event.target.files[i])
        }

        let item = {name: "asdaasd", state: true};
        for ( let key in item ) {
            images.append(key, item[key]);
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/add-flat', images, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    render() {
        return <div>
            <input type="file" name="picture" multiple accept="image/*" onChange={this.onChangeSelectPictures}/>
        </div>
    }
}

export default RegistrationFlat;
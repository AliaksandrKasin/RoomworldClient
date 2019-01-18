import * as React from "react";
import axios from "axios";
import {SERVER} from "../../constants/constants";

class ApartmentPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.inputFile = React.createRef();
        this.state = {
            images: []
        }
    }

    onChangeSelectPictures = event => {
        let images = [...event.target.files].concat(this.state.images);
        this.setState({images: images});
    }

    listPictures = (images) => {
        let imagesSrc = [];
        images.map((img) => {
            imagesSrc.push(URL.createObjectURL(img));
        })
        return imagesSrc.map((src, index) => {
            return <div key={index} className="position-relative picture-container">
                <div className="gallery-picture-icon" onClick={() => this.removePicture(index)}>
                    <i className="fas fa-times"></i>
                </div>
                <img src={src} className="img-thumbnail gallery-picture"/>
            </div>
        })
    }

    removePicture = (index) => {
        this.setState({images: [...this.state.images].filter((el, i) => i !== index)});
    }

    next = (e) => {
        this.props.history.push('/apartment/rates')
       /* e.preventDefault();
        let form = new FormData();
        for (let i = 0; i < this.state.images.length; i++) {
            form.append("File", this.state.images[i])
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        axios.post(SERVER + '/upload/images', form, {
            headers: {'Content-Type': 'multipart/form-data'}
        });*/
    }

    render() {
        return <div className="d-flex border container bg-white">
            <form onSubmit={this.next} className="apartment-container">
                <div className="mb-4 mt-2 pb-3">
                    <div className="apartment-title">
                        <h4>Add photos of your apartment.</h4>
                    </div>
                    <div className="border-bottom w-100 pt-4">
                    </div>
                </div>
                <div className="photo-container mb-5">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <button className="button-upload" type="button" onClick={() => this.inputFile.current.click()}>
                            <i className="far fa-images button-upload-icon"></i>
                            <span className="button-upload-title">Choose photos...</span>
                        </button>
                        <input ref={this.inputFile}
                               onChange={this.onChangeSelectPictures}
                               className="apartment-input-files"
                               type="file"
                               name="picture"
                               multiple accept="image/*"/>
                    </div>
                </div>
                <div className="w-100 mb-4 d-flex flex-wrap justify-content-center border-bottom pb-4 pictures-gallery">
                    {this.listPictures(this.state.images)}
                </div>
                <div className="row m-0 flex-nowrap mt-5 mb-5">
                    <div className="text-left col-sm">
                        <button className="btn-back button-size-s" type='button'
                                onClick={() => this.props.history.push('/apartment/location')}>Back
                        </button>
                    </div>
                    <div className="text-right col-sm">
                        <button className="btn-next button-size-s" type='submit'>Next</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

export default ApartmentPhotos;
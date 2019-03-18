import * as React from "react";
import AlertError from "../../alertComponents/alertError";
import {setApartmentImages} from "../../../actions/apartmentActions/apartmentActions";
import connect from "react-redux/es/connect/connect";

class ApartmentPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.inputFile = React.createRef();
        this.state = {
            images: props.apartment.images || [],
            errorMessage: "",
            tooBigSize: []
        };
    }

    componentDidMount = () => {
        let unsubscribe = this.props.history.listen((location, action) => {
            this.props.setApartmentImages(this.state.images);
            unsubscribe();
        });
    }

    onChangeSelectPictures = event => {
        let tooBigSize = this.state.tooBigSize;
        let images = this.state.images;
        [...event.target.files].map(img => {
            let isExistsImage = images.map(el => el.name).indexOf(img.name);
            if (isExistsImage === -1) {
                images.push(img);
                if (img.size / 1024 > 2048) {
                    tooBigSize.push(img.name);
                }
            }
        });

        debugger
        (this.state.images.length > 3) && this.setState({errorMessage: ""});
        this.setState({images: images});
    }

    listPictures = (images) => {
        return images.map((img, index) => {
            return <div key={index} className="position-relative picture-container">
                <div className="gallery-picture-icon" onClick={() => this.removePicture(index)}>
                    <i className="fas fa-times"></i>
                </div>
                {
                    this.state.tooBigSize.indexOf(img.name) !== -1 &&
                    <div className="position-absolute img-alert-box">
                        <i className="fas fa-exclamation-triangle img-alert-box__icon"></i>
                        <h5 className="text-uppercase">Is too large</h5>
                    </div>
                }


                <img src={URL.createObjectURL(img)}
                     className={this.state.tooBigSize.indexOf(img.name) !== -1 ? "img-thumbnail gallery-picture blur" : "img-thumbnail gallery-picture"}/>
            </div>
        })
    }

    removePicture = (index) => {
        this.setState({
            images: [...this.state.images].filter((el, i) => i !== index),
            tooBigSize: [...this.state.tooBigSize].filter((name) => name !== this.state.images[index].name)
        });
    }

    next = (e) => {
        e.preventDefault();
        if (this.state.images.length < 3) {
            this.setState({errorMessage: "Upload 3 or more images!"});
            return;
        }
        if (this.state.tooBigSize.length > 0) {
            this.setState({errorMessage: "Some photos is too large!"});
            return;
        }
        this.props.setApartmentImages(this.state.images);
        this.props.history.push('/apartment/rates');
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
                <AlertError message={this.state.errorMessage}/>
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

function mapStateToProps(state) {
    return {
        apartment: state.apartmentReducer.apartment
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setApartmentImages: images => {
            dispatch(setApartmentImages(images));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentPhotos);
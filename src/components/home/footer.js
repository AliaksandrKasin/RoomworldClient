import * as React from "react";
import SocialButtons from "./socialButtons";

class Footer extends React.Component {
    render() {
        return <div className="d-flex justify-content-center footer-container pt-4">
            <div className="text-white text-center mt-5">
                <div className="d-flex justify-content-center flex-wrap mb-5">
                    <div className="mr-5 text-left footer-item-container">
                        <div className="item-center">
                            <h5 className="text-uppercase font-weight-normal">The company</h5>
                            <ul className="p-0">
                                <li className="footer-item">About Us</li>
                                <li className="footer-item">Job</li>
                                <li className="footer-item">Press</li>
                                <li className="footer-item">Imprint/Privacy policy</li>
                                <li className="footer-item">Terms</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mr-5 ml-4 text-left footer-item-container">
                        <div className="item-center">
                            <h5 className="text-uppercase font-weight-normal">Our services</h5>
                            <ul className="p-0">
                                <li className="footer-item">Temporary Accommodation</li>
                                <li className="footer-item">For Businesses</li>
                                <li className="footer-item">Insurance</li>
                                <li className="footer-item">Magazine</li>
                                <li className="footer-item">FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ml-3 footer-item-container">
                        <div className="">
                            <h5 className="text-uppercase font-weight-normal">Payment methods</h5>
                            <div className="d-flex mt-4 d-flex justify-content-center">
                                <img src="https://www.thehomelike.com/wp-content/uploads/Visa.png"/>
                                <img className="ml-2"
                                     src="https://www.thehomelike.com/wp-content/uploads/MasterCard.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialButtons/>
                <div className="text-center mb-5 mt-4 text-white">
                    <h5 className="font-lora">RoomWorld.com by Kasin Alexander</h5>
                    <small className="d-block">Find a home away from home.</small>
                    <small className="d-block">Copyright © 2019.</small>
                </div>
            </div>
        </div>
    }
}

export default Footer;

import * as React from "react";
import {Fragment} from "react";

class SocialButtons extends React.Component {
    render() {
        return <Fragment>
            <h4 className="text-uppercase font-weight-normal social-buttons-title">FOLLOW US ON</h4>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img className="social-icon"
                         src="https://www.thehomelike.com/wp-content/uploads/icon_facebook_color.svg"/>
                </div>
                <div>
                    <img className="social-icon"
                         src="https://www.thehomelike.com/wp-content/uploads/icon_LinkedIn_color.svg"/>
                </div>
                <div>
                    <img className="social-icon"
                         src="https://www.thehomelike.com/wp-content/uploads/icon_google_color.svg"/>
                </div>
                <div>
                    <img className="social-icon"
                         src="https://www.thehomelike.com/wp-content/uploads/icon_XING_color.svg"/>
                </div>
                <div>
                    <img className="social-icon"
                         src="https://www.thehomelike.com/wp-content/uploads/icon_twitter_color.svg"/>
                </div>
            </div>
        </Fragment>
    }
}

export default SocialButtons;
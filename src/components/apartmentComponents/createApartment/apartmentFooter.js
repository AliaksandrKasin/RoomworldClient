import * as React from "react";

class ApartmentFooter extends React.Component {
    render() {
        return <div className="apartment-footer d-flex justify-content-center align-items-center">
            <div>
                {/*<span className="d-block text-muted">Use of this Web site constitutes acceptance of the RoomWorld.com
                    <span className="text-info"> Terms and conditions </span>and
                    <span className="text-info"> Privacy policy</span>.</span>*/}
                <span className="d-block text-muted text-center">©{new Date().getUTCFullYear()} RoomWorld Inc. All rights reserved</span>
            </div>
        </div>
    }
}

export default ApartmentFooter;
import React from "react";

class CardFlat extends React.Component {
    render() {
        return <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-header bg-white h4">Name</div>
                <img className="card-img-top"
                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1658f9fd45d%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1658f9fd45d%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

                     alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a little bit
                        longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted"><strong className="h5 text-info">30€</strong> per
                            night
                        </small>
                        <a className="lin text-info">Belarus, Grodno</a>
                        <small className="text-muted">31.08.2018</small>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default CardFlat
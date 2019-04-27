import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import logo from "../../img/thelevelup.png";
import { Link } from "react-router-dom";

export class ViewProfile extends React.Component {
	render() {
		return (
			<div className="card container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
				<span className="font-weight-bold text-success mx-auto">
					MATT DAMON
				</span>
				<div className="btn-group-vertical m-3">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/98/Child_young_face_close_up.jpg"
						className="img-thumbnail justify-content-centered"
						style={{ width: "200rem" }}
					/>
				</div>
				<span className="font-weight-bold text-success mx-auto">
					1st Grade
				</span>
				<span className="font-weight-bold text-success mx-auto">
					Native Language: Portuguese
				</span>
				<div>
					<spam className="font-weight-bold text-success">
						ACADEMICS
					</spam>
					<div className="progress mb-1">
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-success"
							role="progressbar"
							style={{ width: "25%" }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
				<div>
					<spam className="font-weight-bold text-warning">
						CULTURAL
					</spam>
					<div className="progress mb-1">
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
							role="progressbar"
							style={{ width: "70%" }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
				<div>
					<spam className="font-weight-bold text-danger">
						EMOTIONAL
					</spam>
					<div className="progress mb-1">
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
							role="progressbar"
							style={{ width: "50%" }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
			</div>
		);
	}
}

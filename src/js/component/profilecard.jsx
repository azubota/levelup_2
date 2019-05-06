import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ProfileCard extends React.Component {
	render() {
		return (
			<div>
				<div className="card container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
					<div className="btn-group-vertical m-3">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/9/98/Child_young_face_close_up.jpg"
							className="img-thumbnail justify-content-centered"
							style={{ width: "200rem" }}
						/>
						<Link
							to="/profile"
							className="text-decoration-none btn-block mx-auto">
							<button
								type="submit"
								className="btn btn-outline-success btn-block mt-2">
								MY PROFILE
							</button>
						</Link>
					</div>
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
			</div>
		);
	}
}

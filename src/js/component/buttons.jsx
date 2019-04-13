import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Buttons extends React.Component {
	render() {
		return (
			<div className="card container border border-success mt-2 mb-2 p-3 rounded signin bg-light">
				<div className="btn-group-vertical">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/98/Child_young_face_close_up.jpg"
						className="img-thumbnail justify-content-centered"
						width="200rem"
					/>
					<Link to="/profile" className="text-decoration-none">
						<button
							type="submit"
							className="btn btn-outline-success btn-block mt-2">
							My Profile
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

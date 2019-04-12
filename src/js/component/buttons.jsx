import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

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
					<button
						type="button"
						className="btn btn-outline-success btn-block mt-2">
						My profile
					</button>
				</div>
			</div>
		);
	}
}

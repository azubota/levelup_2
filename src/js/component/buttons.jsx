import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class Buttons extends React.Component {
	render() {
		return (
			<div className="card container border border-success mt-2 mb-2 p-5 rounded signin bg-light">
				<div className="btn-group-vertical">
					<button
						type="submit"
						className="btn btn-outline-success btn-block mt-2">
						Lessons
					</button>
					<button type="button" className="btn btn-success">
						Contact us
					</button>
					<button type="button" className="btn btn-success">
						My profile
					</button>
				</div>
			</div>
		);
	}
}

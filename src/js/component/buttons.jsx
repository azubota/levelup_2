import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Buttons extends React.Component {
	render() {
		return (
			<div>
				<div className="card container border border-success mt-2 mb-2 p-3 rounded signin bg-white">
					<h5 className="mx-auto text-success">{this.props.title}</h5>
					<div className="btn-group-vertical m-3">
						<img
							src={this.props.src}
							className="img-thumbnail justify-content-centered"
							style={{ width: "200rem" }}
						/>
						<div
							className="btn-group-vertical mx-auto btn-block"
							role="group"
							aria-label="Basic example">
							<Link
								to="/lessonlist"
								className="text-decoration-none m-1 btn-block">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									CULTURAL LESSONS
								</button>
							</Link>
							<Link
								to="/lessonlist"
								className="text-decoration-none btn-block m-1">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									ACADEMIC LESSONS
								</button>
							</Link>
							<Link
								to="/profile"
								className="text-decoration-none btn-block m-1">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									My Profile
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Buttons.propTypes = {
	src: PropTypes.src,
	title: PropTypes.string
};

import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class CulturalLesson extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: 0
		};
	}
	render() {
		return (
			<div
				className="card container border border-success mt-2 mb-2 p-2 rounded signin bg-light"
				width="18rem">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						className="embed-responsive-item"
						src={this.props.video}
						allowFullScreen
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.content}</p>
				</div>
				<Link to={this.props.next} className="text-decoration-none">
					<button className="btn btn-success btn-block">Next</button>
				</Link>
			</div>
		);
	}
}

CulturalLesson.propTypes = {
	image: PropTypes.any,
	content: PropTypes.string,
	title: PropTypes.string,
	video: PropTypes.any,
	next: PropTypes.any
};

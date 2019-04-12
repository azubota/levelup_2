import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class LessonComponent extends React.Component {
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
				<h4 className="text-center font-weight-bold card-text">
					{this.props.question}
				</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<button
							type="submit"
							className="btn btn-outline-success btn-block mt-2">
							{this.props.quizoption1}
						</button>
					</li>
					<li className="list-group-item">
						<button
							type="submit"
							className="btn btn-outline-success btn-block mt-2">
							{this.props.quizoption2}
						</button>
					</li>
					<li className="list-group-item">
						<button
							type="submit"
							className="btn btn-outline-success btn-block mt-2">
							{this.props.quizoption3}
						</button>
					</li>
				</ul>
				<Link to={this.props.next}>
					<button className="btn btn-success">Next</button>
				</Link>
			</div>
		);
	}
}

LessonComponent.propTypes = {
	quizoption1: PropTypes.string,
	quizoption2: PropTypes.string,
	quizoption3: PropTypes.string,
	image: PropTypes.any,
	content: PropTypes.string,
	title: PropTypes.string,
	question: PropTypes.strings,
	video: PropTypes.any,
	next: PropTypes.any
};

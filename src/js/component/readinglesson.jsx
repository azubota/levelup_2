import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class ReadingLesson extends React.Component {
	render() {
		return (
			<div
				className="card border-success mb-3"
				style={{ maxWidth: "18rem" }}>
				<div className="card-header text-success">{this.props.kind}</div>
				<div className="card-body text-success">
					<img src={this.props.src} className="img-thumbnail" />
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.content}</p>
				</div>
			</div>
		);
	}
}

ReadingLesson.propTypes = {
	kind: PropTypes.string,
	src: PropTypes.any,
	content: PropTypes.string,
	title: PropTypes.string
};

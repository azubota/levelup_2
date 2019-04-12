import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class LessonCard extends React.Component {
	render() {
		return (
			<div
				className="card border-success m-3 mx-auto my-auto"
				Width="18rem">
				<div className="card-header">{this.props.kind}</div>
				<div className="card-body text-success">
					<img src={this.props.src} className="img-thumbnail" />
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.content}</p>
					<Link to={"/lesson/" + this.props.idx}>
						<button className="btn btn-success">
							Start Lesson
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

LessonCard.propTypes = {
	kind: PropTypes.string,
	src: PropTypes.any,
	content: PropTypes.string,
	title: PropTypes.string,
	lessonClick: PropTypes.function,
	idx: PropTypes.integer
};

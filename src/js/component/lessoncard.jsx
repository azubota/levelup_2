import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class LessonCard extends React.Component {
	render() {
		return (
			<div
				className="card border-success m-1 mx-auto my-auto"
				Width="100rem">
				<div className="card-header bg-success text-light">
					{this.props.kind}
				</div>
				<div className="card-body text-success">
					<img
						src={this.props.src}
						className="img-thumbnail"
						width="70rem"
					/>
					<h6 className="card-title">{this.props.title}</h6>
					<Link to={"/lesson/" + this.props.idx}>
						<button className="btn btn-success">Start</button>
					</Link>
				</div>
			</div>
		);
	}
}

LessonCard.propTypes = {
	kind: PropTypes.string,
	src: PropTypes.any,
	title: PropTypes.string,
	lessonClick: PropTypes.function,
	idx: PropTypes.integer
};

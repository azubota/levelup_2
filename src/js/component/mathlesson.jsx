import React from "react";

//include images into your bundle
import PropTypes from ".prop-types";
import logo from "../../img/logo.png";

//create your first component
export default class Mathlesson extends React.Component {
	render() {
		return (
	<div className="main text-center">
				<div className="text-secondary mb-5">
					<img
						className="rounded-circle py-0"
						src={this.props.src}
						alt="Card image cap"
					/>
					<div className="card-body py-0">
						<h2 className="card-header">{this.props.title}</h2>
						<p className="card-text pb-3">{this.props.content}</p>
					</div>
					<a
						href="#"
						className="btn btn-secondary .btn-outline-light">
						<div>View details {">"}</div>
					</a>
				</div>
			</div>
		);
	}
}

Mathlesson.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	content: PropTypes.string
};


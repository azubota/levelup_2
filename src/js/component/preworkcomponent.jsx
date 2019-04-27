import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class PreWorkComponent extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
					<div className="col-md-5">
						<h3>
							My Family <span className="badge badge-secondary" />
						</h3>
					</div>
					<div className="list-group">
						<a
							href="#"
							className="list-group-item list-group-item-action list-group-item-primary">
							Mom
						</a>
						<a
							href="#"
							className="list-group-item list-group-item-action list-group-item-primary">
							Dad
						</a>
						<a
							href="#"
							className="list-group-item list-group-item-action list-group-item-primary">
							Sister
						</a>
						<a
							href="#"
							className="list-group-item list-group-item-action list-group-item-primary">
							Brother
						</a>
					</div>
				</div>
			</div>
		);
	}
}

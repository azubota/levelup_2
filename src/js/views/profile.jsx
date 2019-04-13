import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { ViewProfile } from "../component/viewProfile.jsx";

export class Profile extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<img
						src="https://ucarecdn.com/9d18909b-8d59-48cc-a607-27fe19893bf8/nene.png"
						className="img-fluid"
					/>
				</div>
				<div className="col-6 justify-content-around flex-row text-center">
					<div>
						<h1 className="card-title text-center">Profile</h1>
						<ViewProfile />
					</div>
				</div>
				<div className="col-3" />
			</div>
		);
	}
}

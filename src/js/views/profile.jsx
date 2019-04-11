import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { ViewProfile } from "../component/viewProfile.jsx";

export class Profile extends React.Component {
	render() {
		return (
			<div>
				<h1 className="card-title text-center">Profile</h1>
				<ViewProfile />
			</div>
		);
	}
}

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { EditProfile } from "../component/editProfile.jsx";

export class Edit extends React.Component {
	render() {
		return (
			<div>
				<h1 className="card-title text-center"> Edit Profile</h1>

				<EditProfile />
			</div>
		);
	}
}

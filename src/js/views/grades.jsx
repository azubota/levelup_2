import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { SeeGrades } from "../component/seeGrades.jsx";

export class Grades extends React.Component {
	render() {
		return (
			<div>
				<h1 className="card-title">Your Grades</h1>
				<SeeGrades />
			</div>
		);
	}
}

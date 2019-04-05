import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { MathLesson } from "../component/mathLesson.jsx";
import { ReadingLesson } from "../component/readingLesson.jsx";

export class Lesson extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-3" />
					<div className="col-6">
						<div className="container-fluid">
							<h1 className="card-title">Reading Lessons</h1>
							<ReadingLesson />
							<h1 className="card-title">Math Lessons</h1>
							<MathLesson />
						</div>
					</div>
					<div className="col-3" />
				</div>
			</div>
		);
	}
}

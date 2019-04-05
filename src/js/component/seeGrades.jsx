import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import logo from "../../img/thelevelup.png";

export class SeeGrades extends React.Component {
	render() {
		return (
			<div>
				<div className="container border border-success mt-2 mb-2 p-2 rounded bg-light">
					<div className="card-body">
						<h5 className="card-title">See your grade here!</h5>
						<p className="card-text">
							Click beloew to see your grades for each lesson that
							you have sompleted.
						</p>
						<a href="#" className="card-link">
							See Grades
						</a>
						<a href="#" className="card-link">
							Another link
						</a>
					</div>
				</div>
			</div>
		);
	}
}

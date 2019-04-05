import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import logo from "../../img/thelevelup.png";
import { Link } from "react-router-dom";
//create your first component
export class MathLesson extends React.Component {
	render() {
		return (
			<div>
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Math Lesson 1</h5>
							<p className="card-text">
								Adding and subtracting within 10
							</p>
							<a href="#" className="btn btn-primary">
								Math Lesson 1
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Math Lesson 2</h5>
							<p className="card-text">
								Adding and subtracting within 20
							</p>
							<a href="#" className="btn btn-primary">
								Math Lesson 1
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Math Lesson 3</h5>
							<p className="card-text">Adding tens and ones</p>
							<a href="#" className="btn btn-primary">
								Math Lesson 1
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

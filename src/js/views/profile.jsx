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
				<div className="col-6 ">
					<ViewProfile />
				</div>
				<div className="col-3">
					<div className="card container border border-success mt-2 mb-2 p-3 rounded signin bg-white">
						<div
							className="btn-group-vertical mx-auto btn-block"
							role="group"
							aria-label="Basic example">
							<Link
								to="/lessonlistcultural"
								className="text-decoration-none m-1 btn-block">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									CULTURAL LESSONS
								</button>
							</Link>
							<Link
								to="/lessonlist"
								className="text-decoration-none btn-block m-1">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									ACADEMIC LESSONS
								</button>
							</Link>
							<Link
								to="/userprofile"
								className="text-decoration-none btn-block m-1">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									EDIT PROFILE
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

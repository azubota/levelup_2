import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";
import ProfileCard from "../component/profilecard.jsx";

export class TheHomePage extends React.Component {
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
					<div>
						<div className="card container border border-success mt-2 mb-2 p-3 rounded signin bg-white">
							<div className="btn-group-vertical m-3">
								<div
									className="btn-group-vertical mx-auto btn-block"
									role="group"
									aria-label="Basic example">
									<Link
										to="/lessonlistcultural"
										className="text-decoration-none m-1 btn-block">
										<button
											type="submit"
											className="btn btn-success btn-block mt-2">
											CULTURAL LESSONS
										</button>
									</Link>
									<Link
										to="/lessonlist"
										className="text-decoration-none btn-block m-1">
										<button
											type="submit"
											className="btn btn-success btn-block mt-2">
											ACADEMIC LESSONS
										</button>
									</Link>
									<Link
										to="/translate"
										className="text-decoration-none btn-block m-1">
										<button
											type="submit"
											className="btn btn-success btn-block mt-2">
											PARENT TOOLS
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<ProfileCard />
				</div>
			</div>
		);
	}
}

TheHomePage.propTypes = {
	match: PropTypes.object
};

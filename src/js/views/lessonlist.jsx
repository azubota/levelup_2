import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import LessonCard from "../component/lessoncard.jsx";
import ProfileCard from "../component/profilecard.jsx";

import "../../styles/demo.css";
import PropTypes from "prop-types";

export class LessonList extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<div>
						<div className="card container border border-success mt-2 mb-2 p-3 rounded signin bg-white">
							<div className="btn-group-vertical m-3">
								<div
									className="btn-group-vertical mx-auto btn-block"
									role="group"
									aria-label="Basic example">
									<Link
										to="/thehomepage"
										className="text-decoration-none m-1 btn-block">
										<button
											type="submit"
											className="btn btn-success btn-block mt-2">
											HOME
										</button>
									</Link>
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
				<div className="col-6 justify-content-around flex-row text-center">
					<div className="row ">
						<Context.Consumer>
							{({ store }) => {
								return store.lessons.map((item, index) => {
									return (
										<div key={index} className="col-3">
											<LessonCard
												src={item.image}
												title={item.title}
												kind={item.kind}
												idx={item.id}
											/>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="col-3">
					<ProfileCard />
				</div>
			</div>
		);
	}
}

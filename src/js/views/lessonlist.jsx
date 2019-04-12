import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import LessonCard from "../component/lessoncard.jsx";
import Buttons from "../component/buttons.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";

export class LessonList extends React.Component {
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
					<div className="row ">
						<Context.Consumer>
							{({ store }) => {
								return store.lessons.map((item, index) => {
									return (
										<div key={index} className="col-3">
											<LessonCard
												src={item.image}
												content={item.content}
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
					<Buttons />
				</div>
			</div>
		);
	}
}

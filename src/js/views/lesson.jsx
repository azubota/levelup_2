import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";
import LessonComponent from "../component/lessoncomponent.jsx";
import ProfileCard from "../component/profilecard.jsx";
import Buttons from "../component/buttons.jsx";

export class Lesson extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<ProfileCard />
				</div>
				<div className="col-6 ">
					<Context.Consumer>
						{({ actions, store }) => {
							return store.lessons
								.filter((item, index) => {
									if (
										item.id ===
										parseInt(this.props.match.params.theid)
									)
										return item;
								})
								.map(it => {
									return (
										<LessonComponent
											key={it.index}
											src={it.image}
											content={it.content}
											title={it.title}
											kind={it.kind}
											quizoption1={it.quizoption1}
											quizoption2={it.quizoption2}
											quizoption3={it.quizoption3}
											question={it.question}
											video={it.video}
											next={it.next}
										/>
									);
								});
						}}
					</Context.Consumer>
				</div>
				<div className="col-3">
					<Context.Consumer>
						{({ actions, store }) => {
							return store.culturallessons
								.filter((item, index) => {
									if (
										item.id ===
										parseInt(this.props.match.params.theid)
									)
										return item;
								})
								.map(it => {
									return (
										<Buttons
											key={it.index}
											src={it.image}
											title={it.title}
										/>
									);
								});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Lesson.propTypes = {
	match: PropTypes.object
};

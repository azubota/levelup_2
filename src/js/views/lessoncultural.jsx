import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";
import CulturalLesson from "../component/culturallesson.jsx";
import ProfileCard from "../component/profilecard.jsx";
import Buttons from "../component/buttons.jsx";

export class LessonCultural extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<ProfileCard />
				</div>
				<div className="col-6 ">
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
										<CulturalLesson
											key={it.index}
											src={it.image}
											content={it.content}
											title={it.title}
											kind={it.kind}
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

LessonCultural.propTypes = {
	match: PropTypes.object
};

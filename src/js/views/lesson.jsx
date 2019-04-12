import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";
import LessonComponent from "../component/lessoncomponent.jsx";

export class Lesson extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<img
						src="https://previews.dropbox.com/p/thumb/AAagsQlY6sefsQ65D9sCHh3yhaxOeCejXKvLlvdS9lpCJmwGmDxZVkGdgUMpoG2YU__HFLH_WuirSQUoXKCSLXmvlt3QXZlQLStXx5WhDBMFnLnnR0R_3MbdfzYn5XTUDwVOSztL9lpjkBd-X36wvC_nq42S8lA68hCI0JZb2R405nS-8ifSzFPXDjSZrds-1Dzdr-an_pa2U9IapgFL4yaMdHWqBwNFxsAXUIJMTjLBnn9qdjLo9vzm7zXD-Q3CLBDCrY9jdtJjwnaviaxhyDhoQWV2Zi6jdUHJ-NxCXQ_OONsB0yhf0dnU7doHQaNYnnvLT09RSUO5I2GxyM5EkOwX/p.png?size_mode=5"
						className="img-fluid"
					/>
				</div>
				<div className="col-6 m-2 p-2">
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
				<div className="col-3" />
			</div>
		);
	}
}

Lesson.propTypes = {
	match: PropTypes.object
};

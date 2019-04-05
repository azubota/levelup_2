import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";
import PropTypes from "prop-types";
import ReadingLesson from "../component/readinglesson.jsx";

export class Lesson extends React.Component {
	render() {
		return (
<<<<<<< HEAD
			<div className="container">
				<div className="margin -auto">
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
=======
			<div className="row">
				<div className="col-3">
					<img
						src="https://previews.dropbox.com/p/thumb/AAagsQlY6sefsQ65D9sCHh3yhaxOeCejXKvLlvdS9lpCJmwGmDxZVkGdgUMpoG2YU__HFLH_WuirSQUoXKCSLXmvlt3QXZlQLStXx5WhDBMFnLnnR0R_3MbdfzYn5XTUDwVOSztL9lpjkBd-X36wvC_nq42S8lA68hCI0JZb2R405nS-8ifSzFPXDjSZrds-1Dzdr-an_pa2U9IapgFL4yaMdHWqBwNFxsAXUIJMTjLBnn9qdjLo9vzm7zXD-Q3CLBDCrY9jdtJjwnaviaxhyDhoQWV2Zi6jdUHJ-NxCXQ_OONsB0yhf0dnU7doHQaNYnnvLT09RSUO5I2GxyM5EkOwX/p.png?size_mode=5"
						className="img-fluid"
					/>
				</div>
				<div className="col-6 m-2 p-2">
					<Context.Consumer>
						{({ store }) => {
							return store.lessons.map((item, index) => {
								return (
									<ReadingLesson
										key={index}
										src={item.image}
										content={item.content}
										title={item.title}
										kind={item.kind}
									/>
								);
							});
						}}
					</Context.Consumer>
>>>>>>> e9db4a965aceaf6b0f9c2dbd57c60dd07653459b
				</div>
				<div className="col-3" />
			</div>
		);
	}
}

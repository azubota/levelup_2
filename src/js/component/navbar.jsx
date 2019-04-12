import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="kids">
				<div className="container">
					<div className="row">
						<div className="col-sm" />
						<div className="col-sm text-wrap">
							<nav className="navbar navbar-light justify-content-center">
								<a className="navbar-brand" href="#">
									<img
										src="https://ucarecdn.com/3bae77be-5248-4a06-b66d-96c20a2819fb/leveluplogo2.png"
										width="150rem"
									/>
								</a>
							</nav>
						</div>
						<div className="col-sm" />
					</div>
				</div>
			</div>
		);
	}
}

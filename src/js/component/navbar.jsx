import React from "react";
import { Link } from "react-router-dom";
import thelevelup from "../../img/thelevelup.png";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="kids">
				<div className="container">
					<div className="row">
						<div className="col-sm" />
						<div className="col-sm">
							<nav className="navbar navbar-light justify-content-center">
								<a className="navbar-brand" href="#">
									<h1 className="text-success font-weight-bolder">
										LEVEL UP
									</h1>
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

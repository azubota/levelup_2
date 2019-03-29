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
							<nav className="navbar navbar-light bg-success rounded-circle justify-content-center">
								<a className="navbar-brand" href="#">
									<img src={thelevelup} />
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

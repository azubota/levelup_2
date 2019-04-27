import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
	render() {
		return (
			<div>
				<ul className="nav justify-content-center btn-success rounded">
					<li className="nav-item">
						<Link to="/contact" className="text-decoration-none">
							<a className="nav-link active text-white" href="#">
								Contact Us
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Career info
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link disabled text-white"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Our Story
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

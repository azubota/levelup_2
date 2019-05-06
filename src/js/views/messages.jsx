import React from "react";
import { Link } from "react-router-dom";

export class Message extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
					<div className="col-md-5">
						<div className="card">
							<h5 className="card-header">Send Message</h5>
							<input
								className="form-control"
								type="text"
								placeholder="Send your future student a message"
							/>
							<div className="card-body">
								<h5 className="card-title" />
								<Link to="/teacher">
									<a href="#" className="btn btn-primary">
										Send
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

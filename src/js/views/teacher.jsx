import React from "react";
import { Link } from "react-router-dom";

export class Teach extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-3" />
					<div className="col-sm-6">
						<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
							<div className="card text-center">
								<div className="card-header" />
								<div className="card-body">
									<h1 className="card-title">
										Teachers Corner
									</h1>{" "}
								</div>
								<div className="card-footer text-muted" />
							</div>
							<div className="card-deck">
								<div className="card">
									<h1
										className="card-img-top"
										src="..."
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">Pre-work</h5>
										<Link to="/prework">
											<button
												type="submit"
												className="btn btn-outline-success btn-block mt-2">
												Start
											</button>
										</Link>
									</div>
								</div>
								<div className="card">
									<h1
										className="card-img-top"
										src="..."
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">
											Communication
										</h5>
										<Link to="/messages">
											<button
												type="submit"
												className="btn btn-outline-success btn-block mt-2">
												Message Me
											</button>
										</Link>
									</div>
								</div>
								<div className="card">
									<h1
										className="card-img-top"
										src="..."
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">Grades</h5>
										<Link to="/demo">
											<button
												type="submit"
												className="btn btn-outline-success btn-block mt-2">
												Gradebook
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-3" />
				</div>
			</div>
		);
	}
}

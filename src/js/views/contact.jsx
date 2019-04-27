import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Contact extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<img
						src="https://ucarecdn.com/c968e6aa-8529-42e6-aa6b-b850da48e9c2/girl.png"
						width="250rem"
						className="ml-5"
					/>
				</div>
				<div className="col-6">
					<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-white">
						<div className="container contact-form">
							<form method="post">
								<h3 className="text-success">
									Drop Us a Message
								</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group border border-success">
											<input
												type="text"
												className="form-control"
												placeholder="Your Name *"
											/>
										</div>
										<div className="form-group border border-success">
											<input
												type="text"
												className="form-control"
												placeholder="Your Email *"
											/>
										</div>
										<div className="form-group border border-success">
											<input
												type="text"
												className="form-control"
												placeholder="Your Phone Number *"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group border border-success">
											<textarea
												name="txtMsg"
												className="form-control"
												placeholder="Your Message *"
												height="150px"
											/>
										</div>
										<div className="form-group border-success">
											<input
												type="submit"
												className="btn btn-success btn-block"
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col" />
			</div>
		);
	}
}

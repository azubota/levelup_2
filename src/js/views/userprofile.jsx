import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { ViewProfile } from "../component/viewProfile.jsx";

export class UserProfile extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3" />
				<div className="col-6">
					<div className="container border border-success mt-4 mb-4 p-3 rounded signin bg-white text-success">
						<div className="container bootstrap snippet">
							<div className="row">
								<div className="col-sm-10">
									<h1>User name</h1>
								</div>
								<div className="col-sm-2">
									<a href="/users" className="pull-right" />
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<div className="text-center">
										<img
											src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
											className="avatar img-circle img-thumbnail"
											alt="avatar"
										/>
										<h6>Upload a different photo...</h6>
										<input
											type="file"
											className="text-center center-block file-upload"
										/>
									</div>

									<div>
										<spam className="font-weight-bold text-success">
											ACADEMICS
										</spam>
										<div className="progress mb-1">
											<div
												className="progress-bar progress-bar-striped progress-bar-animated bg-success"
												role="progressbar"
												style={{ width: "25%" }}
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
											/>
										</div>
									</div>
									<div>
										<spam className="font-weight-bold text-warning">
											CULTURAL
										</spam>
										<div className="progress mb-1">
											<div
												className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
												role="progressbar"
												style={{ width: "70%" }}
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
											/>
										</div>
									</div>
									<div>
										<spam className="font-weight-bold text-danger">
											EMOTIONAL
										</spam>
										<div className="progress mb-1">
											<div
												className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
												role="progressbar"
												style={{ width: "50%" }}
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
											/>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="tab-content">
										<div
											className="tab-pane active"
											id="home">
											<form
												className="form"
												action="##"
												method="post"
												id="registrationForm">
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="text"
															className="form-control"
															name="first_name"
															id="first_name"
															placeholder="first name"
															title="enter your first name if any."
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="text"
															className="form-control"
															name="last_name"
															id="last_name"
															placeholder="last name"
															title="enter your last name if any."
														/>
													</div>
												</div>

												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="text"
															className="form-control"
															name="phone"
															id="phone"
															placeholder="enter phone"
															title="enter your phone number if any."
														/>
													</div>
												</div>

												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="text"
															className="form-control"
															name="mobile"
															id="mobile"
															placeholder="enter mobile number"
															title="enter your mobile number if any."
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="email"
															className="form-control"
															name="email"
															id="email"
															placeholder="you@email.com"
															title="enter your email."
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="email"
															className="form-control"
															id="location"
															placeholder="somewhere"
															title="enter a location"
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="password"
															className="form-control"
															name="password"
															id="password"
															placeholder="password"
															title="enter your password."
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<input
															type="password"
															className="form-control"
															name="password2"
															id="password2"
															placeholder="password2"
															title="enter your password2."
														/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-12">
														<Link
															to="/thehomepage"
															className="text-decoration-none m-1">
															<button
																type="submit"
																className="btn btn-success mt-2">
																SAVE
															</button>
														</Link>
														<Link
															to="/translate"
															className="text-decoration-none m-1">
															<button
																type="submit"
																className="btn btn-success mt-2">
																PARENT TOOLS
															</button>
														</Link>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<img
						src="https://ucarecdn.com/d69a9695-5057-4956-8960-05a276a33afb/girlside.png"
						width="300rem"
						className="ml-5"
					/>
				</div>
			</div>
		);
	}
}

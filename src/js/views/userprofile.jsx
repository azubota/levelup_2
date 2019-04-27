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

									<ul className="list-group">
										<li className="list-group-item text-success text-center">
											Activity{" "}
											<i className="fa fa-dashboard fa-1x" />
										</li>
										<li className="list-group-item text-right text-center">
											<span className="pull-left">
												<strong>Math</strong>
											</span>{" "}
											125
										</li>
										<li className="list-group-item text-right text-center">
											<span className="pull-left">
												<strong>Reading</strong>
											</span>{" "}
											13
										</li>
										<li className="list-group-item text-right text-center">
											<span className="pull-left">
												<strong>Sensory</strong>
											</span>{" "}
											37
										</li>
										<li className="list-group-item text-right text-center">
											<span className="pull-left">
												<strong>Social</strong>
											</span>{" "}
											78
										</li>
									</ul>
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
														<button
															className="btn btn-lg btn-success"
															type="submit">
															<i className="glyphicon glyphicon-ok-sign" />{" "}
															Save
														</button>
														<button
															className="btn btn-lg text-success"
															type="reset">
															<i className="glyphicon glyphicon-repeat" />{" "}
															Reset
														</button>
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

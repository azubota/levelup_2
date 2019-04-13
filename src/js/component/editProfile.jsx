import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import logo from "../../img/thelevelup.png";

export class EditProfile extends React.Component {
	render() {
		return (
			<form>
				<div className="container border-success mt-2 mb-2 p-2 rounded bg-light">
					<div className="form-group row">
						<label
							htmlFor="inputEmail3"
							className="col-sm-2 col-form-label">
							Email address
						</label>
						<div className="col-sm-10">
							<input
								type="Email address"
								className="form-control"
								id="inputEmail3"
								placeholder="name@example.com"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label
							htmlFor="inputPassword3"
							className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								type="Password"
								className="form-control"
								id="inputPassword3"
								placeholder="Password"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label
							htmlFor="inputEmail3"
							className="col-sm-2 col-form-label">
							Child Name
						</label>
						<div className="col-sm-10">
							<input
								type="Name"
								className="form-control"
								id="inputEmail3"
								placeholder="Name"
							/>
						</div>
					</div>
					<fieldset className="form-group">
						<div className="row">
							<legend className="col-form-label col-sm-2 pt-0">
								Grade Level
							</legend>
							<div className="col-sm-10">
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="gridRadios"
										id="gridRadios1"
										value="option1"
										checked
									/>
									<label
										className="form-check-label"
										htmlFor="gridRadios1">
										PreK
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="gridRadios"
										id="gridRadios2"
										value="option2"
									/>
									<label
										className="form-check-label"
										htmlFor="gridRadios2">
										Kindergarten
									</label>
								</div>
								<div className="form-check disabled">
									<input
										className="form-check-input"
										type="radio"
										name="gridRadios"
										id="gridRadios3"
										value="option3"
									/>
									<label
										className="form-check-label"
										htmlFor="gridRadios3">
										1st Grade
									</label>
								</div>
							</div>
						</div>
					</fieldset>
					<div className="form-group row">
						<div className="col-sm-10">
							<a href="/lessonlist" className="btn btn-primary">
								Save Changes
							</a>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

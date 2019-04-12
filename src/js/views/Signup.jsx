import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class SignUp extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<img
						src="https://ucarecdn.com/d69a9695-5057-4956-8960-05a276a33afb/girlside.png"
						width="250rem"
						className="ml-5"
					/>
				</div>
				<div className="col-6">
					<div className="container border border-success mt-4 mb-4 p-3 rounded signin bg-light">
						<form>
							<div className="form-group ">
								<label htmlFor="exampleFormControlInput1">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="exampleFormControlInput1">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="password"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="exampleFormControlInput1">
									Child Name
								</label>
								<input
									type="name"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Name"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">
									My child:
								</label>
								<select
									className="form-control"
									id="exampleFormControlSelect1">
									<option>can count to 10</option>
									<option>knows the colors</option>
									<option>
										can count to 100 and knows the abc
									</option>
									<option>can count to 100</option>
									<option>knows the abc</option>
									<option>
										can count to 20 and knows the abc
									</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">
									Where did you hear about us?
								</label>
								<select
									className="form-control"
									id="exampleFormControlSelect1">
									<option>
										Social media (instagram, facebook)
									</option>
									<option>Google</option>
									<option>A friend</option>
									<option>Child friend</option>
									<option>other</option>
								</select>
							</div>
							<Link
								to="/lessonlist"
								className="text-decoration-none">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-1">
									Start free trial
								</button>
							</Link>
						</form>
					</div>
				</div>
				<div className="col-3" />
			</div>
		);
	}
}

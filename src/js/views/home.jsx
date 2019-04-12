import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm">
					<img
						src="https://ucarecdn.com/c968e6aa-8529-42e6-aa6b-b850da48e9c2/girl.png"
						width="250rem"
						className="ml-5"
					/>
				</div>
				<div className="col-sm">
					<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
						<form>
							<div className="form-group ">
								<input
									type="email"
									className="form-control btn-outline-success"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small
									id="emailHelp"
									className="form-text text-muted">
									Well never share your email with another kid
								</small>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control btn-outline-success"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
								<button
									type="button"
									className="btn btn-outline-success btn-sm mt-1">
									Forgot Password
								</button>
							</div>
							<div className="form-group form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="exampleCheck1"
								/>
								<label
									className="form-check-label"
									htmlFor="exampleCheck1">
									Remember me
								</label>
							</div>
							<Link
								to="/lessonlist"
								className="text-decoration-none">
								<button
									type="submit"
									className="btn btn-success btn-lg btn-block">
									Sign In
								</button>
							</Link>
							<Link to="/signup" className="text-decoration-none">
								<button
									type="submit"
									className="btn btn-outline-success btn-block mt-2">
									Become a member
								</button>
							</Link>
						</form>
					</div>
				</div>
				<div className="col-sm" />
			</div>
		);
	}
}

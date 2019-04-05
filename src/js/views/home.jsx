import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm">
					<img
						src="https://previews.dropbox.com/p/thumb/AAagsQlY6sefsQ65D9sCHh3yhaxOeCejXKvLlvdS9lpCJmwGmDxZVkGdgUMpoG2YU__HFLH_WuirSQUoXKCSLXmvlt3QXZlQLStXx5WhDBMFnLnnR0R_3MbdfzYn5XTUDwVOSztL9lpjkBd-X36wvC_nq42S8lA68hCI0JZb2R405nS-8ifSzFPXDjSZrds-1Dzdr-an_pa2U9IapgFL4yaMdHWqBwNFxsAXUIJMTjLBnn9qdjLo9vzm7zXD-Q3CLBDCrY9jdtJjwnaviaxhyDhoQWV2Zi6jdUHJ-NxCXQ_OONsB0yhf0dnU7doHQaNYnnvLT09RSUO5I2GxyM5EkOwX/p.png?size_mode=5"
						className="img-fluid"
					/>
				</div>
				<div className="col-sm mt-5">
					<div className="container border border-success mt-5 mb-2 p-2 rounded bg-light">
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
							<button
								type="submit"
								className="btn btn-success btn-lg btn-block">
								Sign In
							</button>
							<Link to="/demo">
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

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm">
					<img
						src="https://previews.dropbox.com/p/thumb/AAaqz2WA48Qm_mHMrxvjICsIVeJiOYlF8ri8XUlLfQ3eX-Kw-k0154Rf7GPMqY8lZJe6FaY3dvBqb4v-3s_ApNDgUnce_QxKsc5cmZ7gsGOFC6JYNLiGxnb1XXx_noD7rsVxN0Ru5DVE4npHDRK4vYddokaCDR0gRx3wWLBw4aMn62kOGCL79yDi33XMFurIt63ZdxtbWxDDOsKf2jdU6ZoiEA2Gq2-jd2siROm7m1f2VD8It8y9ZoEPr_3k8y2bVoiDEzLwPM320YMsxDBYMgzs93WcuZI60LPbUgrRZ4tWPJKj75z43Un4VKxUT8KqkCZK6q2PiNp3OwGm1-iqfRRF/p.png?size_mode=5"
						className="img-fluid"
					/>
				</div>
				<div className="col-sm">
					<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
						<form>
							<div className="form-group">
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

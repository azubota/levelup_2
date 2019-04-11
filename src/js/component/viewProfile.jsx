import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import logo from "../../img/thelevelup.png";

export class ViewProfile extends React.Component {
	render() {
		return (
			<div>
				<div className="container border-success mt-2 mb-2 p-2 rounded bg-light">
					<img
						src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/03/17/shutterstock-567624058.jpg?w968h681"
						alt="Johnny"
						style={{ maxWidth: "50%" }}
						className="card-img-top"
					/>
					<div className="card-body">
						<h5 className="card-title">Profile</h5>
						<p className="card-text">Name: Johnny Mill </p>
						<p className="card-text">Grade Level: 1st</p>
						<p className="card-text">
							Email: 12345@dadeschools.net{" "}
						</p>
						<a href="/edit" className="btn btn-primary">
							Edit Profile
						</a>
					</div>

					<div className="progress">
						<div
							className="progress-bar bg-success"
							role="progressbar"
							style={{ maxWidth: "25%" }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
			</div>
		);
	}
}

import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class HobbyComponent extends React.Component {
	render() {
		return (
			<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
				<div className="col-md-5">
					<div>
						<form>
							<div className="form-group">
								<label htmlFor="formGroupExampleInput">
									<h5>What are your hobbies</h5>
								</label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
									placeholder="Example input"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

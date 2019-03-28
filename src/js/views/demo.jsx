import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
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
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">
							Example select
						</label>
						<select
							className="form-control"
							id="exampleFormControlSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect2">
							Example multiple select
						</label>
						<select
							multiple
							className="form-control"
							id="exampleFormControlSelect2">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">
							Example textarea
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						/>
					</div>
					<Link to="/demo">
						<button
							type="submit"
							className="btn btn-outline-success btn-block mt-2">
							Become a member
						</button>
					</Link>
				</form>
			</div>
		);
	}
}

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { SignIn } from "../component/signin.jsx";

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
					<SignIn />
				</div>
				<div className="col-sm" />
			</div>
		);
	}
}

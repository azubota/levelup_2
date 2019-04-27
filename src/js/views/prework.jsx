import React from "react";
import PreWorkComponent from "../component/preworkcomponent.jsx";
import HobbyComponent from "../component/hobbycomponent.jsx";

export class Prework extends React.Component {
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
					<div className="row ">
						<div className="col-3">
							<PreWorkComponent />
						</div>
						<div className="col-3">
							<HobbyComponent />
						</div>
					</div>
				</div>
				<div className="col-3" />
			</div>
		);
	}
}

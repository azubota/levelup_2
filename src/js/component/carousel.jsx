import React from "react";

export class Carousel extends React.Component {
	render() {
		return (
			<div
				className="card container border border-success mt-2 mb-2 p-2 rounded signin bg-light"
				width="18rem">
				<img
					src="https://www.northeastohioparent.com/wp-content/uploads/2018/01/bigstock-Diverse-Group-Of-Kids-Study-Re-186016885.jpg"
					className="card-img-top"
					alt="cultural"
				/>
				<div className="card-body">
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
				</div>
			</div>
		);
	}
}

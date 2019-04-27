import React from "react";
import ReactDOM from "react-dom";

export class Popup extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>hihi</h1>
				<button onClick={this.togglePopup.bind(this)}>
					show popup
				</button>
				<button
					onClick={() => {
						alert("woooooooot?");
					}}>
					try me when popup is open
				</button>

				{this.state.showPopup ? (
					<Popup
						text="Close Me"
						closePopup={this.togglePopup.bind(this)}
					/>
				) : null}
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById("content"));

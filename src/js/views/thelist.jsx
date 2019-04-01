import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Thelist extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3">
					<img
						src="https://previews.dropbox.com/p/thumb/AAagsQlY6sefsQ65D9sCHh3yhaxOeCejXKvLlvdS9lpCJmwGmDxZVkGdgUMpoG2YU__HFLH_WuirSQUoXKCSLXmvlt3QXZlQLStXx5WhDBMFnLnnR0R_3MbdfzYn5XTUDwVOSztL9lpjkBd-X36wvC_nq42S8lA68hCI0JZb2R405nS-8ifSzFPXDjSZrds-1Dzdr-an_pa2U9IapgFL4yaMdHWqBwNFxsAXUIJMTjLBnn9qdjLo9vzm7zXD-Q3CLBDCrY9jdtJjwnaviaxhyDhoQWV2Zi6jdUHJ-NxCXQ_OONsB0yhf0dnU7doHQaNYnnvLT09RSUO5I2GxyM5EkOwX/p.png?size_mode=5"
						className="img-fluid"
					/>
				</div>
				<div className="col-6 border border-success mt-2 mb-2 p-2 rounded bg-light">
					<img
						src="https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/e2/8b/87/e28b878f-083c-5dc1-b45f-5121661991ae/mzl.fzqwedgw.png/643x0w.jpg"
						className="img-thumbnail rounded float-left"
					/>
					<img
						src="https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/e2/8b/87/e28b878f-083c-5dc1-b45f-5121661991ae/mzl.fzqwedgw.png/643x0w.jpg"
						className="img-thumbnail"
					/>
					<img
						src="https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/e2/8b/87/e28b878f-083c-5dc1-b45f-5121661991ae/mzl.fzqwedgw.png/643x0w.jpg"
						className="img-thumbnail"
					/>
				</div>

				<div className="col-3" />
			</div>
		);
	}
}

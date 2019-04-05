import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="kids">
				<div className="container">
					<div className="row">
						<div className="col-sm" />
						<div className="col-sm border rounded text-wrap">
							<nav className="navbar navbar-light justify-content-center">
								<a className="navbar-brand" href="#">
									<img
										src="https://previews.dropbox.com/p/thumb/AAZ5KGCMhXHoF4seNiuPH--Ip2TY8lW0P1w7cdi_OLoHKIAGSsdoiEjaKpnWJu74De7Hk381zS4e1VJNBHdapHaZOlbdZFfvg69TunI4bY1CivG9yVvb__PDXmE9A0FFOi8xUM-pSP2_w8NHtSmZwlzsySp_4wsWEHPuEpmk-t278qezjpzSnZ8o3bp4XyXLcepqfcCjw0_GjdPAviqreeOgncTr0mFfhMzUOjrX3cZ3sck54nwGrtMWhuVYBahq_GeKbHiyr_3A2BbQpCjKl7bBWKxEP13arXQ0MF2vpbTsjSXAFcvZo9C3poq6qCfGBf706xZtJxP9OphKgKwXSxiF/p.png?size_mode=5"
										className="img-fluid img-thumbnail"
									/>
								</a>
							</nav>
						</div>
						<div className="col-sm" />
					</div>
				</div>
			</div>
		);
	}
}

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { ForgotPassword } from "./views/forgotPassword.jsx";
import { Single } from "./views/single.jsx";
import { Lesson } from "./views/lesson.jsx";
import { Grades } from "./views/grades.jsx";
import { Thelist } from "./views/thelist.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
// import { MathLesson } from "./component/MathLesson";
// import { ReadingLesson } from "./component/ReadingLesson";
//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/thelist" component={Thelist} />›
							<Route path="/demo" component={Demo} />
							<Route path="/lesson" component={Lesson} />
							<Route path="/grades" component={Grades} />
							<Route
								path="/forgotPassword"
								component={ForgotPassword}
							/>
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);

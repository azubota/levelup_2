import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Signup } from "./views/Signup.jsx";
import { ForgotPassword } from "./views/forgotPassword.jsx";

import { Lesson } from "./views/lesson.jsx";
import { Profile } from "./views/profile.jsx";
import { Edit } from "./views/edit.jsx";

import { LessonList } from "./views/lessonlist.jsx";

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
							<Route exact path="/home" component={Home} />
							<Route path="/profile" component={Profile} />
							<Route path="/lessonlist" component={LessonList} />
							<Route path="/Signup" component={Signup} />
							<Route
								path="/forgotPassword"
								component={ForgotPassword}
							/>
							<Route path="/lesson" component={Lesson} />
							<Route path="/edit" component={Edit} />
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

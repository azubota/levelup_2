import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Signup } from "./views/Signup.jsx";
import { ForgotPassword } from "./views/forgotPassword.jsx";

import { Lesson } from "./views/lesson.jsx";
<<<<<<< HEAD
import { Grades } from "./views/grades.jsx";
import { Thelist } from "./views/thelist.jsx";
=======
import { LessonList } from "./views/lessonlist.jsx";
>>>>>>> e9db4a965aceaf6b0f9c2dbd57c60dd07653459b
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
<<<<<<< HEAD
							<Route path="/thelist" component={Thelist} />›
							<Route path="/demo" component={Demo} />
							<Route path="/lesson" component={Lesson} />
							<Route path="/grades" component={Grades} />
=======
							<Route path="/lessonlist" component={LessonList} />›
							<Route path="/Signup" component={Signup} />
>>>>>>> e9db4a965aceaf6b0f9c2dbd57c60dd07653459b
							<Route
								path="/forgotPassword"
								component={ForgotPassword}
							/>
							<Route path="/lesson" component={Lesson} />
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

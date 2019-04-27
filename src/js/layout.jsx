import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { SignUp } from "./views/Signup.jsx";
import { ForgotPassword } from "./views/forgotPassword.jsx";

import { Teach } from "./views/teacherscorner.jsx";
import { Prework } from "./views/prework.jsx";


import { TranslateDocs } from "./views/translateDocs.jsx";

import { Lesson } from "./views/lesson.jsx";
import { LessonCultural } from "./views/lessoncultural.jsx";

import { LessonList } from "./views/lessonlist.jsx";

import { LessonListCultural } from "./views/lessonlistcultural.jsx";
import { Contact } from "./views/contact.jsx";

import { Translate } from "./views/translate.jsx";
=======

import { LessonListCultural } from "./views/lessonlistcultural.jsx";
import { Contact } from "./views/contact.jsx";


import { Translate } from "./views/translate.jsx";

import { Profile } from "./views/profile.jsx";
import { UserProfile } from "./views/userprofile.jsx";
import { Edit } from "./views/edit.jsx";

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

							<Route path="/profile" component={Profile} />
							<Route
								path="/userprofile"
								component={UserProfile}
							/>
							<Route
								path="/forgotPassword"
								component={ForgotPassword}
							/>
							<Route path="/signup" component={SignUp} />
							<Route path="/contact" component={Contact} />
							<Route
								path="/translatedocs"
								component={TranslateDocs}
							/>
							<Route path="/translate" component={Translate} />
							<Route path="/lesson/:theid" component={Lesson} />
							<Route
								path="/lessoncultural/:theid"
								component={LessonCultural}
							/>
							<Route path="/lessonlist" component={LessonList} />

							<Route path="/teacherscorner" component={Teach} />
							<Route path="/prework" component={Prework} />

							<Route
								path="/lessonlistcultural"
								component={LessonListCultural}
							/>

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

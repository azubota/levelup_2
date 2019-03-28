import React from "react";

//include images into your bundle
import PropTypes from ".prop-types";
import logo from "../../img/logo.png";
export default class Readinglesson extends React.Component {
	render() {
		return (
			<readinglesson>
			<div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reading Lesson 1</h5>
        <p className="card-text"> Short a vowel</p>
        <a href="#" className="btn btn-primary">Reading Lesson 1</a>
      </div>
    </div>
  </div>
  		<div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reading Lesson 2</h5>
        <p className="card-text"> Short e vowel</p>
        <a href="#" className="btn btn-primary">Reading Lesson 1</a>
      </div>
    </div>
  </div>
  		<div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reading Lesson 3</h5>
        <p className="card-text"> Short i vowel</p>
        <a href="#" className="btn btn-primary">Reading Lesson 1</a>
      </div>
    </div>
  </div>
  </readinglesson>
			
		);
	}
}

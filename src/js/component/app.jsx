import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList />
        <SendMessageForm />
     </div>
    ); 
  }
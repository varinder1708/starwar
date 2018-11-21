import React, { Component } from "react";
import Login from "./components/Login";
import Planets from "./components/Planets";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user_validate: false };
  }
  validate = flag => {
    this.setState({ user_validate: flag });
  };
  render() {
    return (
      <div className="App">
        <Login onSubmit={this.validate} />
        {this.state.user_validate ? <Planets /> : ""}
      </div>
    );
  }
}

export default App;

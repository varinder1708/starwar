import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user_validate: false,  credential: true };
  }
  validateUser = obj => {
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => {
        data.results.map(a => {
           if(a.name==obj.username &&  a.birth_year==obj.password){
        //  if (a.name === "Luke Skywalker" && a.birth_year === "19BBY") {
            this.setState({ user_validate: true });
            this.props.onSubmit(true);
          } else {
            this.setState({ credential: false });
          }
        });
      });
  };

  onSubmit = e => {
    e.preventDefault();
    const credential = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    this.validateUser(credential);
  };
  render() {
    const isLoggedin = this.state.user_validate;
    const loginForm = (
      <form
        onSubmit={this.onSubmit}
        className={this.state.credential ? "" : "error"}
      >
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" />
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
    return <div className="Logincontainer">{isLoggedin ? "" : loginForm}</div>;
  }
}

export default Login;

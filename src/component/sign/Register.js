import React, { Component } from "react";
import "./register.css";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

const users = [];

export default class Register extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      username: e.target.username.value,
    });
    this.setState({
      password: e.target.password.value,
    });
  }
  submitForm(e) {
    var username = this.state.username;
    alert(username);
    var password = this.state.password;
    alert(password);
    // logic Password
    if (username != "a") {
      this.setState({
        loggedIn: true,
      });
      var r = this.state.loggedIn;
      alert(r);
    } else {
      Alert("FALSE");
    }
  }
  render() {
    if (this.state.loggedIn) {
      Alert("you have been logged in");
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <form className="form-1">
          <h1 className="enregistrer">Sign In</h1>
          <input
            className="in "
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <br />

          <input
            className="in "
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <br />
          <input
            className="in "
            type="email"
            placeholder="email@gmail.com"
            name="email"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <br />
          <input className="in " type="submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

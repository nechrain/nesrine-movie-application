import React from "react";
import "./sigin.css";

class Sigin extends React.Component {
  state = {
    modal: false,
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
    confirmpassword: "",
  };

  onChangename = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onChangelastname = (e) => {
    this.setState({ lastname: e.target.value });
  };
  onChangemail = (e) => {
    this.setState({ mail: e.target.value });
  };

  onChangepassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeconfirmpassword = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  save = () => {
    if (this.state.password !== this.state.confirmpassword) {
      alert("check your password");
    } else {
      alert("your inscription have been uploaded");
      localStorage.setItem("firstname", this.state.firstname);
      localStorage.setItem("lastname", this.state.lastname);
      localStorage.setItem("mail", this.state.mail);
      localStorage.setItem("password", this.state.password);
    }
  };

  render() {
    return (
      <div>
        <div className="form">
          <h1  className="ftitre"onClick={this.toggle}>Sign Up</h1>
          <div>
            <span className="titre2 ">First Name</span>
            <input
              className="email "
              type="text"
              placeholder="First Name..."
              onChange={this.onChangename}
            />
          </div>
          <div>
            <span className="titre2 ">Last Name</span>

            <input
              className="email "
              type="text"
              placeholder="Last Name..."
              onChange={this.onChangelastname}
            ></input>
          </div>
          <div>
            <span className="titre2 "> E-mail</span>
            <input
              className="email1"
              type="text"
              placeholder="Email..."
              onChange={this.onChangemail}
            />
          </div>
          <label className="titre2 ">Password</label>
          <input
            className="email "
            type="password"
            placeholder="Password..."
            onChange={this.onChangepassword}
          />
         
          <div>
            <button className="submit" onClick={this.save}>
              Submit
            </button>{" "}
            <button className="cancel" onClick={this.toggle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sigin;

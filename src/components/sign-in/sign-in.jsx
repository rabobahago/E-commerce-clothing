import React from "react";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    console.log(event.currentTarget);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign with password and email</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Emaill</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;

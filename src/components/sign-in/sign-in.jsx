import React from "react";
import FormInput from "../form-input/form-input";
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
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
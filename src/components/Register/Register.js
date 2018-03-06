import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://immense-sea-99510.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="br3 ba b--black-20 o-90 bg-near-black mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlform="email-address">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-washed-blue hover-lightest-blue hover-bg-dark-blue w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlform="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-washed-blue hover-lightest-blue hover-bg-dark-blue w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlform="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="pa2 input-reset ba bg-washed-blue hover-lightest-blue hover-bg-dark-blue w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black lightest-blue bg-dark-blue grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={this.onSubmitSignIn}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;

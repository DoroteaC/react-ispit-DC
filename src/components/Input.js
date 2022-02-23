import React, { Component } from "react";
import User from "./User";
import "./InputUsername.css";
import "../style.css";
import "./User.css";
class InputUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredInput: "",
      profile: null,
      repositories: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  submitHandler = async (event) => {
    event.preventDefault();
    console.log(this.state.enteredInput);

    await fetch(`https://api.github.com/users/${this.state.enteredInput}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          profile: data,
        });
      });

    await fetch(`https://api.github.com/users/${this.state.enteredInput}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          repositories: data,
        });
      });
  };

  changeHandler = (event) => {
    this.setState({
      ...this.state,
      enteredInput: event.target.value,
    });
  };

  resetHandler = () => {};

  render() {
    return (
      <div className="d-flex-col-cc h-100">
        <div>
          <form
            onSubmit={this.submitHandler}
            className="d-flex-col-cc gap-r10 form-container border-15 bg-sky-400"
          >
            <input
              type="text"
              className="peer mt-2  px-4 py-2 rounded-lg "
              placeholder="Unesite username:"
              value={this.state.enteredInput}
              onChange={this.changeHandler}
            />
            <button
              type="submit"
              className="bg-sky-100 hover:bg-sky-700 mt-2 px-4 py-2 rounded-lg"
            >
              Pretraži
            </button>
          </form>
        </div>
        <div className="user-container">
          <User
            profile={this.state.profile}
            repositories={this.state.repositories}
          />
        </div>
      </div>
    );
  }
}

export default InputUsername;

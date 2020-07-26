import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  inputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  inputNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    const { name, number } = this.state;

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.inputName}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.inputNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

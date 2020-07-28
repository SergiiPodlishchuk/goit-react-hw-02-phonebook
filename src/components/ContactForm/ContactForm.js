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

    const { name, number } = this.state;

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  checkedContact = (e) => {};

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

        <button type="submit" onClick={this.checkedContact}>
          Add contact
        </button>
      </form>
    );
  }
}

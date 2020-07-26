import React, { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";
// import TaskEditor from "./TaskList/TaskEditor";
// // import createTask from "./utils/createTask";
import { v4 as uuidv4 } from "uuid";
// import Filter from "./Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleTasks();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <div>
          Find contacts by name or number
          <input
            type="text"
            value={this.state.filter}
            onChange={(e) => this.onChangeFilter(e.target.value)}
          />
        </div>
        <ul>
          {visibleContacts.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */

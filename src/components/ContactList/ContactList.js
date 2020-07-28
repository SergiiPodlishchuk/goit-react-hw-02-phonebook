import React from "react";
import ContactLIstItem from "./ContactListItem";

export default function ContactListItem({ visibleContacts, oNdeleteContact }) {
  const arrFilterredContact = visibleContacts();
  return (
    <ul>
      {arrFilterredContact.map(({ id, name, number }) => {
        return (
          <ContactLIstItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => oNdeleteContact(id)}
          />
        );
      })}
    </ul>
  );
}

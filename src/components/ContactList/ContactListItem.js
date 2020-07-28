import React from "react";
export default function ContactListItem({ name, number, deleteContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
}

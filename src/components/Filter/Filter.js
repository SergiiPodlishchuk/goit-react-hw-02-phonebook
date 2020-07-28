import React from "react";

export default function Filter({ value, inputFilter }) {
  return (
    <div>
      Find contacts by name or number
      <input
        type="text"
        value={value}
        onChange={(e) => inputFilter(e.target.value)}
      />
    </div>
  );
}

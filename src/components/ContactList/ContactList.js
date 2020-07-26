<ul>
  {visibleContacts.map((contact) => {
    return (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    );
  })}
</ul>;

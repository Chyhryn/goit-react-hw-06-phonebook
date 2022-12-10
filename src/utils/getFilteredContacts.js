export const getFilteredContacts = (contacts, filterValue) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return filteredContacts;
};

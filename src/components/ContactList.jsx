import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { Contact } from './Contact';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

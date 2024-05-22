import { useSelector } from 'react-redux';
// import { Task } from 'components/Task/Task';
import { getContacts } from '../redux/selectors';
import { Contact } from './Contact';
// import { statusFilters } from 'redux/constants';
// import css from './TaskList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

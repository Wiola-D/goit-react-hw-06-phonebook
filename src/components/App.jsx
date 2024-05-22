import { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactList';
import { Filter } from './Filtered';

export const App = () => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>ContactList</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};

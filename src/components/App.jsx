import { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactList';

export const App = () => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>ContactList</h2>
        <ContactsList />
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import { ContactForm } from './ContactForm';

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
      </div>
    </div>
  );
};

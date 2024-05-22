import { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactList';
import { Filter } from './Filter';
import css from '../styles/App.module.css';

export const App = () => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>ContactList</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

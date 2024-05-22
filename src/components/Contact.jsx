import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import css from '../styles/Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.container}>
        <p className={css.liName}>{contact.name}: </p>
        <p>{contact.number}</p>
      </div>
      <button className={css.buttonDelete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
